export function obtenerUsuario(nombre) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ nombre }), 500);
  });
}
