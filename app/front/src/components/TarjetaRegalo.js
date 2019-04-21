import React, { Component } from 'react';

import '../css/tr-style.css';
import {Link} from 'react-router-dom';
class TarjetaRegalo extends Component{
  render(){
  return(
    <div className="card text-center">
      <div className="overflow">
        <img className='card-img-top' src={this.props.data.imagenes[0].url} alt='Image 1'/>
      </div>
      <div className="card-body text-dark">
      <h2 className="card-title">{this.props.data.titulo}</h2>
      <p className="card-text text-secondary">{this.props.data.mensaje}</p>
      <div className="overflow">
        <img className='card-img-top' src={this.props.data.plantilla} alt='Image 1'/>
      </div>
      <Link to={{
        pathname:"/TarjetaRegaloDetail/"+this.props.data.id,
      }}  className="btn btn-outline-success" data={this.props.data}>Ver más</Link>
      </div>
    </div>
  );
}
}
export default TarjetaRegalo;
