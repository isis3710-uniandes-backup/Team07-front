import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Navbar from './NavBar'
import TarjetaRegaloList from './TarjetaRegaloList'
import CuponList from './CuponList'
import ProductoList from './ProductoList'
import ProductoDetail from './ProductoDetail'
import MarcaDetail from './MarcaDetail'
import TiendaDetail from './TiendaDetail'
import CuponDetail from './CuponDetail'

import TiendasList from './TiendaList'
import MarcaList from './MarcaList'
import Promociones from './Promociones'

import Home from './Home'

class Vista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar/>
                <Route path="/ProductoList" exact component={ProductoList}/>
                <Route path="/ProductoDetail/:idProducto" exact component={ProductoDetail}/>
                <Route path="/CuponDetail/:idCupon" exact component={CuponDetail}/>
                <Route path="/TiendaDetail/:idTienda" exact component={TiendaDetail}/>
                <Route path="/MarcaDetail/:idMarca" exact component={MarcaDetail}/>
                <Route path="/TarjetaRegaloList" exact component={TarjetaRegaloList}/>
                <Route path="/Promociones" exact component={Promociones}/>
                <Route path="/CuponList" exact component={CuponList}/>
                <Route path="/TiendaList" exact component={TiendasList}/>
                <Route path="/MarcaList" exact component={MarcaList}/>
            </div>
        );
    }
}

export default Vista;
