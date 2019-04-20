import React, { Component } from 'react';
import shoes from '../ui/mockups/shoes.jpg'
import './css/producto-styleMs.css';
import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";
import detectBrowserLanguage from 'detect-browser-language';
class Producto extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
    };
  }
componentDidMount() {
  var s= this.state;
  s.name=this.props.data.nombre;
  this.setState(s);
  if(this.props.data.nombre.search("Camiseta")===0&&detectBrowserLanguage()=='en'){
    var state = this.state;
    var a=this.props.data.nombre.replace("Camiseta", "");
    console.log("entré");
    console.log(a);
    var b=a.concat(" ", "Shirt");
    state.name=b;
    this.setState(state);
  }
}

  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='Image 1'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{this.state.name}</h4>
        <p className="card-text text-secondary"><FormattedMessage id="Price" className="verde"/>: ${this.props.data.precio}</p>
        <Link to={{
          pathname:"/ProductoDetail/"+this.props.data.id,
        }}  className="btn btn-outline-success" data={this.props.data}><FormattedMessage id="MoreDetails"/></Link>
        </div>
        <div className="cta">
          <div className="price">${this.props.data.precio}</div>
          <button className="btn2">Add to cart<span className="bg"></span></button>
        </div>
        <div className="bg"></div>
      </div>

    );
  }
}
export default Producto;
