import React, {Component} from 'react'
import Cupon  from './Cupon'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import './css/productoList-style.css';

class CuponList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      cupones:[]
      
    };
  }

  componentDidMount() {
        axios.get('http://localhost:3001/cupones')
            .then((response) => {
                var state = this.state;
                var cupones = response.data;
                state.cupones=cupones;
                state.pagina = 0;
                // pueden cambiar el tamaño de partion aca
                this.setState(state);
            });
    }


  render(){
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    return(
      <Masonry imagesLoadedOptions={imagesLoadedOptions}>
      <div className="container-fuid d-flex justify-content-center">
        <div className='row'>
          {this.state.cupones.map( (cupo)=> <Cupon key={cupo.id} data={cupo}/>)}
        </div>
      </div>
      </Masonry>
    )
  }
}
export default CuponList;
