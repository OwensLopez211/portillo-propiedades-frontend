import React from 'react';

const PropertyDetails = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Detalles de la Propiedad</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Precio Venta</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              name="precio_venta"
              value={formData.precio_venta}
              onChange={handleChange}
              className="pl-7 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Precio Arriendo</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              name="precio_renta"
              value={formData.precio_renta}
              onChange={handleChange}
              className="pl-7 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de propiedad</label>
          <select
            name="tipo_propiedad"
            value={formData.tipo_propiedad}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Seleccione un tipo de propiedad</option>
            <option value="departamento">Departamentos</option>
            <option value="casa">Casas</option>
            <option value="oficina">Oficinas</option>
            <option value="parcela">Parcelas</option>
            <option value="terreno">Terrenos</option>
            <option value="sitio">Sitios</option>
            <option value="bodega">Bodegas</option>
            <option value="industrial">Industriales</option>
            <option value="agricola">Agrícola</option>
            <option value="otros_inmuebles">Otros Inmuebles</option>
            <option value="estacionamiento">Estacionamientos</option>
            <option value="loteo">Loteos</option>
            <option value="lotes_de_cementerio">Lotes de Cementerio</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Habitaciones</label>
          <input
            type="number"
            name="habitaciones"
            value={formData.habitaciones}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Baños</label>
          <input
            type="number"
            name="baños"
            value={formData.baños}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Superficie Total (m²)</label>
          <input
            type="number"
            name="superficie_total"
            value={formData.superficie_total}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Superficie Cubierta (m²)</label>
          <input
            type="number"
            name="superficie_cubierta"
            value={formData.superficie_cubierta}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gastos Comunes</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              name="gastos_comunes"
              value={formData.gastos_comunes}
              onChange={handleChange}
              className="pl-7 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;