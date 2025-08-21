import request from 'supertest';
import app from './app.js';
import { test, expect } from '@jest/globals';

test('GET /saludo debe responder con mensaje', async () => {
  const response = await request(app).get('/saludo');
  expect(response.statusCode).toBe(200);
  expect(response.body.mensaje).toBe('Hola mundo');
});
