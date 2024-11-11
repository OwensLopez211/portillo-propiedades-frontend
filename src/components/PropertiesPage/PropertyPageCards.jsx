import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Componente para la flecha izquierda
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none z-10"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Componente para la flecha derecha
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none z-10"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const PropertyPageCard = ({ property }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL').format(price);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      key={property.id}
      className="property-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Carrusel de imágenes de la propiedad con texto superpuesto */}
      <div className="relative">
        {property.images && property.images.length > 0 ? (
          <Slider {...sliderSettings}>
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img.image_url}
                alt={`Imagen ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            ))}
          </Slider>
        ) : (
          <img
            src="https://via.placeholder.com/400"
            alt={property.name}
            className="w-full h-56 object-cover"
          />
        )}
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full">
          <h2 className="text-lg font-bold text-center">{property.title}</h2>
          <p className="text-sm">{property.location}</p>
        </div>
      </div>

      {/* Barra de título colorida */}
      <div className="bg-[#175EA5] text-white text-center py-2">
        <p className="font-semibold">{property.tipo_propiedad?.toUpperCase() || 'Tipo de propiedad no disponible'}</p>
      </div>

      {/* Información de la propiedad */}
      <div className="p-6">
        <p className="text-[#175EA5] mb-2">Operación: <span className="font-medium">{property.tipo_operacion || 'Operación no disponible'}</span></p>
        
        {/* Mostrar comuna y ubicación de referencia */}
        <p className="text-[#175EA5] mb-2">Comuna: <span className="font-medium">{property.comuna_detail?.nombre || 'Comuna no disponible'}</span></p>
        <p className="text-[#175EA5] mb-2">Ubicación de referencia: <span className="font-medium">{property.ubicacion_referencia || 'Ubicación de referencia no disponible'}</span></p>
        
        <div className="text-[#175EA5] mb-4 min-h-[60px]">
          {/* Mostrar solo los precios que no sean cero */}
          {property.precio_venta > 0 && (
            <p>Precio de Venta: <span className="font-bold">${formatPrice(property.precio_venta)}</span></p>
          )}
          {property.precio_renta > 0 && (
            <p>Precio de Arriendo: <span className="font-bold">${formatPrice(property.precio_renta)}</span></p>
          )}
        </div>

        {/* Información adicional del agente */}
        <div className="flex items-center mt-4">
          <img
            src={property.agent_detail?.profile_image_url || 'https://via.placeholder.com/40'}
            alt="Agent"
            className="w-12 h-12 rounded-full mr-4 border-2 border-[#175EA5]"
          />
          <div>
            <p className="text-[#175EA5] font-semibold">{property.agent_detail?.name || 'Nombre del agente no disponible'}</p>
            <p className="text-[#175EA5] text-sm">{property.agent_detail?.phone || 'Número de teléfono no disponible'}</p>
          </div>
        </div>

        {/* Botón Ver con funcionalidad de redirección */}
        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <button
            className="bg-[#175EA5] text-white px-4 py-2 rounded-lg hover:bg-[#175EA5] transition duration-300"
            onClick={() => navigate(`/property/${property.id}`)}
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyPageCard;
