import { obtenerUsuario } from './promesa.js';
import { test, expect } from '@jest/globals';

test('usuario asincrónico', async () => {
  const usuario = await obtenerUsuario('Santiago');
  expect(usuario.nombre).toBe('Santiago');
});
