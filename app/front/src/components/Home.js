import React, {Component} from 'react';
import CarouselClass from './Carousel'
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/jquery-ui.css';
import '../css/style.css';
import '../css/aos.css';
import '../css/bootstrap-datepicker.css';

class Home extends Component{

    render(){
        return(
            <div data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">
                <div className="site-wrap">

                 <CarouselClass/>

                 <div className="site-section">
                    <div className="container">
                        <div className="row align-items-stretch">

                             <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/ProductoList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="https://pngimage.net/wp-content/uploads/2018/06/icono-producto-png-7.png" alt="prod" width="100%" height="100%" /></a>
                                    <div>                                     
                                        <h2>Productos</h2>                                        
                                        <p>Aquí puedes encontrar los mejores PRODUCTOS que se encuentran en el mercado para que se lo regales a tus seres queridos.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/ProductoList">productos</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/Promociones" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="https://images.vexels.com/media/users/3/145145/isolated/preview/d3d5c20be387365d9cc35c79b13365ac-tag-illustration-by-vexels.png" alt="prom" width="100%" height="100%" /></a>
                                    <div>                                     
                                        <h2>Promociones</h2>                                        
                                        <p>Aquí puedes encontrar muchas PROMOCIONES que se acomodan a tus necesidades para que le regales lo mejor a quien más quieres.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/Promociones">promociones</a></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/TarjetaRegaloList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="https://www.justdrums.com/wp-content/uploads/2018/12/giftcard_image1.png" alt="store" width="100%" height="100%" /></a>
                                    <div>                                     
                                        <h2>Tarjetas</h2>                                        
                                        <p>Aquí puedes encontrar las TARJETAS DE REGALO que han sido compradas por nuestros clientes para quienes más quieren.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/TarjetaRegaloList">tarjetas de regalo</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div>                                     
                                        <h2>Cupones</h2>                                        
                                        <p> Aquí puedes encontrar los diferentes CUPONES a los que puedes acceder por medio de las diferentes marcas y empresas con las que tenemos convenios.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/CuponList">cupones</a></p>
                                    </div>
                                    <a href="/CuponList" style= {{width:"100%", height:"100%", paddingTop:"15%"}}><img src="http://www.sheerid.com/wp-content/uploads/2013/11/coupon-envelope.png" alt="cupo" width="100%" height="100%" /></a>
                                   
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div>                                     
                                        <h2>Tiendas</h2>                                        
                                        <p>Aquí puedes encontrar las TIENDAS con las que tenemos convenios para que logres encontrar todo lo que buscas y necesitas.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/TiendaList">tiendas</a></p>
                                    </div>
                                    <a href="/TiendaList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="http://nortonsetuphelp.info/wp-content/uploads/building-ecommerce-house-market-marketplace-shop-shopping-store-png.png" alt="tien" width="100%" height="100%" /></a>
                                    
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div>                                     
                                        <h2>Marcas</h2>                                        
                                        <p>Aquí puedes encontrar tus MARCAS favoritas para que selecciones el regalo perfecto que más se acomode a tus necesidades.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/MarcaList">marcas</a></p>
                                    </div>
                                    <a href="/MarcaList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="http://www.logospng.com/images/97/branding-in-the-digital-economy-modern-agency-97149.png" alt="marc" width="100%" height="100%" /></a>
                                    
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/DestinoList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="http://www.vistieservizi.it/wp-content/uploads/2017/03/Travel-Merchant-Account.png" alt="dest" width="100%" height="100%" /></a>
                                    <div>                                     
                                        <h2>Destinos</h2>                                        
                                        <p>Aquí puedes encontrar los DESTINOS en los que con más frecuencia, nuestros clientes realizan los envíos de sus regalos.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/DestinoList">Ir a promociones</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/UsuarioList" style= {{width:"100%", height:"100%", paddingTop:"15%"}}><img src="https://www.knack.com/_images/live/users.png" alt="usua" width="100%" height="100%" /></a>
                                    <div>                                     
                                        <h2>Usuarios</h2>                                        
                                        <p>Aquí puedes encontrar a nuestros USUARIOS registrados, junto con la información de regalos que han comprado para que sepas qué es lo que más les gusta comprar.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/UsuarioList">usuarios</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/FacturaList" style= {{width:"100%", height:"100%", paddingTop:"20%"}}><img src="https://www.factura-e.mx/wp-content/uploads/2017/05/Facturas-Electr%C3%B3nicas.png" alt="fact" width="100%" height="100%" /></a>
                                    <div>                                     
                                        <h2>Facturas</h2>                                        
                                        <p>Aquí puedes encontrar las diferentes FACTURAS de clientes y enterarte de cuáles son las tiendas en las que normalmente realizan compras, además de la forma de pago y su respectivo costo.</p>
                                        <p><a className="btn3" style= {{color: "#EF5777", borderColor: "#EF5777", textTransform:"lowercase"}} href="/FacturaList">facturas</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        );
    }
}
export default Home;

