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

import TarjetaRegaloDetail from './TarjetaRegaloDetail'


import TiendasList from './TiendaList'
import MarcaList from './MarcaList'
import Promociones from './Promociones'
import PromocionDetail from './PromocionDetail'

import UsuarioList from './UsuarioList'
import DestinoList from './DestinoList'
import FacturaList from './FacturaList'

import Home from './Home'

class Vista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar/>
                <Route path="/Home" exact component={Home}/>
                <Route path="/ProductoList" exact component={ProductoList}/>
                <Route path="/ProductoDetail/:idProducto" exact component={ProductoDetail}/>
                <Route path="/CuponDetail/:idCupon" exact component={CuponDetail}/>
                <Route path="/TiendaDetail/:idTienda" exact component={TiendaDetail}/>
                <Route path="/MarcaDetail/:idMarca" exact component={MarcaDetail}/>
                <Route path="/TarjetaRegaloList" exact component={TarjetaRegaloList}/>
                <Route path="/TarjetaRegaloDetail/:idTarjetaRegalo" exact component={TarjetaRegaloDetail}/>
                <Route path="/Promociones" exact component={Promociones}/>
                <Route path="/PromocionDetail/:idPromocion"exact component={PromocionDetail}/>
                <Route path="/CuponList" exact component={CuponList}/>
                <Route path="/TiendaList" exact component={TiendasList}/>
                <Route path="/MarcaList" exact component={MarcaList}/>
                <Route path="/DestinoList" exact component={DestinoList}/>
                <Route path="/UsuarioList" exact component={UsuarioList}/>
                <Route path="/FacturaList" exact component={FacturaList}/>
            </div>
        );
    }
}

export default Vista;
