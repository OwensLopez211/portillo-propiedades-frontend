import React from 'react';

const SectionBar = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div className="flex justify-center items-center">
          {/* Contenido para la sección 1 */}
          <p>Sección 1</p>
        </div>
        <div className="flex justify-center items-center">
          {/* Contenido para la sección 2 */}
          <p>Sección 2</p>
        </div>
        <div className="flex justify-center items-center">
          {/* Contenido para la sección 3 */}
          <p>Sección 3</p>
        </div>
        <div className="flex justify-center items-center">
          {/* Contenido para la sección 4 */}
          <p>Sección 4</p>
        </div>
      </div>
    </div>
  );
};

export default SectionBar;
