import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            currentImageIndex: 0,
            imgUrls: [
                "https://corporate.target.com/_media/TargetCorp/news/2017/ABV_GiftNow_Header.jpg",
                "https://corporate.target.com/_media/TargetCorp/news/2017/GiftNowInline.jpg"
            ]
        };  

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide(){
        const lastIndex = this.state.imgURLs.length - 1;
        const { currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide(){
        const lastIndex = this.state.imgURLs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render () {
      return (
        <div className="carousel">

            <Arrow
                direction="left"
                clickFunction={this.previousSlide}
                glyph="&#9664;" />

            <ImageSlide url ={this.state.imgURLs[this.state.currentImageIndex]}/>

            <Arrow
                direction="right"
                clickFunction={this.nextSlide}
                glyph="&#9654;" />

        </div>
      );
    }
  }

  const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
  );

  const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image-slide" style={styles}></div>
    );
  }
  
ReactDOM.render(
    <Carousel/>,
    document.getElementById("carouselContainer")
);