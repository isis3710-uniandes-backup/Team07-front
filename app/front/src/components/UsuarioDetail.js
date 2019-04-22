import React, { Component } from 'react';
import '../css/producto-style.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
class TarjetaRegaloDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      titulo:"",
      mensaje:"",
      imagenes:[],
      plantilla:""
    };
  }

  componentDidMount() {
        var id=this.props.match.params.idTarjetaRegalo;
        var i;
            axios.get('http://localhost:3001/tarjetaRegalo/'+id)
                .then((response) => {
                    var state = this.state;
                    var tarjetaRegalo = response.data;
                    state.id = id;
                    state.titulo = tarjetaRegalo.titulo;
                    state.mensaje = tarjetaRegalo.mensaje;
                    state.imagenes.push(tarjetaRegalo.imagenes[0].url);
                    state.imagenes.push(tarjetaRegalo.imagenes[1].url);
                    state.plantilla = tarjetaRegalo.plantilla;
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }
    postTarjetaRegalo=()=>{
      let titulo=document.getElementById('tituloPost').value;
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
        titulo:titulo,
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
      let titulo=document.getElementById('tituloPut').value;
      let img=[];
      if(titulo==""){
        titulo=this.state.titulo;
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
        titulo:titulo,
        mensaje:men,
        imagenes:img,
        plantilla:plan,
        cupones:[],
        productos:[]
      }
      axios.put('http://localhost:3001/tarjetaRegalo/'+this.state.id, tarjetaRegalo);
      console.log(this.state.id);
    }
    deleteTarjetaRegalo=()=>{
      axios.delete('http://localhost:3001/tarjetaRegalo/'+this.state.id);
      window.location.href = 'http://localhost:3000/TarjetaRegaloList';
    }
  render(){
    return(
      <div className="container">
      <div className="float-left">
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.state.imagenes[0]} alt='Image 1'/>
        </div>
        <div className="card-body text-dark">
        <h2 className="card-title">{this.state.titulo}</h2>
        <p className="card-text text-secondary">{this.state.mensaje}</p>
        <div className="overflow">
          <img className='card-img-top' src={this.state.plantilla} alt='Image 1'/>
        </div>
        <div className="container">
        <Link to={{
          pathname:"/TarjetaRegaloList/"+this.state.id,
        }}  className="btn btn-outline-primary float-left" data={this.props.data}>Volver</Link>
        <button type="button" className="btn btn-danger float-right" onClick={this.deleteTarjetaRegalo}>Eliminar</button>
        </div>
        </div>
      </div>
      </div>
      <div className="float-right">
        <h1>Crear un nuevo </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12">Titulo:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="tituloPost" placeholder="Enter title"/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Urls de imagenes:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="url1Post" placeholder="Enter url"/>
        </div>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="url2Post" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Mensaje:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="mensajePost" placeholder="Enter message"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" >Url plantilla:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="plantillaPost" placeholder="Enter size"/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={this.postTarjetaRegalo}>Crear</button>
          </div>
        </div>
        </form>
      </div>
      <div className="float-left abc">
        <h1>Actualizar </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12">Titulo:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="tituloPut" placeholder={this.state.titulo}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Urls de imagenes:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="url1Put" placeholder={this.state.imagenes[0]}/>
        </div>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="url2Put" placeholder={this.state.imagenes[1]}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Mensaje:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="mensajePut" placeholder={this.state.mensaje}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" >Url plantilla:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="plantillaPut" placeholder={this.state.plantilla}/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-info" onClick={this.putTarjetaRegalo}>Actualizar</button>
          </div>
        </div>
        </form>
      </div>
      </div>
    );
  }
}
export default TarjetaRegaloDetail;
