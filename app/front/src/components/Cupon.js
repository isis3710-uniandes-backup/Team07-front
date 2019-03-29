import React, { Component } from 'react';

import './css/producto-style.css';
import {Link} from 'react-router-dom';
class Cupon extends Component{
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCk5eWvXs13e_7NnqtKtYikKS9jpX0nvRbfp0zAyYH13HmEq4TaQ" alt='Image 1'/>
        </div>
        <div className="card-body text-dark">
        <h3 className="card-title">Referencia: {this.props.data.id}</h3>
        <h4 className="card-title">Fecha de vencimiento: {this.props.data.fechaVencimiento}</h4>
        <p className="card-text text-secondary">Valor: ${this.props.data.valor}</p>
        <Link to={{
          pathname:"/CuponDetail/"+this.props.data.id,
        }}  className="btn btn-outline-success" data={this.props.data}>Ver más</Link>
        </div>
      </div>
    );
  }
}
export default Cupon;



