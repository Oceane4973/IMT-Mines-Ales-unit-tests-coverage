const request = require('supertest');
const Server = require('../server');
const mongoose = require('mongoose');
const config = require('../config');
const UserModel = require('../models/user');

// Augmenter le timeout global de Jest
jest.setTimeout(60000);

describe('Authentication API', () => {
    let app;
    let server;
    let validToken;

    // Setup before tests
    beforeAll(async () => {
        server = new Server();
        server.config = config.test;
        server.connect = await server.dbConnect();

        server.security();
        server.middleware();
        server.routes();
        app = server.app;

        // Enregistrer le modèle User et créer l'utilisateur test
        const User = server.connect.model('User', UserModel);
        await User.deleteMany({}); // Nettoyer avant de créer
        await User.create({
            name: 'testuser',
            password: 'testpass123',
            status: 'active'
        });
    }, 30000);

    // Cleanup after tests
    afterAll(async () => {
        if (server && server.connect) {
            const User = server.connect.model('User');
            await User.deleteMany({});
            await mongoose.disconnect();
        }
    }, 30000);

    describe('Login Tests', () => {
        // Test successful authentication
        it('should authenticate with valid credentials', async () => {
            const response = await request(app)
                .get('/login')
                .query({
                    login: 'testuser',
                    password: 'testpass123'
                });

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('token');
            validToken = response.body.token;
        }, 5000); // Augmenter le timeout à 5000ms

        // Test failed authentication
        it('should fail with invalid credentials', async () => {
            const response = await request(app)
                .get('/login')
                .query({
                    login: 'wronguser',
                    password: 'wrongpass'
                });

            expect(response.statusCode).toBe(401);
        }, 5000);

        // Test JWT token validation
        it('should validate JWT token correctly', async () => {
            const response = await request(app)
                .get('/auth')
                .set('Authorization', validToken);

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe('ok');
        }, 5000);

        // Test protected route access without token
        it('should block access to protected routes without token', async () => {
            const response = await request(app)
                .get('/contacts');

            expect(response.statusCode).toBe(401);
        }, 5000);

        // Test protected route access with invalid token
        it('should block access with invalid token', async () => {
            const response = await request(app)
                .get('/contacts')
                .set('Authorization', 'invalid.token.here');

            expect(response.statusCode).toBe(403);
        }, 5000);
    });
}); 