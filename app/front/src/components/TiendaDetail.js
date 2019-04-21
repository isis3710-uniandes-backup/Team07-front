import React, { Component } from 'react';

import '../css/producto-style.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {FormattedMessage} from "react-intl";
import {FormattedNumber} from 'react-intl';
import {FormattedDate} from 'react-intl';
import  {
  createClass,
  PropTypes,
} from 'react';
import {
  IntlMixin,
} from 'react-intl';
class TiendaDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      nombre:"",
      productos:[],
      direccion:"",
      marcas:[],
      promociones:[],
      imagen:""
      
    };
  }

  componentDidMount() {
        var id=this.props.match.params.idTienda;
        var i;
            axios.get('http://localhost:3001/tiendas/'+id)
                .then((response) => {
                    var state = this.state;
                    var tienda= response.data;
                    state.id = id;
                    state.nombre = tienda.nombre;
                    state.direccion = tienda.direccion;
                    state.imagen = tienda.imagen;
                    
                
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }
    postTienda=()=>{
      let nombre=document.getElementById('nombrePost').value;
      let direccion=document.getElementById('direccionPost').value;
    
      let img=document.getElementById('urlPost').value;
     
  
      let tienda={
        nombre:nombre,
        direccion:direccion,
        imagen:img
        
        
                
      }
      axios.post('http://localhost:3001/tiendas', tienda);
      alert('Creacion correcta');
    
    }
    putTienda=()=>{
      let nombre=document.getElementById('nombrePut').value;
      if(nombre==""){
        nombre=this.state.nombre;
      }
      let direccion=document.getElementById('direccionPut').value;
      if(direccion==""){
        direccion=this.state.direccion;
      }
    
      let img=document.getElementById('urlPut').value;
      if(img==""){
        img=this.state.imagen;
      }
  
     
      let tienda={
        nombre:nombre,
        imagen:img,
        direccion:direccion,
      
      }
      axios.put('http://localhost:3001/tiendas/'+this.state.id, tienda);
      console.log(this.state.id);
    }
    deleteTienda=()=>{
      axios.delete('http://localhost:3001/tiendas/'+this.state.id);
      window.location.href = 'http://localhost:3000/TiendaList';
      console.log(this.state.id);
    }
  render(){
    return(
      <div className="container">
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src={this.state.imagen} alt='Image 1'/>
          </div>
            <div className="card-body text-dark">
            <h4 className="card-title">{this.state.nombre}</h4>
            <p className="card-text text-secondary"><FormattedMessage id="Direction" />: {this.state.direccion}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Products" />: Camiseta Polo</p>
            <p className="card-text text-secondary"><FormattedMessage id="Products" />: Tenis Reebok</p>
            <p className="card-text text-secondary"><FormattedMessage id="Promotions" />: Madrugon Falabella</p>
            <p className="card-text text-secondary"><FormattedMessage id="Promotions" />: BlackFriday</p>
            
            <div className="container">
            <Link to={{
              pathname:"/MarcaList",
            }}  className="btn btn-outline-primary float-left"><FormattedMessage id="Back" /></Link>
            <button type="button" className="btn btn-danger float-right" onClick={this.deleteTienda}><FormattedMessage id="Delete" /></button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1><FormattedMessage id="Create" /> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12">Nombre producto:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePost" placeholder="Enter name"/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Url de imagen:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPost" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Direccion:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="direccionPost" placeholder="Enter tags"/>
        </div>
        </div>
        
      
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={this.postTienda}>Crear</button>
          </div>
        </div>
        </form >
      </div>
      <div className="float-left abc">
        <h1>Actualizar </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12">Nombre producto:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePut" placeholder={this.state.nombre}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" >Url de imagen:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPut" placeholder={this.state.src}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" >Direccion:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="direccionPut" placeholder={this.state.clasificacion}/>
        </div>
        </div>
        
       
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-info" onClick={this.putTienda}>Actualizar</button>
          </div>
        </div>
        </form >
      </div>
      </div>
    );
  }
}
export default TiendaDetail;
