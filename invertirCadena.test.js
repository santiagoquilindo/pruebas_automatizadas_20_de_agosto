import invertirCadena from './invertirCadena.js';
import { test, expect } from '@jest/globals';

test('invierte "hola" a "aloh"', () => {
  expect(invertirCadena('hola')).toBe('aloh');
});
