// components/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className="px-4 md:px-12 lg:px-24">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="p-2">
                        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
