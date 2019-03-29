import React, { Component } from 'react';
import shoes from '../ui/mockups/shoes.jpg'
import './css/producto-style.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
class ProductoDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      nombre:"",
      src:"",
      clasificacion:"",
      talla:"",
      precio:0,
      cant:0
    };
  }

  componentDidMount() {
        const id=this.props.match.params.idProducto;
        var i;
            axios.get('http://localhost:3001/producto/'+id)
                .then((response) => {
                    var state = this.state;
                    var producto = response.data;
                    state.nombre = producto.nombre;
                    state.src = producto.src;
                    state.clasificacion = producto.clasificacion;
                    state.talla = producto.talla;
                    state.precio = producto.precio;
                    state.cant = producto.cantidadDisponible;
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }
    postProducto=()=>{
      let nombre=document.getElementById('nombrePost').value;
      let url=document.getElementById('urlPost').value;
      let clas=document.getElementById('clasificacionPost').value;
      let talla=document.getElementById('tallaPost').value;
      let img=document.getElementById('urlPost').value;
      let luk=document.getElementById('precioPost').value;
      let cant=document.getElementById('cantidadPost').value;
      let producto={
        nombre:nombre,
        src:img,
        clasificacion:clas,
        talla:talla,
        precio:luk,
        cantidadDisponible:cant
      }
      axios.post('http://localhost:3001/producto', producto);
    }
  render(){
    return(
      <div className="container">
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src={this.state.src} alt='Image 1'/>
          </div>
            <div className="card-body text-dark">
            <h4 className="card-title">{this.state.nombre}</h4>
            <p className="card-text text-secondary">Talla: {this.state.talla}</p>
            <p className="card-text text-secondary">Precio: ${this.state.precio}</p>
            <p className="card-text text-secondary">Stock: {this.state.cant}</p>
            <div className="container">
            <Link to={{
              pathname:"/ProductoList",
            }}  className="btn btn-outline-primary float-left">Volver</Link>
            <button type="button" className="btn btn-danger float-right">Eliminar</button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1>Crear un nuevo </h1>
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-12" for="email">Nombre producto:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="nombrePost" placeholder="Enter name"/>
            </div>
          </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="pwd">Url de imagen:</label>
        <div class="col-sm-10">
          <input type="url" class="form-control" id="urlPost" placeholder="Enter url"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12">Clasificación:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="clasificacionPost" placeholder="Enter tags"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" >Talla disponible:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="tallaPost" placeholder="Enter size"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" >Precio de venta:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="precioPost" placeholder="Enter value in COP"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12">Cantidad disponible:</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="cantidadPost" placeholder="Enter stock"/>
        </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-info" onClick={this.postProducto}>Crear</button>
          </div>
        </div>
        </form >
      </div>
      <div className="float-left abc">
        <h1>Actualizar </h1>
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-12" for="email">Nombre producto:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="email" placeholder={this.state.nombre}/>
            </div>
          </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="pwd">Url de imagen:</label>
        <div class="col-sm-10">
          <input type="url" class="form-control" id="pwd" placeholder={this.state.src}/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="pwd">Clasificación:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="pwd" placeholder={this.state.clasificacion}/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="pwd">Talla disponible:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="pwd" placeholder={this.state.talla}/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="pwd">Precio de venta:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="pwd" placeholder={this.state.precio}/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="pwd">Cantidad disponible:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="pwd" placeholder={this.state.cant}/>
        </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-info" onClick={this.postProducto}>Crear</button>
          </div>
        </div>
        </form >
      </div>
      </div>
    );
  }
}
export default ProductoDetail;
