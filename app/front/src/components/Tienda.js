import React, { Component } from 'react';
import {FormattedMessage} from "react-intl";

import './css/producto-style.css';
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
        <p className="card-text text-secondary"><FormattedMessage id="Direction"/>: {this.props.data.direccion}</p>
        <Link to={{
          pathname:"/TiendaDetail/"+this.props.data.id,
        }}  className="btn btn-outline-success" data={this.props.data}><FormattedMessage id="MoreDetails" /></Link>
        </div>
        
    
      </div>
    );
  }
}
export default Tienda;
