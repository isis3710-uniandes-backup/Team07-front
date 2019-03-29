import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductoList from './components/ProductoList';
import TarjetaRegaloList from './components/TarjetaRegaloList';
import UsuarioList from './components/UsuarioList';
import DestinoList from './components/DestinoList';
import FacturaList from './components/FacturaList';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
