import React, { Component } from 'react';
import shoes from '../ui/mockups/shoes.jpg'
import './css/producto-style.css';
import {Link} from 'react-router-dom';
class Promocion extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      IDmarcas:[],
      IDtiendas:[],
      tiendas:,
      marcas:[]
    };
  }

  componentDidMount() {
        var i;
        for (i = 0; i < this.props.data.marcas[].length; i++){
            axios.get('http://localhost:3001/'+{this.props.data.marcas[i].IdMarca})
                .then((response) => {
                    var state = this.state;
                    var marca = response.data;
                    state.marcas.push(marca);
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
              }
              axios.get('http://localhost:3001/'+{this.props.data.IdTienda})
                  .then((response) => {
                      var state = this.state;
                      var tienda = response.data;
                      state.tienda =tienda;
                      state.pagina = 0;
                      // pueden cambiar el tamaño de partion aca
                      this.setState(state);
                  });
    }
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='Image 1'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.nombre}</h4>
        <p className="card-text text-secondary">Talla: {this.props.data.talla}</p>
        <p className="card-text text-secondary">Precio: ${this.props.data.precio}</p>
        <p className="card-text text-secondary">Stock: {this.props.data.cantidadDisponible}</p>
        <Link to={{
          pathname:"/ProductoDetail",
          state: {this.props.data}
        }} className="btn btn-outline-success">Ver más</Link>
        <a href="/ProductoDetail" className="btn btn-outline-success">Ver más</a>
        </div>
      </div>
    );
  }
}
export default Producto;
