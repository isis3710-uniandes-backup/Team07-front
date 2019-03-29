import React, {Component} from 'react'
import NavBar  from './NavBar'
import axios from 'axios'
import Masonry from 'react-masonry-component';

class Home extends Component{
    constructor(props){
      super(props);
      this.state={
        pagina: 0,
        navbar:[],
        video: null
      };
    }

    pageBar(){
        var links=document.getElementById('navbar');
        var current = location.href;
      for (var i=0; i < links.length; i++)
      {
       if(links[i].href == current)
       {
          links[i].href = "";
          links[i].className='grayStyle';
       }
     }
    }
}

