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
        <h1>Crear un nuevo </h1>
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-12">ID de la marca del cupon:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="idMarcaPost" placeholder="ID"/>
            </div>
          </div>
        <div class="form-group">
          <label class="control-label col-sm-12" >ID de la tienda del cupon:</label>
        <div class="col-sm-10">
          <input type="url" class="form-control" id="idTiendaPost" placeholder="ID"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12">Valor del producto:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="valorPost" placeholder="valor"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" >Fecha de vencimiento del producto:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="fechaVencimientoPost" placeholder="Formato DD-MM-AAAA"/>
        </div>
        </div>
       
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-info" onClick={this.postCupon}>Crear</button>
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
export default CuponDetail;
