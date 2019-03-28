import React from 'react';
import shoes from '../ui/mockups/shoes.jpg'
import './css/producto-style.css';
const TarjetaRegalo = props =>{
  return(
    <div className="card text-center">
      <div className="overflow">
        <img className='card-img-top' src={props.data.imagenes[0].url} alt='Image 1'/>
      </div>
      <div className="card-body text-dark">
      <h2 className="card-title">{props.data.titulo}</h2>
      <p className="card-text text-secondary">{props.data.mensaje}</p>
      <a href="#" className="btn btn=">Comprar </a>
      </div>
    </div>
  );
}
export default TarjetaRegalo;
