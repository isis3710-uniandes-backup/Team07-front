import React, { Component } from 'react';
import './css/usuarioStyle.css';
import {Link} from 'react-router-dom';

class Usuario extends Component{
  render(){
    return(
      <div className="card text-center">
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.nombre}</h4>
        <p className="card-text text-secondary">Talla: {this.props.data.email}</p>
        <Link to={{
          pathname:"/UsuarioDetail",
        }}  className="btn btn-outline-success" data={this.props.data}>Ver más</Link>
        </div>
      </div>
    );
  }
}
export default Usuario;