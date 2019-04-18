import React, {Component} from 'react'
import Usuario  from './Usuario'
import axios from 'axios'
import Masonry from 'react-masonry-component';

class UsuarioList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      usuarios:[]
    };
  }

  componentDidMount() {
        axios.get('http://localhost:3001/usuario')
            .then((response) => {
                var state = this.state;
                var usuarios = response.data;
                state.usuarios=usuarios;
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
          {this.state.usuarios.map( (usu)=> <Usuario key={usu.id} data={usu}/>)}
        </div>
      </div>
      </Masonry>
    )
  }
}
export default UsuarioList;
