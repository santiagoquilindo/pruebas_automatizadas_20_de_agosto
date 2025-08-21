import esPar from './esPar.js';
import { test, expect } from '@jest/globals';

test('4 es par', () => {
  expect(esPar(4)).toBe(true);
});

test('5 no es par', () => {
  expect(esPar(5)).toBe(false);
});
