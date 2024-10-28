import React from 'react';
import PropertyCount from './PropertyCount';
const Inicio = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Inicio</h1>
      <p>Bienvenido al panel de administración.</p>
      <PropertyCount />
    </div>
  );
};

export default Inicio;
