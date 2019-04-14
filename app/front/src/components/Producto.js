import React, { Component } from 'react';
import shoes from '../ui/mockups/shoes.jpg'
import './css/producto-styleMs.css';
import {Link} from 'react-router-dom';
class Producto extends Component{
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='Image 1'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.nombre}</h4>
        <p className="card-text text-secondary">Precio: ${this.props.data.precio}</p>
        <Link to={{
          pathname:"/ProductoDetail/"+this.props.data.id,
        }}  className="btn btn-outline-success" data={this.props.data}>Ver más</Link>
        </div>
      </div>
    );
  }
}
export default Producto;
