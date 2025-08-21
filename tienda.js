let productos = [];

export function agregarProducto(nombre, precio) {
  productos.push({ nombre, precio });
}

export function buscarProducto(nombre) {
  return productos.find(p => p.nombre === nombre);
}

export function eliminarProducto(nombre) {
  productos = productos.filter(p => p.nombre !== nombre);
}

export function calcularTotal(lista) {
  return lista.reduce((total, p) => total + p.precio, 0);
}

export function limpiar() {
  productos = [];
}

export function obtenerTodos() {
  return productos;
}
