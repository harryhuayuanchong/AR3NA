import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const CarouselItem = ({ imageUrl }) => {
    console.log(imageUrl)
    return (
        <div className="carousel-item">
            <img src={imageUrl} className="w-full object-cover" />
        </div>
    );
}; 
  
const Carousels = ({ slides }) => {
    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Slider {...settings}>
        {slides.map(slide => (
            <CarouselItem key={slide.id} {...slide} />
        ))}
        </Slider>
    );
};

export default Carousels;