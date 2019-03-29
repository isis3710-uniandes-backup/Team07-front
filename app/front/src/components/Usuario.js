import React, { Component } from 'react';
import './css/usuarioStyle.css';

import {Link} from 'react-router-dom';

class Usuario extends Component{
  render(){
    return(
      <div className="card text-center">
      <div className="overflow">
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.nombre}</h4>
        <p className="card-text text-secondary">Email: {this.props.data.email}</p>
        </div>
      </div>
    );
  }
}
export default Usuario;