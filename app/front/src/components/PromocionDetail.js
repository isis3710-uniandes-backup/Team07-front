import React, { Component } from 'react';

import '../css/producto-style.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
class PromocionDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      nombre:"",
      fechaInicio:"",
      fechaFin:"",
      pagina: 0,
      IDmarcas:[],
      IDtiendas:[],
      tienda:"",
      marcas:[]
    };
  }

  componentDidMount() {
    var id=this.props.match.params.idPromocion;

        axios.get('http://localhost:3001/promocion/'+id)
            .then((response) => {
                var a=[];
                var idTienda=0
                var state = this.state;
                var tarjetaRegalo = response.data;
                state.id = id;
                state.nombre = tarjetaRegalo.nombre;
                state.fechaInicio = tarjetaRegalo.fechaDeInicio;
                state.fechaFin=tarjetaRegalo.fechaDeFin;
                state.pagina = 0;
                a=tarjetaRegalo.marcas;
                console.log(a.length);
                idTienda=tarjetaRegalo.idTienda;
                // pueden cambiar el tamaño de partion aca
                this.setState(state);
                var i;
                for (i = 0; i < a.length; i++){
                    axios.get('http://localhost:3001/marcas/'+a[i].idMarca)
                        .then((response) => {
                            var state = this.state;
                            var marca = response.data;
                            state.marcas.push(marca.imagen);
                            console.log(state.marcas[1]);
                            state.pagina = 0;
                            // pueden cambiar el tamaño de partion aca
                            this.setState(state);
                        });
                      }
                      axios.get('http://localhost:3001/tiendas/'+idTienda)
                          .then((response) => {
                              var state = this.state;
                              var tienda = response.data;
                              console.log(tienda);
                              state.tienda =tienda.imagen;
                              state.pagina = 0;
                              // pueden cambiar el tamaño de partion aca
                              this.setState(state);
                          });
            });
    }
    postPromocion=()=>{
      let nombre=document.getElementById('tituloPost').value;
      let img=[];
      let url1=document.getElementById('url1Post').value;
      let url1json={
        url:url1
      }
      img.push(url1json);
      let url2=document.getElementById('url2Post').value;
      let url2json={
        url:url2
      }
      img.push(url2json);
      let men=document.getElementById('mensajePost').value;
      let plan=document.getElementById('plantillaPost').value;
      let tarjetaRegalo={
        nombre:nombre,
        mensaje:men,
        imagenes:img,
        plantilla:plan,
        cupones:[],
        productos:[]
      }
      axios.post('http://localhost:3001/tarjetaRegalo', tarjetaRegalo);
      return false;
    }
    putTarjetaRegalo=()=>{
      let nombre=document.getElementById('tituloPut').value;
      let img=[];
      if(nombre==""){
        nombre=this.state.nombre;
      }
      let url1=document.getElementById('url1Put').value;
      if(url1==""){
        url1=this.state.imagenes[0];
      }
      let url1json={
        url:url1
      }
      img.push(url1json);
      let url2=document.getElementById('url2Put').value;
      if(url2==""){
        url2=this.state.imagenes[1];
      }
      let url2json={
        url:url2
      }
      img.push(url2json);
      let men=document.getElementById('mensajePut').value;
      if(men==""){
        men=this.state.mensaje;
      }
      let plan=document.getElementById('plantillaPut').value;
      if(plan==""){
        plan=this.state.plantilla;
      }
      let tarjetaRegalo={
        nombre:nombre,
        mensaje:men,
        imagenes:img,
        plantilla:plan,
        cupones:[],
        productos:[]
      }
      axios.put('http://localhost:3001/tarjetaRegalo/'+this.state.id, tarjetaRegalo);
      console.log(this.state.id);
    }
    deletePromocion=()=>{
      axios.delete('http://localhost:3001/promocion/'+this.state.id);
      window.location.href = 'http://localhost:3000/Promociones';
    }
  render(){
    return(
      <div className="container">
      <div className="float-left">
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.state.tienda} alt='Image 1'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.state.nombre}</h4>
        </div>
        <div className="row">
        <div className="overflow">
          <img className='card-img-top down' src={this.state.marcas[0]} alt='Image 1'/>
        </div>
        <div className="overflow">
          <img className='card-img-top down' src={this.state.marcas[1]} alt='Image 1'/>
        </div>
        </div>
        <div className="container">
        <Link to={{
          pathname:"/Promociones/",
        }}  className="btn btn-outline-primary float-left">Volver</Link>
        <button type="button" className="btn btn-danger float-right" onClick={this.deletePromocion}>Eliminar</button>
        </div>
      </div>
      </div>
      <div className="float-right">
        <h1>Crear una nueva </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12">Nombre:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePost" placeholder="Enter title"/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Fechas de inicio y fin de la Promoción:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fechaInicioPost" placeholder="Enter url"/>
        </div>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fechaFinPost" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={this.postPromocion}>Crear</button>
          </div>
        </div>
        </form>
      </div>
      <div className="float-left abc">
        <h1>Actualizar </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12">Nombre:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePut" placeholder="Enter title"/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Fechas de inicio y fin de la Promoción:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fechaInicioPut" placeholder="Enter url"/>
        </div>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fechaFinPut" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-info" onClick={this.putPromocion}>Actualizar</button>
          </div>
        </div>
        </form>
      </div>
      </div>
    );
  }
}
export default PromocionDetail;
