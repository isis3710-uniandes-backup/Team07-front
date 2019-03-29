import React, { Component } from 'react';

import './css/producto-style.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
class CuponDetail extends Component{
  constructor(props){
    super(props);
    this.state={
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
                    //tiendas
                    //promociones
                    
                    
                    state.valor = cupon.valor;
                    state.fechaVencimiento = cupon.fechaVencimiento;
                    
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
            <img className='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCk5eWvXs13e_7NnqtKtYikKS9jpX0nvRbfp0zAyYH13HmEq4TaQ" alt='Image 1'/>
          </div>
            <div className="card-body text-dark">
            <h4 className="card-title">Referencia: {this.props.match.params.idCupon}</h4>
            <p className="card-text text-secondary">Marca: {this.state.idMarca}</p>
            <p className="card-text text-secondary">Tienda: {this.state.idTienda}</p>
            <p className="card-text text-secondary">Valor: {this.state.valor}</p>
            <p className="card-text text-secondary">Fecha de vencimiento: {this.state.fechaVencimiento}</p>
           
            <Link to={{
              pathname:"/CuponList",
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
export default CuponDetail;
