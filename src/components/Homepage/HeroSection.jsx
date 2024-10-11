import React from 'react';
import Slider from 'react-slick'; // Importamos react-slick para el carrusel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Íconos de flechas

const HeroSection = () => {
  // Flecha anterior personalizada
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft className="text-white text-3xl hover:text-gray-300" />
    </div>
  );

  // Flecha siguiente personalizada
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight className="text-white text-3xl hover:text-gray-300" />
    </div>
  );

  // Configuración del carrusel
  const settings = {
    dots: false, // No mostramos los puntos indicadores
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad del deslizamiento
    slidesToShow: 1, // Mostrar una imagen a la vez
    slidesToScroll: 1, // Mover una imagen a la vez
    autoplay: true, // Desplazamiento automático
    autoplaySpeed: 5000, // Tiempo entre imágenes (5 segundos)
    fade: true, // Efecto de desvanecimiento
    prevArrow: <PrevArrow />, // Usamos las flechas personalizadas
    nextArrow: <NextArrow />, // Usamos las flechas personalizadas
  };

  // Imágenes para el carrusel de fondo
  const slides = [
    { id: 1, image: '/banner1.jpg' }, // Imagen externa de prueba
    { id: 2, image: '/banner2.jpg' }, // Otra imagen externa de prueba
    { id: 3, image: '/banner3.jpg' }, // Tercera imagen externa de prueba
  ];

  return (
    <div className="relative h-[70vh]"> {/* Ajustamos la altura a 70vh */}
      {/* Carrusel de imágenes de fondo */}
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="h-[70vh]"> {/* Ajustamos la altura a 70vh */}
            {/* Imágenes en lugar de backgroundImage para probar */}
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="h-full w-full object-cover" // Ajustamos la imagen para cubrir todo el contenedor
            />
          </div>
        ))} 
      </Slider>
    </div>
  );
};

export default HeroSection;
