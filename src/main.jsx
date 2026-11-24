import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {validarProducto, calcularTotal, eliminarProducto} from './inventario.js';
import './style.css';
const moneda = n => new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
function App(){
 const [productos,setProductos]=useState([{id:1,nombre:'Teclado',precio:85000,cantidad:5},{id:2,nombre:'Mouse',precio:45000,cantidad:8}]);
 const [error,setError]=useState('');
 function agregar(e){e.preventDefault();const f=new FormData(e.currentTarget);const nombre=String(f.get('nombre'));const precio=Number(f.get('precio'));const cantidad=Number(f.get('cantidad'));if(!validarProducto(nombre,precio,cantidad)){setError('Revisa el nombre, precio y cantidad.');return;}setProductos(prev=>[...prev,{id:crypto.randomUUID(),nombre:nombre.trim(),precio,cantidad}]);setError('');e.currentTarget.reset();}
 return <><header><span>LABORATORIO DEVOPS / ADSO</span><h1>Inventario CI</h1><p>Gestión de productos · Demostración de integración continua</p></header><main><section className="stats"><article>Referencias<strong>{productos.length}</strong></article><article>Unidades<strong>{productos.reduce((a,p)=>a+p.cantidad,0)}</strong></article><article>Valor del inventario<strong>{moneda(calcularTotal(productos))}</strong></article></section><section className="panel"><h2>Nuevo producto</h2><form onSubmit={agregar}><label>Nombre<input name="nombre" required /></label><label>Precio (COP)<input name="precio" type="number" min="1" required /></label><label>Cantidad<input name="cantidad" type="number" min="0" required /></label><button>Agregar producto</button></form>{error&&<p role="alert">{error}</p>}</section><section className="panel"><h2>Productos registrados</h2><div className="table"><table><thead><tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th>Acción</th></tr></thead><tbody>{productos.map(p=><tr key={p.id}><td>{p.nombre}</td><td>{moneda(p.precio)}</td><td>{p.cantidad}</td><td>{moneda(p.precio*p.cantidad)}</td><td><button className="remove" onClick={()=>setProductos(prev=>eliminarProducto(prev,p.id))}>Eliminar</button></td></tr>)}</tbody></table></div></section><footer>Datos temporales en memoria · Sin servidor ni base de datos</footer></main></>;
}
createRoot(document.getElementById('root')).render(<App/>);
