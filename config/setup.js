const pactum = require('pactum');


const BASE_URL = process.env.BASE_URL || 'http://localhost:4000';
const AUTH_TOKEN = process.env.AUTH_TOKEN || 'mock-auth-token-for-demo';
const MOCK_MODE = process.env.MOCK_MODE || 'true'; 

module.exports = {
    BASE_URL,
    AUTH_TOKEN,
    MOCK_MODE
};

