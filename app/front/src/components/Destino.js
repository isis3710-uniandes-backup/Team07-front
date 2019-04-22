import React, { Component } from 'react';
import '../css/destinoStyle.css';

import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";
import detectBrowserLanguage from 'detect-browser-language';

class Destino extends Component{

  constructor(props){
    super(props);
    this.state={
      direccion:"",
    };
  }

  componentDidMount() {
    var s= this.state;
    s.direccion=this.props.data.direccion;
    this.setState(s);
    if(this.props.data.direccion.search("Centro internacional")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("Centro internacional", "");
      var b=a.concat(" ", "International center");
      state.direccion=b;
      this.setState(state);
    }
    else if(this.props.data.direccion.search("El rodadero")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("El rodadero", "");
      var b=a.concat(" ", "Rodadero");
      state.direccion=b;
      this.setState(state);
    }
    else if(this.props.data.direccion.search("La ciudad sorpresa")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("La ciudad sorpresa", "");
      var b=a.concat(" ", "The surprise city");
      state.direccion=b;
      this.setState(state);
    }
    else if(this.props.data.direccion.search("El cayo acuario")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("El cayo acuario", "");
      var b=a.concat(" ", "El cayo acuarium");
      state.direccion=b;
      this.setState(state);
    }
    else if(this.props.data.direccion.search("Parque Arví")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("Parque Arví", "");
      var b=a.concat(" ", "Arví park");
      state.direccion=b;
      this.setState(state);
    }
    else if(this.props.data.direccion.search("Monserrate")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("Monserrate", "");
      var b=a.concat(" ", "Monserrate");
      state.direccion=b;
      this.setState(state);
    }
    else if(this.props.data.direccion.search("Desierto de la Tatacoa")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("Desierto de la Tatacoa", "");
      var b=a.concat(" ", "Desert of the Tatacoa");
      state.direccion=b;
      this.setState(state);
    }
    else if(this.props.data.direccion.search("La Candelaria")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("La Candelaria", "");
      var b=a.concat(" ", "Candelaria");
      state.direccion=b;
      this.setState(state);
    }
    else if(this.props.data.direccion.search("La Laguna de la Cocha")===0 && detectBrowserLanguage()==='en'){
      var state = this.state;
      var a=this.props.data.direccion.replace("La Laguna de la Cocha", "");
      var b=a.concat(" ", "The Cocha lagoon");
      state.direccion=b;
      this.setState(state);
    }
  }

  render(){
    return( 
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='recurso'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.props.data.ciudad}</h4>
        <p className="card-text text-secondary"><FormattedMessage id="Direction"/>: {this.state.direccion}</p>
        <p className="card-text text-secondary"><FormattedMessage id="Email"/>: {this.props.data.email}</p>
        <Link to={{
          pathname:"/DestinoDetail/"+this.props.data.id,
        }}  className="btn3" data={this.props.data}><FormattedMessage id="MoreDetails"/><span className="bg"></span></Link>
        </div>
      </div>
    );
  }
}
export default Destino;