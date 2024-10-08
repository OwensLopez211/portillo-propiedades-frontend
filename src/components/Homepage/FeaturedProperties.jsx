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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Propiedades destacadas</h2>
        <p className="text-gray-600 mb-8">Las mejores de todo Chile</p>
        <Slider {...settings}>
          {properties.map((property) => (
            <div key={property.id} className="px-2"> {/* Añade padding horizontal */}
              <PropertyCard property={property} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProperties;
