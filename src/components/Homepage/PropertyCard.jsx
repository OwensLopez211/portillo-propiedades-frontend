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

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/property/${property.id}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
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

  // Verificación de datos del agente y comuna
  const agent = property.agent_detail || {};  // Accede a los datos detallados del agente
  const comuna = property.comuna_detail || {};  // Accede a los datos detallados de la comuna

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
            src="/placeholder.jpg"
            alt={property.title}
            className="w-full h-56 object-cover"
          />
        )}
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
          <h2 className="text-lg font-bold">{property.title}</h2>
        </div>
      </div>

      <div className="bg-[#175EA5] text-white text-center py-2">
        <p className="font-semibold">{property.tipo_propiedad?.toUpperCase()}</p>
      </div>

      <div className="p-4">
        <p className="text-[#175EA5] mb-2">
          Operación: <span className="font-medium">{property.tipo_operacion}</span>
        </p>

        {/* Muestra la Comuna y Ubicación de Referencia */}
        <p className="text-[#175EA5] mb-2">
          Comuna: <span className="font-medium">{comuna.nombre || 'No disponible'}</span>
        </p>
        <p className="text-[#175EA5] mb-2">
          Ubicación de referencia: <span className="font-medium">{property.ubicacion_referencia || 'No disponible'}</span>
        </p>

        <p className="text-[#175EA5] mb-4">
          Precio: <span className="font-bold">
            {property.precio_venta ? formatPrice(property.precio_venta) : formatPrice(property.precio_renta)}
          </span>
        </p>

        <div className="flex items-center mt-4 justify-between">
          <div className="flex items-center">
            <img
              src={agent.profile_image_url || 'https://via.placeholder.com/40'}
              alt="Agent"
              className="w-10 h-10 rounded-full mr-3 border-2 border-blue-500"
            />
            <div>
              <p className="text-[#175EA5] font-semibold">{agent.name || 'Nombre no disponible'}</p>
              <p className="text-[#175EA5] text-sm">{agent.phone || 'Contacto no disponible'}</p>
            </div>
          </div>
          <button
            className="bg-[#175EA5] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ml-auto"
            onClick={handleViewClick}
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
