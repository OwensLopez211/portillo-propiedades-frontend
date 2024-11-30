import React from 'react';
import PropertyCount from './PropertyCount';
import UFDisplay from './UFDisplay';  // Importa el componente UFDisplay

const Inicio = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Inicio</h1>
      <p>Bienvenido al panel de administración.</p>
      
      {/* Grid para organizar PropertyCount y UFDisplay */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <PropertyCount />
        <UFDisplay />
      </div>
    </div>
  );
};

export default Inicio;