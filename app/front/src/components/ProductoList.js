import React, {Component} from 'react'
import Producto  from './Producto'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import './css/productoList-style.css';

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
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    return(
      <Masonry className="coso container-fuid d-flex justify-content-center">
          {this.state.productos.map( (prod)=> <Producto key={prod.id} data={prod}/>)}
      </Masonry>
    )
  }
}
export default ProductoList;
