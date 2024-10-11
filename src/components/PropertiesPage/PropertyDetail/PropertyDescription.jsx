import React from 'react';

const PropertyDescription = ({ descripcion }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full max-w-2xl mx-auto lg:max-w-full lg:px-4 border-t-2 border-blue-500">
      <h2 className="text-xl font-bold mb-3 text-gray-900">Descripción</h2>
      <p className="text-gray-700 text-sm leading-relaxed">
        {descripcion || "No hay descripción disponible para esta propiedad."}
      </p>
    </div>
  );
};

export default PropertyDescription;
