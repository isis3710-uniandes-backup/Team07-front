import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Navbar from './NavBar'
import TarjetaRegaloList from './TarjetaRegaloList'
import CuponList from './CuponList'
import ProductoList from './ProductoList'
import ProductoDetail from './ProductoDetail'
import TarjetaRegaloDetail from './TarjetaRegaloDetail'

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
                <Route path="/TarjetaRegaloList" exact component={TarjetaRegaloList}/>
                <Route path="/TarjetaRegaloDetail/:idTarjetaRegalo" exact component={TarjetaRegaloDetail}/>
                <Route path="/Promociones" exact component={Promociones}/>
                <Route path="/CuponList" exact component={CuponList}/>
                <Route path="/TiendaList" exact component={TiendasList}/>
                <Route path="/MarcaList" exact component={MarcaList}/>
            </div>
        );
    }
}

export default Vista;
