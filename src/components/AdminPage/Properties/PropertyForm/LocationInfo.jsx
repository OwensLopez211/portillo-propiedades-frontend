import React from 'react';

const LocationInfo = ({ formData, handleChange, handleRegionChange, regions, comunas }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Ubicación</h2>
      
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Dirección</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion || ''} // Asegúrate de manejar valores nulos o indefinidos
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ubicación de referencia</label>
          <input
            type="text"
            name="ubicacion_referencia"
            value={formData.ubicacion_referencia || ''} // Asegúrate de manejar valores nulos o indefinidos
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Región</label>
            <select
              name="region"
              value={formData.region || ''} // Asegúrate de manejar valores nulos o indefinidos
              onChange={handleRegionChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Seleccione una región</option>
              {regions && regions.length > 0 ? (
                regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.nombre}
                  </option>
                ))
              ) : (
                <option disabled>Cargando regiones...</option> // Mensaje mientras se cargan los datos
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Comuna</label>
            <select
              name="comuna"
              value={formData.comuna || ''} // Asegúrate de manejar valores nulos o indefinidos
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              disabled={!formData.region} // Deshabilitar si no hay región seleccionada
            >
              <option value="">Seleccione una comuna</option>
              {comunas && comunas.length > 0 ? (
                comunas.map((comuna) => (
                  <option key={comuna.id} value={comuna.id}>
                    {comuna.nombre}
                  </option>
                ))
              ) : (
                <option disabled>Cargando comunas...</option> // Mensaje mientras se cargan los datos
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
