import React from 'react';
import shoes from '../ui/mockups/shoes.jpg'
import './css/producto-style.css';
const Producto = props =>{
  return(
    <div className="card text-center">
      <div className="overflow">
        <img className='card-img-top' src={props.data.src} alt='Image 1'/>
      </div>
      <div className="card-body text-dark">
      <h4 className="card-title">{props.data.nombre}</h4>
      <p className="card-text text-secondary">Talla: {props.data.talla}</p>
      <p className="card-text text-secondary">Precio: ${props.data.precio}</p>
      <p className="card-text text-secondary">Stock: {props.data.cantidadDisponible}</p>
      <a href="#" className="btn btn=">Ver</a>
      </div>
    </div>
  );
}
export default Producto;
