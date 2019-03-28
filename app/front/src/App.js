import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import Vista from './components/Structure'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Vista/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
