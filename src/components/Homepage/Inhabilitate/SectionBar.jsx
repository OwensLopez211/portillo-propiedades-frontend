import React from 'react';

const SectionBar = () => {
  return (
    <div className="bg-white border-b py-4">
      <div className="container mx-auto flex justify-center">
        {/* Enlaces de navegación */}
        <div className="flex justify-between space-x-16 w-full max-w-4xl">
          <a href="/" className="text-gray-600 hover:text-black hover:font-bold transition duration-300">CLP | UF | USD | EURO</a>
          <a href="/" className="text-gray-600 hover:text-black hover:font-bold transition duration-300">Simulador Hipotecario</a>
          <a href="/" className="text-gray-600 hover:text-black hover:font-bold transition duration-300">Notaría Virtual</a>
          <a href="/" className="text-gray-600 hover:text-black hover:font-bold transition duration-300">Bancos</a>
          <a href="/" className="text-gray-600 hover:text-black hover:font-bold transition duration-300">Redes Sociales</a>
        </div>
      </div>
    </div>
  );
};

export default SectionBar;
