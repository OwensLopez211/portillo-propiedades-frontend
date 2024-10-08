import React from 'react';

const PropertyDescription = ({ descripcion }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-4">Descripción</h2>
      <p className="text-gray-700">{descripcion}</p>
    </div>
  );
};

export default PropertyDescription;
