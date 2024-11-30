import React from 'react';

const BasicInfo = ({ formData, handleChange, agents, errors }) => {

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Información Básica</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Campo: Título */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Título <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors?.title ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Ej: Casa moderna en Las Condes"
          />
          {errors?.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Campo: Tipo de operación */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo de operación <span className="text-red-500">*</span>
          </label>
          <select
            name="tipo_operacion"
            value={formData.tipo_operacion}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors?.tipo_operacion ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Seleccione una operación</option>
            <option value="venta">Venta</option>
            <option value="arriendo">Arriendo</option>
            <option value="arriendo_temporal">Arriendo Temporal</option>
          </select>
          {errors?.tipo_operacion && (
            <p className="mt-1 text-sm text-red-600">{errors.tipo_operacion}</p>
          )}
        </div>

        {/* Campo: Descripción */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Descripción <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors?.description ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Describe las características principales de la propiedad..."
          />
          {errors?.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        {/* Campo: Agente */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Agente <span className="text-red-500">*</span>
          </label>
          <select
            name="agent"
            value={formData.agent}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors?.agent ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Seleccione un agente</option>
            {agents?.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))}
          </select>
          {errors?.agent && (
            <p className="mt-1 text-sm text-red-600">{errors.agent}</p>
          )}
        </div>

        {/* Campo: Propiedad destacada */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="is_featured"
            checked={formData.is_featured}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">Propiedad destacada</label>
        </div>
      </div>

      {/* Nota de campos obligatorios */}
      <div className="text-xs text-gray-500 mt-4 border-t pt-4">
        <p>Los campos marcados con <span className="text-red-500">*</span> son obligatorios</p>
      </div>
    </div>
  );
};

export default BasicInfo;