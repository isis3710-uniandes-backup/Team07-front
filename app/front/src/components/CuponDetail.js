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
class CuponDetail extends Component{




  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      idMarca:0,
      idTienda:0,
      valor:0,
      fechaVencimiento:""
     
    };
  }

  componentDidMount() {
        const id=this.props.match.params.idCupon;
        console.log(id);
        var i;
            axios.get('http://localhost:3001/cupones/'+id)
                .then((response) => {
                    var state = this.state;
                    var cupon = response.data;
                    state.idMarca = cupon.idMarca;
                    //state.productos = tienda.productos;
                    state.idTienda = cupon.idTienda;
                    state.id=id
                    //tiendas
                    //promociones
                    
                    
                    state.valor = cupon.valor;
                    state.fechaVencimiento = cupon.fechaVencimiento;
                    
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }

       postCupon=()=>{
      let idMarca=document.getElementById('idMarcaPost').value;
      let idTienda=document.getElementById('idTiendaPost').value;
      let valor=document.getElementById('valorPost').value;
      let fechaVencimiento=document.getElementById('fechaVencimientoPost').value;
     
      let cupon={
        idMarca:idMarca,
        idTienda:idTienda,
        valor:valor,
        fechaVencimiento:fechaVencimiento
        
        
      }
      axios.post('http://localhost:3001/cupones', cupon);
      alert('Creacion correcta')
    }

      putCupon=()=>{
      let idMarca=document.getElementById('idMarcaPut').value;
      if(idMarca==0){
        idMarca=this.state.idMarca;
      }
      let idTienda=document.getElementById('idTiendaPut').value;
      if(idTienda==0){
        idTienda=this.state.idTienda;
      }
      let valor=document.getElementById('valorPut').value;
      if(valor==0){
        valor=this.state.valor;
      }

       let fechaVencimiento=document.getElementById('fechaVencimientoPut').value;
      if(fechaVencimiento==""){
        fechaVencimiento=this.state.fechaVencimiento;
      }
      
      let cupon={
        idMarca:idMarca,
        idTienda:idTienda,
        valor:valor,
        fechaVencimiento:fechaVencimiento
        
      }
      axios.put('http://localhost:3001/cupones/'+this.state.id, cupon);
      console.log(this.state.id);
      console.log("aaaaaaaaa");
    }
    deleteCupon=()=>{
      axios.delete('http://localhost:3001/cupones/'+this.state.id);
      window.location.href = 'http://localhost:3000/CuponList';
    }
  render(){
    return(
      <div>
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCk5eWvXs13e_7NnqtKtYikKS9jpX0nvRbfp0zAyYH13HmEq4TaQ" alt='Image 1'/>
          </div>
            <div className="card-body text-dark">
            <h4 className="card-title"><FormattedMessage id="Reference"/>: {this.props.match.params.idCupon}</h4>
            <p className="card-text text-secondary"><FormattedMessage id="Brand"/>: {this.state.idMarca}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Store"/>: {this.state.idTienda}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Price"/>: $<FormattedNumber value={this.state.valor}/></p>
            <p className="card-text text-secondary"><FormattedMessage id="Date"/>: <FormattedDate
    value={new Date(this.state.fechaVencimiento)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  /></p>
           
            <Link to={{
              pathname:"/CuponList",
            }}  className="btn btn-outline-primary"><FormattedMessage id="Back"/></Link>
            <button type="button" className="btn btn-danger float-right" onClick={this.deleteCupon}><FormattedMessage id="Delete"/></button>

            </div>
        </div>
      </div>
      <div class="row">
      <div class="col-4">
      <div className="float-right">
        <h1><FormattedMessage id="Create"/> </h1>
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-12"><FormattedMessage id="IdBrand"/></label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="idMarcaPost" placeholder="ID"/>
            </div>
          </div>
        <div class="form-group">
          <label class="control-label col-sm-12" ><FormattedMessage id="IdStore"/>:</label>
        <div class="col-sm-10">
          <input type="url" class="form-control" id="idTiendaPost" placeholder="ID"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12"><FormattedMessage id="Value"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="valorPost" placeholder="$"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" ><FormattedMessage id="Date2"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="fechaVencimientoPost" placeholder="AAAA-MM-DD"/>
        </div>
        </div>
       
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-info" onClick={this.postCupon}><FormattedMessage id="Create"/></button>
          </div>
        </div>
        </form >
        </div>
      </div>
      <div class="col-5">
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify"/> </h1>
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-12" ><FormattedMessage id="IdBrand"/>:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="idMarcaPut" placeholder="ID"/>
            </div>
          </div>
        
        <div class="form-group">
          <label class="control-label col-sm-12" ><FormattedMessage id="IdStore"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="idTiendaPut" placeholder="ID"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" ><FormattedMessage id="Value"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="valorPut" placeholder="$"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" ><FormattedMessage id="Date2"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="fechaVencimientoPut" placeholder="AAAA-MM-DD"/>
        </div>
        </div>
        
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-info" onClick={this.putCupon}><FormattedMessage id="Modify"/></button>
          </div>
        </div>
        </form >
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default CuponDetail;
