const request = require('supertest');
const Server = require('../server');
const mongoose = require('mongoose');
const config = require('../config');
const ContactModel = require('../models/contact');
const UserModel = require('../models/user');

// Augmenter le timeout global de Jest
jest.setTimeout(60000);

describe('Contact API', () => {
    let app;
    let server;
    let authToken;

    // Setup before tests
    beforeAll(async () => {
        server = new Server();
        server.config = config.test;
        server.connect = await server.dbConnect();

        server.security();
        server.middleware();
        server.routes();
        app = server.app;

        // Créer un utilisateur pour les tests d'authentification
        const User = server.connect.model('User', UserModel);
        await User.deleteMany({});
        await User.create({
            name: 'testuser',
            password: 'testpass123',
            status: 'active'
        });

        // Obtenir un token valide pour les tests
        const loginResponse = await request(app)
            .get('/login')
            .query({
                login: 'testuser',
                password: 'testpass123'
            });
        authToken = loginResponse.body.token;

        // Nettoyer la collection des contacts
        const Contact = server.connect.model('Contact', ContactModel);
        await Contact.deleteMany({});
    }, 30000);

    // Cleanup after tests
    afterAll(async () => {
        if (server && server.connect) {
            const Contact = server.connect.model('Contact');
            await Contact.deleteMany({});
            const User = server.connect.model('User');
            await User.deleteMany({});
            await mongoose.disconnect();
        }
    }, 30000);

    describe('Create Contact Tests', () => {
        const validContact = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            mobilePhone: '0123456789',
            arrivedAt: new Date('2024-03-20'),
            departureAt: new Date('2024-03-25'),
            message: 'Test message'
        };

        // Test création avec données valides
        it('should create a contact with valid data', async () => {
            const response = await request(app)
                .post('/contact')
                .send(validContact);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('id');
            expect(response.body.firstName).toBe(validContact.firstName);
            expect(response.body.email).toBe(validContact.email);
        }, 300);

        // Test rejet avec données manquantes
        it('should reject creation with missing data', async () => {
            const invalidContact = { ...validContact };
            delete invalidContact.firstName;

            const response = await request(app)
                .post('/contact')
                .send(invalidContact);

            expect(response.statusCode).toBe(403);
        }, 300);

        // Test validation format email
        it('should reject invalid email format', async () => {
            const invalidEmailContact = {
                ...validContact,
                email: 'invalid-email'
            };

            const response = await request(app)
                .post('/contact')
                .send(invalidEmailContact);

            expect(response.statusCode).toBe(403);
        }, 300);

        // Test validation des dates
        it('should reject invalid date format', async () => {
            const invalidDateContact = {
                ...validContact,
                arrivedAt: 'invalid-date',
                departureAt: 'invalid-date'
            };

            const response = await request(app)
                .post('/contact')
                .send(invalidDateContact);

            expect(response.statusCode).toBe(403);
        }, 300);

        // Test validation logique des dates (arrivée avant départ)
        it('should reject when departure date is before arrival date', async () => {
            const invalidDatesContact = {
                ...validContact,
                arrivedAt: new Date('2024-03-25'),
                departureAt: new Date('2024-03-20')
            };

            const response = await request(app)
                .post('/contact')
                .send(invalidDatesContact);

            expect(response.statusCode).toBe(403);
        }, 300);
    });

    describe('Get Contacts Tests', () => {
        // Nettoyer et créer 100 contacts pour tester la performance
        beforeAll(async () => {
            const Contact = server.connect.model('Contact');
            // Nettoyer d'abord tous les contacts existants
            await Contact.deleteMany({});
            
            const contacts = [];
            
            // Créer exactement 100 contacts avec des dates de création différentes
            for(let i = 0; i < 100; i++) {
                contacts.push({
                    firstName: `User${i}`,
                    lastName: `Test${i}`,
                    email: `user${i}@test.com`,
                    mobilePhone: `0123456${i.toString().padStart(3, '0')}`,
                    arrivedAt: new Date('2024-03-20'),
                    departureAt: new Date('2024-03-25'),
                    message: `Test message ${i}`,
                    createdAt: new Date(Date.now() - i * 1000) // Dates décroissantes
                });
            }
            
            await Contact.insertMany(contacts);
        }, 5000);

        // Test récupération de tous les contacts
        it('should retrieve all contacts with authentication', async () => {
            const response = await request(app)
                .get('/contacts')
                .set('Authorization', authToken);

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(100);
        }, 500);

        // Test tri par date de création
        it('should return contacts sorted by createdAt in descending order', async () => {
            const response = await request(app)
                .get('/contacts')
                .set('Authorization', authToken);

            expect(response.statusCode).toBe(200);
            
            // Vérifier que les dates sont bien triées
            const dates = response.body.map(contact => new Date(contact.createdAt).getTime());
            const sortedDates = [...dates].sort((a, b) => b - a);
            expect(dates).toEqual(sortedDates);
        }, 500);

        // Test protection de la route
        it('should reject access without authentication', async () => {
            const response = await request(app)
                .get('/contacts');

            expect(response.statusCode).toBe(401);
        }, 500);

        it('should reject access with invalid token', async () => {
            const response = await request(app)
                .get('/contacts')
                .set('Authorization', 'invalid_token');

            expect(response.statusCode).toBe(403);
        }, 500);

        // Test de performance
        it('should respond within 500ms with 100 contacts', async () => {
            const startTime = Date.now();
            
            const response = await request(app)
                .get('/contacts')
                .set('Authorization', authToken);

            const endTime = Date.now();
            const responseTime = endTime - startTime;

            expect(response.statusCode).toBe(200);
            expect(responseTime).toBeLessThanOrEqual(500);
        }, 500);
    });

    describe('Delete Contact Tests', () => {
        let contactIdToDelete;

        // Créer un contact pour le test de suppression
        beforeAll(async () => {
            const Contact = server.connect.model('Contact');
            const testContact = await Contact.create({
                firstName: 'DeleteTest',
                lastName: 'User',
                email: 'delete.test@example.com',
                mobilePhone: '0123456789',
                arrivedAt: new Date('2024-03-20'),
                departureAt: new Date('2024-03-25'),
                message: 'Test message for deletion'
            });
            contactIdToDelete = testContact.id;
        }, 5000);

        // Test suppression avec ID valide
        it('should delete contact with valid ID', async () => {
            const response = await request(app)
                .delete(`/contact/${contactIdToDelete}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('id', contactIdToDelete);

            // Vérifier que le contact a bien été supprimé
            const Contact = server.connect.model('Contact');
            const deletedContact = await Contact.findById(contactIdToDelete);
            expect(deletedContact).toBeNull();
        }, 5000);

        // Test suppression avec ID invalide
        it('should handle invalid ID correctly', async () => {
            const invalidId = 'invalid_id_123';
            const response = await request(app)
                .delete(`/contact/${invalidId}`);

            expect(response.statusCode).toBe(403);
            expect(response.body).toHaveProperty('code', 403);
            expect(response.body).toHaveProperty('message', 'Bad request');
        }, 5000);

        // Test suppression avec ID inexistant mais valide format
        it('should handle non-existent ID correctly', async () => {
            const nonExistentId = '507f1f77bcf86cd799439011'; // ID MongoDB valide mais inexistant
            const response = await request(app)
                .delete(`/contact/${nonExistentId}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({});
        }, 5000);

        // Test performance de la suppression
        it('should delete contact within 200ms', async () => {
            // Créer un nouveau contact pour le test de performance
            const Contact = server.connect.model('Contact');
            const testContact = await Contact.create({
                firstName: 'SpeedTest',
                lastName: 'User',
                email: 'speed.test@example.com',
                mobilePhone: '0123456789',
                arrivedAt: new Date('2024-03-20'),
                departureAt: new Date('2024-03-25'),
                message: 'Test message for speed test'
            });

            const startTime = Date.now();
            
            const response = await request(app)
                .delete(`/contact/${testContact.id}`);

            const endTime = Date.now();
            const responseTime = endTime - startTime;

            expect(response.statusCode).toBe(200);
            expect(responseTime).toBeLessThanOrEqual(200);
        }, 5000);
    });
}); 