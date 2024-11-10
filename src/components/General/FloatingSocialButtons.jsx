import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaFacebookMessenger} from 'react-icons/fa'; // comentado FaTiktok

const FloatingSocialButtons = () => {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex items-center">
      {/* Contenedor de la tarjeta flotante con efecto blur y transparencia */}
      <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-l-lg p-2 flex flex-col items-center space-y-2" style={{ width: '60px' }}>
        
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/56998472202"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-lg" />
        </a>

        {/* Primer Instagram */}
        <a
          href="https://www.instagram.com/newlandpropiedades/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          <FaInstagram className="text-lg" />
        </a>

        {/* Segundo Instagram con color diferente y una pequeña etiqueta */}
        <a
          href="https://www.instagram.com/terrenosysitioschile/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
        >
          <FaInstagram className="text-lg" />
        </a>

        {/* Botón de Facebook */}
        <a
          href="https://www.facebook.com/newlandpropiedades"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaFacebookF className="text-lg" />
        </a>

        {/* Botón de Messenger */}
        <a
          href="https://m.me/newlandpropiedades"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
        >
          <FaFacebookMessenger className="text-lg" />
        </a>

        {/* Botón de TikTok */}
{/*         <a
          href="https://www.tiktok.com/@newland_propiedades"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
        >
          <FaTiktok className="text-lg" />
        </a> */}
      </div>
    </div>
  );
};

export default FloatingSocialButtons;
