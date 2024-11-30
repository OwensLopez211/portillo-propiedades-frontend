import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyDetails = ({ formData, handleChange, handleCurrencyChange, handlePriceChange }) => {
  const [valorUF, setValorUF] = useState(null); // Estado para el valor de la UF
  const [loadingUF, setLoadingUF] = useState(true); // Estado de carga
  const [errorUF, setErrorUF] = useState(false); // Estado de error
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Llama al endpoint del backend para obtener el valor actual de la UF
    const fetchUF = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/uf/`); // Endpoint del backend
        setValorUF(response.data.valor_uf);
        setLoadingUF(false);
      } catch (error) {
        console.error('Error al obtener el valor de la UF:', error);
        setErrorUF(true);
        setLoadingUF(false);
      }
    };

    fetchUF();
  }, [API_BASE_URL]);

  const formatNumber = (value) => {
    if (!value) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Formatea números con puntos para miles, millones, etc.
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Detalles de la Propiedad</h2>

      {loadingUF ? (
        <p className="text-sm text-gray-500">Cargando valor de la UF...</p>
      ) : errorUF ? (
        <p className="text-sm text-red-500">Error al cargar el valor de la UF.</p>
      ) : (
        <p className="text-sm text-gray-500">Valor actual de la UF: {valorUF}</p>
      )}

      {/* Selector de moneda */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Moneda Principal</label>
        <select
          name="moneda_precio"
          value={formData.moneda_precio}
          onChange={handleCurrencyChange} // Cambia esta línea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >

          <option value="CLP">CLP (Pesos Chilenos)</option>
          <option value="UF">UF</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Precio Venta</label>
        <input
          type="text" // Cambiar a text para permitir formateo
          name="precio_venta"
          value={formatNumber(formData.precio_venta)} // Mostrar formateado
          onChange={handlePriceChange} // Usar la nueva función
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          Precio en {formData.moneda_precio === 'CLP' ? 'UF' : 'CLP'}:{' '}
          {formData.precio_venta
            ? formatNumber(
                formData.moneda_precio === 'CLP'
                  ? Math.round(formData.precio_venta / valorUF) // CLP a UF
                  : Math.round(formData.precio_venta * valorUF) // UF a CLP
              )
            : '0'}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Precio Arriendo</label>
        <input
          type="text"
          name="precio_renta"
          value={formatNumber(formData.precio_renta)}
          onChange={handlePriceChange}
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          Precio en {formData.moneda_precio === 'CLP' ? 'UF' : 'CLP'}:{' '}
          {formData.precio_renta
            ? formatNumber(
                formData.moneda_precio === 'CLP'
                  ? Math.round(formData.precio_renta / valorUF)
                  : Math.round(formData.precio_renta * valorUF)
              )
            : '0'}
        </p>
      </div>

      {/* Otros campos */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Habitaciones</label>
        <input
          type="number"
          name="habitaciones"
          value={formData.habitaciones}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Campos adicionales */}
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
  );
};

export default PropertyDetails;