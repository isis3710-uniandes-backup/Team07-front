import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Vista from './components/Structure'
import './App.css';

import {IntlProvider} from 'react-intl';

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

function mapStateToProps(state){
	return {
	}
}

export default App;
