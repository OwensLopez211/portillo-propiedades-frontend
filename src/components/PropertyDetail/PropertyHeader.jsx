import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'; // Importar íconos de react-icons

const PropertyHeader = ({ property }) => {
  // Función para formatear los precios con separadores de miles
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL').format(price);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col lg:flex-row justify-between items-start mb-4">
      {/* Información principal */}
      <div className="flex-1 mb-4 lg:mb-0">
        <div className="mb-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
            Cód.: {property.id}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
        <p className="text-gray-600 mb-4 flex items-center">
          <FaMapMarkerAlt className="mr-2" /> {property.direccion}
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
          <span className="text-gray-600 mb-2 lg:mb-0">Compartir en:</span>
          <div className="flex space-x-4">
            <a 
              href={`https://wa.me/?text=${window.location.href}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-500 text-lg hover:text-green-600 transition duration-300"
            >
              <FaWhatsapp />
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 text-lg hover:text-blue-700 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${window.location.href}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 text-lg hover:text-blue-500 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <Link to="/listado" className="text-gray-600 text-sm hover:underline">Listado</Link>
          <span className="text-gray-600">|</span>
          <Link to="#" className="text-gray-600 text-sm hover:underline">Anterior</Link>
          <span className="text-gray-600">|</span>
          <Link to="#" className="text-gray-600 text-sm hover:underline">Siguiente</Link>
        </div>
      </div>

      {/* Sección de precios (derecha) */}
      <div className="w-full lg:w-1/3 lg:ml-4 text-left lg:text-right">
        {property.precio_venta && (
          <div className="mb-4">
            <p className="text-blue-600 font-bold">Precio de Venta:</p>
            <p className="text-blue-600 font-bold text-lg lg:text-xl">UF {formatPrice(property.precio_venta_uf)}</p>
            <p className="text-gray-600">${formatPrice(property.precio_venta)}</p>
          </div>
        )}
        {property.precio_renta && (
          <div className="mb-4">
            <p className="text-blue-600 font-bold">Precio de Arriendo:</p>
            <p className="text-blue-600 font-bold text-lg lg:text-xl">UF {formatPrice(property.precio_renta_uf)}</p>
            <p className="text-gray-600">${formatPrice(property.precio_renta)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyHeader;
