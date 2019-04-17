import React, { Component } from 'react';
import shoes from '../ui/mockups/shoes.jpg'
import './css/producto-style.css';
import {Link} from 'react-router-dom';
import axios from 'axios'

class MarcaDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      nombre:"",
      imagen:"",
      origen:"",
      clasificacion:"",
      descripcion:"",
      productos:[]
    };
  }

  componentDidMount() {
        var id=this.props.match.params.idMarca;
        var i;
            axios.get('http://localhost:3001/marcas/'+id)
                .then((response) => {
                    var state = this.state;
                    var marca = response.data;
                    state.id = id;
                    state.nombre = marca.nombre;
                    state.imagen = marca.imagen;
                    state.clasificacion = marca.clasificacion;
                    state.origen = marca.origen;
                    state.descripcion = marca.descripcion;
                
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }
    postMarca=()=>{
      let nombre=document.getElementById('nombrePost').value;
      let clas=document.getElementById('clasificacionPost').value;
      let origen=document.getElementById('origenPost').value;
      let img=document.getElementById('urlPost').value;
      let des=document.getElementById('descripcionPost').value;
  
      let marca={
        nombre:nombre,
        imagen:img,
        clasificacion:clas,
        descripcion:des,
        origen:origen
        
      }
      axios.post('http://localhost:3001/marcas', marca);
      alert('Creacion correcta');
    
    }
    putMarca=()=>{
      let nombre=document.getElementById('nombrePut').value;
      if(nombre==""){
        nombre=this.state.nombre;
      }
      let clas=document.getElementById('clasificacionPut').value;
      if(clas==""){
        clas=this.state.clasificacion;
      }
      let origen=document.getElementById('origenPut').value;
      if(origen==""){
        origen=this.state.origen;
      }
      let img=document.getElementById('urlPut').value;
      if(img==""){
        img=this.state.imagen;
      }
      let des=document.getElementById('descripcionPut').value;
      if(des==""){
        des=this.state.descripcion;
      }
     
      let marca={
        nombre:nombre,
        imagen:img,
        clasificacion:clas,
        descripcion:des,
        origen:origen
      }
      axios.put('http://localhost:3001/marcas/'+this.state.id, marca);
      console.log(this.state.id);
    }
    deleteMarca=()=>{
      axios.delete('http://localhost:3001/marcas/'+this.state.id);
      window.location.href = 'http://localhost:3000/MarcaList';
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
            <p className="card-text text-secondary">Clasificacion: {this.state.clasificacion}</p>
            <p className="card-text text-secondary">Origen: {this.state.origen}</p>
            <p className="card-text text-secondary">Descripcion: {this.state.descripcion}</p>
            <div className="container">
            <Link to={{
              pathname:"/MarcaList",
            }}  className="btn btn-outline-primary float-left">Volver</Link>
            <button type="button" className="btn btn-danger float-right" onClick={this.deleteMarca}>Eliminar</button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1>Crear un nuevo </h1>
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
          <label className="control-label col-sm-12">Clasificación:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="clasificacionPost" placeholder="Enter tags"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" >Origen:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="origenPost" placeholder="Origen"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" >Descripcion :</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="descripcionPost" placeholder="Enter value in COP"/>
        </div>
        </div>
      
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={this.postMarca}>Crear</button>
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
          <label className="control-label col-sm-12" >Clasificación:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="clasificacionPut" placeholder={this.state.clasificacion}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Origen:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  id="origenPut" placeholder={this.state.origen}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12">Descripcion:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="descripcionPut"  placeholder={this.state.precio}/>
        </div>
        </div>
       \
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-info" onClick={this.putMarca}>Actualizar</button>
          </div>
        </div>
        </form >
      </div>
      </div>
    );
  }
}
export default MarcaDetail;
