import React, { useState } from 'react';
import PropertyTable from './Properties/PropertyTable'; // Asegúrate de que la ruta sea correcta
const Properties = () => {
  const [properties] = useState([]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Administración de Propiedades</h1>
      <PropertyTable properties={properties} />

    </div>
  );
};

export default Properties;
