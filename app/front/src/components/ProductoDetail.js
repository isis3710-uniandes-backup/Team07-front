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
  render(){
    return(
      <div>
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
            <Link to={{
              pathname:"/ProductoList",
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
export default ProductoDetail;
