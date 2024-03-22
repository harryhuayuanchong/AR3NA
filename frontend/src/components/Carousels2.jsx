import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const CarouselItem = ({ imageUrl }) => {
    return (
        <div className="carousel-item">
        <img src={imageUrl} className="w-full object-cover" />
        {/* <div className="carousel-caption">
            <h3 className="text-4xl font-bold">{title}</h3>
            <h4 className="text-xl">{subtitle}</h4>
            <p>{date}</p>
            <p>{location}</p>
        </div> */}
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