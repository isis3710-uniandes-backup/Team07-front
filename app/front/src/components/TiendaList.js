import React, {Component} from 'react'
import Producto  from './Tienda'
import axios from 'axios'
class TiendaList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      productos:[]
    };
  }

  componentDidMount() {
        axios.get('http://localhost:3001/tienda')
            .then((response) => {
                var state = this.state;
                var tiendas = response.data;
                state.tiendas=tiendas;
                state.pagina = 0;
                // pueden cambiar el tamaño de partion aca
                this.setState(state);
            });
    }
  render(){
    return(
      <div className="container-fuid d-flex justify-content-center">
        <div className='row'>
          {this.state.tiendas.map( (prod)=> <Tienda key={tien.id} data={tien}/>)}
        </div>
      </div>
    )
  }
}
export default TiendaList;
