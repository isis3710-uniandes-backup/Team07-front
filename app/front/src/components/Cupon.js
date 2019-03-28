import React from 'react';

import './css/producto-style.css';
const Producto = props =>{
  return(
    <div className="card text-center">
      <div className="overflow">
        <img className='card-img-top' src="../ui/mockups/shoes.PNG" alt='Image 1'/>
      </div>
      <div className="card-body text-dark">
      <h4 className="card-title">{props.data.}</h4>
      <p className="card-text text-secondary">Talla: {props.data.marcas}</p>
      <p className="card-text text-secondary">Precio: ${props.data.precio}</p>
      <p className="card-text text-secondary">Stock: {props.data.cantidadDisponible}</p>
      <a href="#" className="btn btn=">Comprar </a>
      </div>
    </div>
  );
}
export default Producto;
