import React, { Component } from 'react';

import '../css/destinoStyle.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {FormattedMessage} from "react-intl";

class FacturaDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      src:"",
      valorCompra:"",
      formaDePago:"",      
      fechaCompra:"",
      destino:"",
      tienda:"",
      tarjetaRegalo:"",
      srcTarjeta:""
    };
  }

  componentDidMount() {    
        var id=this.props.match.params.idFactura;        
        var i;
            axios.get('http://localhost:3001/factura/'+id)
                .then((response) => {
                    var state = this.state;
                    var factura = response.data;
                    state.id = id;
                    state.src = factura.src;
                    state.valorCompra = factura.valorCompra;                    
                    state.formaDePago = factura.formaDePago;
                    state.fechaCompra = factura.fechaCompra;
                    state.destino = factura.destino;
                    state.tienda = factura.tienda;
                    state.tarjetaRegalo = factura.tarjetaRegalo;
                    state.srcTarjeta = factura.srcTarjeta;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }

    postFactura=()=>{
      let direccion=document.getElementById('direccionPost').value;
      let ciudad=document.getElementById('ciudadPost').value;
      let email=document.getElementById('emailPost').value;
      let img=document.getElementById('urlPost').value;
      let fisica=document.getElementById('fisicaPost').value;

      let factura={
        src:img,        
        ciudad:ciudad,
        direccion:direccion,
        email:email,
        fisica:fisica
      }
      axios.post('http://localhost:3001/factura', factura);
      return false;
    }

    putFactura=()=>{
      let direccion=document.getElementById('direccionPut').value;
      if(direccion===""){
        direccion=this.state.direccion;
      }
      let ciudad=document.getElementById('ciudadPut').value;
      if(ciudad===""){
        ciudad=this.state.ciudad;
      }
      let email=document.getElementById('emailPut').value;
      if(email===""){
        email=this.state.email;
      }
      let img=document.getElementById('urlPut').value;
      if(img===""){
        img=this.state.src;
      }
      let fisica=document.getElementById('fisicaPut').value;
      if(fisica===""){
        fisica=this.state.fisica;
      }
      let factura={
        src:img,        
        ciudad:ciudad,
        direccion:direccion,
        email:email,
        fisica:fisica
      }
      axios.put('http://localhost:3001/factura/'+this.state.id, factura);
    }

    deleteFactura=()=>{
      axios.delete('http://localhost:3001/factura/'+this.state.id);
      window.location.href = 'http://localhost:3000/FacturaList';
    }

  render(){
    return(
      <div className="container">
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src={this.state.src} alt='dest'/>
          </div>
            <div className="card-body text-dark">
            
            <p className="card-text text-secondary"><FormattedMessage id="Direction"/>: {this.state.valorCompra}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Email"/>: {this.state.formaDePago}</p>
            <div className="container">
            <Link to={{
              pathname:"/DestinoList",
            }}  className="back"><FormattedMessage id="Back"/><span className="bg"></span></Link>
            <button type="button" className="del float-right" onClick={this.deleteFactura}><FormattedMessage id="Delete"/><span className="bg"></span></button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1><FormattedMessage id="CrearNuevo"/></h1>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              <label className="control-label col-sm-12" for="ciudadPost"><FormattedMessage id="City"/>:</label>
              <input type="text" className="form-control" id="ciudadPost" placeholder="Enter city"/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPost"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPost" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="direccionPost"><FormattedMessage id="Direction"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="direccionPost" placeholder="Enter direction"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="emailPost"><FormattedMessage id="Email"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="emailPost" placeholder="Enter email"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="fisicaPost"><FormattedMessage id="Physic"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fisicaPost" placeholder="Enter yes or no"/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="create" onClick={this.postFactura}><FormattedMessage id="Create"/></button>
          </div>
        </div>
        </form>
      </div>
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify"/> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12" for="ciudadPut"><FormattedMessage id="City"/>:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="ciudadPut" placeholder={this.state.valorCompra}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPut"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPut" placeholder={this.state.src}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="direccionPut"><FormattedMessage id="Direction"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="direccionPut" placeholder={this.state.valorCompra}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="emailPut"><FormattedMessage id="Email"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  id="emailPut" placeholder={this.state.valorCompra}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="fisicaPut"><FormattedMessage id="Physic"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fisicaPut"  placeholder={this.state.valorCompra}/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="back" onClick={this.putFactura}><FormattedMessage id="Modify"/></button>
          </div>
        </div>
        </form>
      </div>
      </div>
    );
  }
}
export default FacturaDetail;
