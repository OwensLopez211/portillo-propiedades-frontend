import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/featured-properties/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching featured properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Número de tarjetas visibles a la vez
    slidesToScroll: 1,  // Número de tarjetas que se desplazan al hacer clic
    centerMode: true,  // Activa el modo de centrado para ver tarjetas parcialmente
    centerPadding: '50px',  // Ajusta el espacio visible de las tarjetas en los bordes
    autoplay: true,  // Activa la reproducción automática
    autoplaySpeed: 6000,  // Tiempo en milisegundos entre movimientos automáticos (6 segundos)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          autoplay: true,
          autoplaySpeed: 6000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          autoplay: true,
          autoplaySpeed: 6000,
        },
      },
    ],
  };

  return (
    <section className="py-8 w-full relative">
      <div className="w-full mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-4 text-[#175EA5]">Propiedades destacadas</h2> {/* Cambio de color */}
        <p className="mb-8 text-[#175EA5]">Las mejores de todo Chile</p> {/* Cambio de color */}
        
        {/* Contenedor del carrusel con desenfoque en los bordes */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/50 to-transparent backdrop-blur-sm pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/50 to-transparent backdrop-blur-sm pointer-events-none"></div>
          
          <Slider {...settings} className="w-full">
            {properties.map((property) => (
              <div key={property.id} className="px-2">
                <PropertyCard property={property} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
