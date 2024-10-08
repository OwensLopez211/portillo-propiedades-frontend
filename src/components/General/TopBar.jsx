import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 border-b border-gray-300 w-full h-16 shadow-md hidden md:flex">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center h-full px-4 space-y-2 md:space-y-0">
        
        {/* Office Address */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <FaMapMarkerAlt className="text-blue-500 text-xl" />
          <div className="text-center md:text-left">
            <p className="text-sm text-blue-600 font-semibold">Oficina</p>
            <p className="text-sm text-gray-600">Ejemplo 6000, of. 108, Las Condes</p>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <FaPhoneAlt className="text-green-500 text-xl" />
          <div className="text-center md:text-left">
            <p className="text-sm text-blue-600 font-semibold">Teléfonos</p>
            <p className="text-sm text-gray-600">
              +56 9 1234 5678<br />+56 9 1234 5678
            </p>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <FaEnvelope className="text-red-500 text-xl" />
          <div className="text-center md:text-left">
            <p className="text-sm text-blue-600 font-semibold">Correo</p>
            <p className="text-sm text-gray-600">Ejemplo@ejemplo.cl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
