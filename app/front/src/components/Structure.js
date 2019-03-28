import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Navbar from './NavBar'
import TarjetaRegaloList from './TarjetaRegaloList'
import ProductoList from './ProductoList'
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
            </div>
        );
    }
}

export default Vista;