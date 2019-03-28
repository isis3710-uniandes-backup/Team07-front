import React, {Component} from 'react'
import Producto  from './Producto'
import axios from 'axios'
class ProductoList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      productos:[]
    };
  }

  componentDidMount() {
        axios.get('http://localhost:3001/producto')
            .then((response) => {
                var state = this.state;
                var productos = response.data;
                state.productos=productos;
                state.pagina = 0;
                // pueden cambiar el tamaño de partion aca
                this.setState(state);
            });
    }
  render(){
    return(
      <div className="container-fuid d-flex justify-content-center">
        <div className='row'>
          {this.state.productos.map( (prod)=> <Producto key={prod.id} data={prod}/>)}
        </div>
      </div>
    )
  }
}
export default ProductoList;
