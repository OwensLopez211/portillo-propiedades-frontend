import React from 'react';
import { Link } from 'react-router-dom';

const PropertyHeader = ({ property }) => {

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between items-start mb-4">
      
      {/* En la vista móvil, el código a la izquierda y los enlaces a la derecha */}
      <div className="w-full flex justify-between items-center mb-4">
        <div>
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
            Cód.: {property.id}
          </span>
        </div>

        <div className="flex space-x-2 text-sm">
          <Link to="/listado" className="text-gray-600 hover:underline">Listado</Link>
          <span className="text-gray-600">|</span>
          <Link to="#" className="text-gray-600 hover:underline">Anterior</Link>
          <span className="text-gray-600">|</span>
          <Link to="#" className="text-gray-600 hover:underline">Siguiente</Link>
        </div>
      </div>

      {/* Información principal: título y dirección centrados */}
      <div className="flex flex-col w-full text-center lg:text-left">
        <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
        <p className="text-gray-600 mb-4">{property.direccion}</p>
      </div>
    </div>
  );
};

export default PropertyHeader;
