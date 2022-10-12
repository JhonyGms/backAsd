import app from '../src/index';
import request from 'supertest';

describe('GET /api/test-soyyo', {} => {
    test('should response whit a 200 status code', () => {
        await request(app)
    })
}