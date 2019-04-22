import React, {Component} from 'react';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/jquery-ui.css';
import '../css/style.css';
import '../css/aos.css';
import '../css/bootstrap-datepicker.css';

class CarouselClass extends Component{

  render(){
    return(
      <div>
      <div className="slide-one-item home-slider owl-carousel owl-loaded owl-drag">
      
      <div className="owl-stage-outer">
        <div className="owl-stage" style={{transform: "translate3d(0px, 0px,0px)", transition: "all 0.25s ease 0s", width: "100%"}}>
          
          <div className="owl-item cloned" style={{width:"100%"}}>
            <div className="site-blocks-cover overlay aos-init aos-animate" style={{backgroundImage: "url("+"https://redeclectica.files.wordpress.com/2014/12/picture-of-gifts.jpg"+")", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover", height: "100%", width:"100%"}} data-aos="fade" data-stellar-background-ratio="0.5">
              <div className="container">
                <div className="row align-items-center justify-content-center text-center">

                  <div className="col-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">

                    <h1 className="text-white font-weight-light"><b>Crea nuevos momentos</b></h1>
                    <p className="mb-5" style={{color:"#FFFFFF"}}>Olvídate de la preocupación al no saber si lo que vas a regalar es lo indicado para la persona.</p>
                    <p><a href="ProductoList" style= {{backgroundColor: "#EF5777"}} className="btn btn-primary py-3 px-5 text-white">IR AL SITIO</a></p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>*/

      <div className="owl-nav">

        <div className="owl-prev">
          <span className="icon-keyboard_arrow_left">
          </span>
        </div>
        <div className="owl-next">
          <span className="icon-keyboard_arrow_right">
          </span>
        </div>

      </div> 
    </div>
    </div>
    );
  }
}

export default CarouselClass;