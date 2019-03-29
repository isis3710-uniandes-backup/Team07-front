import React, { Component } from 'react';
import shoes from '../ui/mockups/shoes.jpg'
import './css/producto-style.css';
import {Link} from 'react-router-dom';
class ProductoDetail extends Component{
  console.log(this.state);
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='Image 1'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.nombre}</h4>
        <p className="card-text text-secondary">Talla: {this.props.data.talla}</p>
        <p className="card-text text-secondary">Precio: ${this.props.data.precio}</p>
        <p className="card-text text-secondary">Stock: {this.props.data.cantidadDisponible}</p>
        <Link to={{
          pathname:"/ProductoDetail",
        }}  className="btn btn-outline-primary" data={this.props.data}>Volver</Link>
        </div>
      </div>
    );
  }
}
export default Producto;
