import React, { Component } from 'react';
import './css/facturaStyle.css';

class Factura extends Component{
  render(){
    return(
      <div className="card text-center">
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.formaDePago}</h4>
        <p className="card-text text-secondary">Tajeta regalo: {this.props.data.tarjetaRegalo}</p>
        <p className="card-text text-secondary">Tienda: ${this.props.data.tienda}</p>
        <p className="card-text text-secondary">Destino: {this.props.data.destino}</p>
        </div>
      </div>
    );
  }
}
export default Factura;