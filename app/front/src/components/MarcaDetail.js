import React, { Component } from 'react';

import './css/producto-style.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
class MarcaDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      nombre:"",
      origen:"",
      clasificacion:"",
      descripcion:"",
      productos:[],
      imagen:""
     
    };
  }

  componentDidMount() {
        const id=this.props.match.params.idMarca;
        console.log(id);
        var i;
            axios.get('http://localhost:3001/marcas/'+id)
                .then((response) => {
                    var state = this.state;
                    var marca = response.data;
                    state.nombre = marca.nombre;
                    state.origen = marca.origen;
                    state.descripcion = marca.descripcion;
                    state.clasificacion = marca.clasificacion;
                   // state.productos = marca.productos;
                    state.imagen = marca.imagen;
                    
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }
  render(){
    return(
      <div>
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src={this.state.imagen} alt='Image 1'/>
          </div>
            <div className="card-body text-dark">
            <h4 className="card-title">{this.state.nombre}</h4>
            <p className="card-text text-secondary">Origen: {this.state.origen}</p>
            <p className="card-text text-secondary">Clasificacion: {this.state.clasificacion}</p>
            <p className="card-text text-secondary">Descripcion: {this.state.descripcion}</p>
            <p className="card-text text-secondary">Productos: Camiseta Polo</p>
            <p className="card-text text-secondary">Productos: Jean 911 Levi's</p>
            <Link to={{
              pathname:"/MarcaList",
            }}  className="btn btn-outline-primary">Volver</Link>
            </div>
        </div>
      </div>
      <div className="float-right">
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Enter email"/>
            </div>
          </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Password:</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="pwd" placeholder="Enter password"/>
        </div>
      </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label><input type="checkbox"/> Remember me</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
        </form >
      </div>
      </div>
    );
  }
}
export default MarcaDetail;
