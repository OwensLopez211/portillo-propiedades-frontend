import React from 'react';
import Slider from 'react-slick'; // Importamos react-slick para el carrusel
import { useNavigate } from 'react-router-dom'; // Para redirigir
import PropertySearchBar from '../General/PropertySearchBar'; // Reutilizamos el componente PropertySearchBar
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const navigate = useNavigate();

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
    arrows: false, // Sin flechas de navegación
  };

  // Imágenes para el carrusel de fondo
  const slides = [
    { id: 1, image: '/banner1.jpg' }, // Imagen externa de prueba
    { id: 2, image: '/banner2.jpg' }, // Otra imagen externa de prueba
    { id: 3, image: '/banner3.jpg' }, // Tercera imagen externa de prueba
  ];

  // Función para aplicar filtros y redirigir
  const handleSetFilters = (filters) => {
    const queryString = new URLSearchParams(filters).toString();
    navigate(`/propiedades?${queryString}`);
  };

  return (
    <div className="relative h-screen">
      {/* Carrusel de imágenes de fondo */}
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="h-screen">
            {/* Imágenes en lugar de backgroundImage para probar */}
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="h-full w-full object-cover" // Ajustamos la imagen para cubrir todo el contenedor
            />
          </div>
        ))}
      </Slider>

      {/* Contenido encima del carrusel, incluyendo PropertySearchBar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Título principal */}
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 text-center drop-shadow-md shadow-black">
          ENCUENTRA LA PROPIEDAD DE TUS SUEÑOS
        </h1>
        
        {/* Subtítulo */}
        <p className="text-white text-lg md:text-2xl max-w-2xl mb-10 text-center shadow-md drop-shadow-lg">
          Explora nuestra selección de propiedades exclusivas y encuentra el hogar perfecto para ti.
        </p>

        {/* PropertySearchBar con filtros */}
        <div className="w-full max-w-4xl px-4">
          <PropertySearchBar setFilters={handleSetFilters} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
