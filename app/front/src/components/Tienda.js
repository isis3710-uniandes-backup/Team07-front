import React, { Component } from 'react';

import '../css/producto-style.css';
import {Link} from 'react-router-dom';
class Tienda extends Component{
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.imagen} alt='Image 1'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.nombre}</h4>
        <p className="card-text text-secondary">Direccion: {this.props.data.direccion}</p>
        <Link to={{
          pathname:"/TiendaDetail/"+this.props.data.id,
        }}  className="btn btn-outline-success" data={this.props.data}>Ver más</Link>
        </div>
      </div>
    );
  }
}
export default Tienda;
