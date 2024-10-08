import React from 'react';
import { Link } from 'react-router-dom';

const PropertyRecord = ({ property }) => {
  // Si decides usar `firstImage`, entonces úsalo en el JSX.
  const firstImage = property.images && property.images.length > 0 
    ? `${process.env.REACT_APP_API_URL}${property.images[0].image}` 
    : 'url_to_default_image';  // Imagen por defecto si no hay imágenes

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={firstImage}  // Aquí estamos utilizando `firstImage`
          alt={property.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 text-xs font-semibold">
          COD.: {property.id}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p className="font-semibold">{property.tipo_operacion}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-600">{property.direccion}</p>
        <div className="flex items-center space-x-2 text-gray-600 mt-2">
          <span><i className="fas fa-bed"></i> {property.habitaciones} dorm.</span>
          <span><i className="fas fa-bath"></i> {property.baños} baños</span>
          <span><i className="fas fa-ruler-combined"></i> {property.area} m²</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">{property.agent?.name}</span>
          <Link to={`/property/${property.id}`} className="text-orange-600 font-semibold">
            Ficha &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyRecord;
