import React, { Component } from 'react';
import '../css/destinoStyle.css';

import {Link} from 'react-router-dom';

class Destino extends Component{
  render(){
    return( 
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='recurso'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.ciudad}</h4>
        <p className="card-text text-secondary">Direccion: {this.props.data.direccion}</p>
        <p className="card-text text-secondary">Email:{this.props.data.email}</p>
        </div>
      </div>
    );
  }
}
export default Destino;