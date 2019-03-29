import React, {Component} from 'react'


class NavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand">GiftNow</a>
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
      </div>
    </nav>

    )
  }
}
export default NavBar;
