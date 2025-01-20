const request = require('supertest');
const Server = require('../server');
const mongoose = require('mongoose');
const config = require('../config');
const FeedbackModel = require('../models/feedback');

// Augmenter le timeout global de Jest
jest.setTimeout(60000);

describe('Feedback API', () => {
    let app;
    let server;

    // Setup before tests
    beforeAll(async () => {
        server = new Server();
        server.config = config.test;
        server.connect = await server.dbConnect();

        server.security();
        server.middleware();
        server.routes();
        app = server.app;

        // Nettoyer la collection des feedbacks
        const Feedback = server.connect.model('Feedback', FeedbackModel);
        await Feedback.deleteMany({});
    }, 30000);

    // Cleanup after tests
    afterAll(async () => {
        if (server && server.connect) {
            const Feedback = server.connect.model('Feedback');
            await Feedback.deleteMany({});
            await mongoose.disconnect();
        }
    }, 30000);

    describe('Create Feedback Tests', () => {
        // Ajouter beforeEach pour nettoyer avant chaque test
        beforeEach(async () => {
            const Feedback = server.connect.model('Feedback');
            await Feedback.deleteMany({});
        }, 5000);

        const validFeedback = {
            name: 'John Doe',
            message: 'This is a test feedback message'
        };

        // Augmenter le timeout à 5000ms
        it('should create a feedback with valid data', async () => {
            const response = await request(app)
                .post('/feedback')
                .send(validFeedback);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe(validFeedback.name);
            expect(response.body.message).toBe(validFeedback.message);
        }, 5000); // Augmenté de 300ms à 5000ms

        // Test rejet avec données manquantes
        it('should reject creation with missing name', async () => {
            const invalidFeedback = {
                message: 'Test message without name'
            };

            const response = await request(app)
                .post('/feedback')
                .send(invalidFeedback);

            expect(response.statusCode).toBe(403);
        }, 300);

        it('should reject creation with missing message', async () => {
            const invalidFeedback = {
                name: 'Test name without message'
            };

            const response = await request(app)
                .post('/feedback')
                .send(invalidFeedback);

            expect(response.statusCode).toBe(403);
        }, 300);
    });

    describe('Get Feedback Tests', () => {
        // Créer 100 feedbacks pour tester la performance
        beforeAll(async () => {
            const Feedback = server.connect.model('Feedback');
            // Nettoyer d'abord tous les feedbacks existants
            await Feedback.deleteMany({});
            
            const feedbacks = [];
            
            // Créer 100 feedbacks avec des dates de création différentes
            for(let i = 0; i < 100; i++) {
                feedbacks.push({
                    name: `User${i}`,
                    message: `Test feedback message ${i}`,
                    createdAt: new Date(Date.now() - i * 1000) // Dates décroissantes
                });
            }
            
            await Feedback.insertMany(feedbacks);
        }, 5000);

        // Test récupération de tous les feedbacks
        it('should retrieve all feedbacks', async () => {
            const response = await request(app)
                .get('/feedback');

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(100);
        }, 500);

        // Test tri par date de création
        it('should return feedbacks sorted by createdAt in descending order', async () => {
            const response = await request(app)
                .get('/feedback');

            expect(response.statusCode).toBe(200);
            
            // Vérifier que les dates sont bien triées
            const dates = response.body.map(feedback => new Date(feedback.createdAt).getTime());
            const sortedDates = [...dates].sort((a, b) => b - a);
            expect(dates).toEqual(sortedDates);
        }, 500);

        // Test de performance
        it('should respond within 500ms with 100 feedbacks', async () => {
            const startTime = Date.now();
            
            const response = await request(app)
                .get('/feedback');

            const endTime = Date.now();
            const responseTime = endTime - startTime;

            expect(response.statusCode).toBe(200);
            expect(responseTime).toBeLessThanOrEqual(500);
        }, 500);
    });
});