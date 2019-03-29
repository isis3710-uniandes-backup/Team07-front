import React, { Component } from 'react';
import './css/facturaStyle.css';

import {Link} from 'react-router-dom';

class Factura extends Component{
  render(){
    return(
      <div className="card text-center">
      <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='recurso'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">${this.props.data.valorCompra}</h4>
        <p className="card-text text-secondary">Forma de pago: {this.props.data.formaDePago}</p>
        <p className="card-text text-secondary">Fecha: {this.props.data.fechaCompra}</p>
        <p className="card-text text-secondary">Destino: {this.props.data.destino}</p>
        <p className="card-text text-secondary">Tienda: {this.props.data.tienda}</p>
        <p className="card-text text-secondary">Tarjeta regalo: {this.props.data.tarjetaRegalo}</p>
        </div>
      </div>
    );
  }
}
export default Factura;