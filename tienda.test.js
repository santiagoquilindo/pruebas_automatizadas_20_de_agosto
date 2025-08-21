import {
  agregarProducto,
  buscarProducto,
  eliminarProducto,
  calcularTotal,
  limpiar,
  obtenerTodos
} from './tienda.js';

import { test, expect, beforeEach } from '@jest/globals';

beforeEach(() => limpiar());

test('agregar y buscar producto', () => {
  agregarProducto('pan', 1000);
  expect(buscarProducto('pan').precio).toBe(1000);
});

test('eliminar producto', () => {
  agregarProducto('leche', 3000);
  eliminarProducto('leche');
  expect(buscarProducto('leche')).toBeUndefined();
});

test('calcular total', () => {
  agregarProducto('pan', 1000);
  agregarProducto('leche', 3000);
  expect(calcularTotal(obtenerTodos())).toBe(4000);
});
