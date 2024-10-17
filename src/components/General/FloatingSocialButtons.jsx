import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const FloatingSocialButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Contenedor tipo pestaña con transparencia y efecto blur */}
      <div className="bg-transparent backdrop-blur-lg bg-opacity-30 p-4 rounded-lg shadow-lg flex space-x-4 items-center">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110"
        >
          <FaWhatsapp className="text-xl" />
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/newland_propiedades_/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-110"
        >
          <FaInstagram className="text-xl" />
        </a>

        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/newland_propiedades" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110"
        >
          <FaFacebookF className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocialButtons;
