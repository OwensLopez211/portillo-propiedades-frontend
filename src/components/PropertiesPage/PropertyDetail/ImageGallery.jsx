import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ImageGallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dotsClass: "slick-dots custom-dots",
  };

  // Verificar las imágenes que recibes
  useEffect(() => {
    console.log(images);  // Verifica si las imágenes tienen la estructura correcta
  }, [images]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-4 relative lg:max-w-full lg:px-4">
      {images.length > 0 ? (
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="h-64 sm:h-80 md:h-96 lg:h-112 relative">
              <img 
                src={img.image_url}  // Cambia a image_url si es necesario
                alt={`imagen ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="h-64 sm:h-80 md:h-96 lg:h-112 relative">
          <img 
            src="url_to_default_image" 
            alt="Default" 
            className="w-full h-full object-cover rounded-lg shadow-lg" 
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
