import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaFacebookMessenger } from 'react-icons/fa';

const FloatingSocialButtons = () => {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex items-center">
      {/* Contenedor de la tarjeta flotante con efecto blur y transparencia */}
      <div
        className="bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-l-lg p-2 flex flex-col items-center space-y-2"
        style={{ width: '55px' }} // Ajuste de ancho
      >
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/56998472202"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-base" />
        </a>

        {/* Primer Instagram */}
        <a
          href="https://www.instagram.com/newlandpropiedades/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          <FaInstagram className="text-base" />
        </a>

        {/* Segundo Instagram con color diferente y una pequeña etiqueta */}
        <a
          href="https://www.instagram.com/terrenosysitioschile/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
        >
          <FaInstagram className="text-base" />
        </a>

        {/* Botón de Facebook */}
        <a
          href="https://www.facebook.com/newlandpropiedades"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaFacebookF className="text-base" />
        </a>

        {/* Botón de Messenger */}
        <a
          href="https://m.me/newlandpropiedades"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
        >
          <FaFacebookMessenger className="text-base" />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocialButtons;
