export function validarProducto(nombre, precio, cantidad) {
  return nombre.trim().length > 0 && Number.isFinite(precio) && precio > 0 && Number.isInteger(cantidad) && cantidad >= 0;
}
export function calcularTotal(productos) {
  return productos.reduce((total, p) => total + p.precio * p.cantidad, 0);
}
export function eliminarProducto(productos, id) {
  return productos.filter(p => p.id !== id);
}


// prueba de integracion 