import { describe, it, expect } from 'vitest';
import { validarProducto, calcularTotal, eliminarProducto } from './inventario.js';
describe('Inventario', () => {
  it('acepta un producto válido', () => expect(validarProducto('Mouse', 50, 2)).toBe(true));
  it('rechaza nombre vacío', () => expect(validarProducto(' ', 50, 2)).toBe(false));
  it('rechaza precio negativo', () => expect(validarProducto('Mouse', -1, 2)).toBe(false));
  it('rechaza cantidad fraccionaria', () => expect(validarProducto('Mouse', 50, 1.5)).toBe(false));
  it('rechaza cantidad negativa', () => expect(validarProducto('Mouse', 50, -1)).toBe(false));
  it('calcula el valor del inventario', () => expect(calcularTotal([{precio:50,cantidad:2},{precio:20,cantidad:3}])).toBe(160));
  it('calcula inventario vacío', () => expect(calcularTotal([])).toBe(0));
  it('elimina solo el producto indicado', () => expect(eliminarProducto([{id:1},{id:2}],1)).toEqual([{id:2}]));
});
