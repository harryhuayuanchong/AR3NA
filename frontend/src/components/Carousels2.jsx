import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const CarouselItem = ({ imageUrl }) => {
    return (
        <div className="carousel-item block z-[-1] pb-[150px]">
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