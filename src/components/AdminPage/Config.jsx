import React from 'react';
import MercadoLibreAuth from './Config/MercadolibreAuth';  // Importa el nuevo componente

const Config = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Configuraciones del sistema</h1>
        <p></p>
      </div>
      <div>
        <MercadoLibreAuth />  {/* Mostrar el componente que maneja la vinculación/desvinculación */}
      </div>
    </div>
  );
};

export default Config;
