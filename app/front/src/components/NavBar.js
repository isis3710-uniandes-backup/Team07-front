import React, {Component} from 'react'
import './css/nav.css';

class NavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand"><h2 className="gft">GiftNow</h2></a>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Promociones">Promociones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ProductoList">Todos los Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/TarjetaRegaloList">Tarjetas de Regalo</a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="/CuponList">Tarjetas de Regalo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/TiendaList">Tiendas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/MarcaList">Marcas</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search"/>
        </form>
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#"><img className="abr" src="https://static1.squarespace.com/static/55b13236e4b0ba28db37e41a/5b05ac2ef950b76fb5f198b4/5b05bab26d2a731b78aad9f4/1527105845666/AKF0049-Shopping-Trolley-Icon.png"></img></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#"><img className="abr" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-female-circle-pink-512.png"></img></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Admin</a>
        </li>
        </ul>
      </div>
    </nav>

    )
  }
}
export default NavBar;
