import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Navbar from './NavBar'
import TarjetaRegaloList from './TarjetaRegaloList'
import CuponList from './CuponList'
import ProductoList from './ProductoList'

import TiendasList from './TiendaList'
import MarcaList from './MarcaList'
//import Promociones from './Promociones'
                //<Route path="/Promociones" exact component={Promociones}/>
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
                <Route path="/TarjetaRegaloList" exact component={TarjetaRegaloList}/>

                <Route path="/CuponList" exact component={CuponList}/>
                <Route path="/TiendaList" exact component={TiendasList}/>
                <Route path="/MarcaList" exact component={MarcaList}/>
            </div>
        );
    }
}

export default Vista;
