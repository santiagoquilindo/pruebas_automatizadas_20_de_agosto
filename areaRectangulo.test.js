import areaRectangulo from './areaRectangulo.js';
import { test, expect } from '@jest/globals';

test('Área de 4x3 debe ser 12', () => {
  expect(areaRectangulo(4, 3)).toBe(12);
});
