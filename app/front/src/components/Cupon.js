import React from 'react';

import './css/producto-style.css';
const Cupon = props =>{
  return(
    <div className="card text-center">
      <div className="overflow">
        <img className='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCk5eWvXs13e_7NnqtKtYikKS9jpX0nvRbfp0zAyYH13HmEq4TaQ" alt='Image 1'/>
      </div>
      <div className="card-body text-dark">
      <h4 className="card-title">{props.data.valor}</h4>
      <p className="card-text text-secondary">Talla: {props.data.fechaVencimiento}</p>
   
      <a href="#" className="btn btn=">Ver</a>
      </div>
    </div>
  );
}
export default Cupon;
