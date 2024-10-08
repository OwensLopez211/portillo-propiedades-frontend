import React from 'react';

const WhatsappBar = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4 text-white">
          <i className="fab fa-whatsapp text-2xl"></i>
          <div>
            <p className="font-semibold text-lg">
              ¿Necesitas asesoría en la compra o venta de una propiedad?
            </p>
            <p className="text-sm text-gray-300">
              ¡Escríbenos! y uno de nuestros ejecutivos se pondrá en contacto contigo
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/tu-numero-de-whatsapp" // Reemplaza con tu enlace de WhatsApp
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded hover:bg-green-700 transition-colors duration-300"
        >
          CONTÁCTANOS
        </a>
      </div>
    </div>
  );
};

export default WhatsappBar;
