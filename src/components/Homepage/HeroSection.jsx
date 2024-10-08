import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/banner-principal.jpg')` }} // Ruta a la imagen de fondo
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6">
          ENCUENTRA LA PROPIEDAD DE TUS SUEÑOS
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl mb-8">
          Explora nuestra selección de propiedades exclusivas y encuentra el hogar perfecto para ti.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300">
          Ver Propiedades
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
