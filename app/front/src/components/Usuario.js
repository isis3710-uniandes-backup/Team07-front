import React, { Component } from 'react';
import './css/usuarioStyle.css';

class Usuario extends Component{
  render(){
    return(
      <div className="card text-center">
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.nombre}</h4>
        <p className="card-text text-secondary">Email: {this.props.data.email}</p>
        </div>
      </div>
    );
  }
}
export default Usuario;