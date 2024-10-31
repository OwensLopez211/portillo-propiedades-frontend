import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProperty = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    precio_venta: '',
    precio_renta: '',
    tipo_operacion: '',
    tipo_propiedad: '', 
    habitaciones: '',
    baños: '',
    superficie_total: '',
    superficie_cubierta: '',
    direccion: '',
    region: '',
    comuna: '',
    ubicacion_referencia: '',
    latitud: '',
    longitud: '',
    gastos_comunes: '',
    contribuciones: '',
    expensas: '',
    is_featured: false,
    agent: '',
    images: [],
  });

  const [agents, setAgents] = useState([]);
  const [regions, setRegions] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Obtener la lista de agentes
  useEffect(() => {
    const fetchAgents = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get('https://portillo-propiedades-backend.onrender.com/api/agents/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAgents(response.data);
      } catch (err) {
        console.error('Error al obtener los agentes:', err);
      }
    };
    fetchAgents();
  }, []);

  // Obtener la lista de regiones al cargar el componente
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get('https://portillo-propiedades-backend.onrender.com/api/regions/');
        setRegions(response.data);
      } catch (err) {
        console.error('Error al cargar regiones:', err);
      }
    };
    fetchRegions();
  }, []);

  // Cargar comunas al seleccionar una región
  const handleRegionChange = async (e) => {
    const selectedRegionId = e.target.value;
    setFormData({ ...formData, region: selectedRegionId, comuna: '' });

    try {
      const response = await axios.get(`https://portillo-propiedades-backend.onrender.com/api/regions/${selectedRegionId}/comunas/`);
      setComunas(response.data);
    } catch (err) {
      console.error('Error al cargar comunas:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      images: [...e.target.files],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.title || !formData.description || !formData.direccion || !formData.habitaciones || !formData.baños) {
      setError({
        title: ['Este campo es requerido'],
        description: ['Este campo es requerido'],
        direccion: ['Este campo es requerido'],
        habitaciones: ['Este campo es requerido'],
        baños: ['Este campo es requerido']
      });
      setIsLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('descripcion', formData.description);
    formDataToSend.append('direccion', formData.direccion);
    formDataToSend.append('habitaciones', formData.habitaciones);
    formDataToSend.append('baños', formData.baños);
    formDataToSend.append('superficie_total', formData.superficie_total);
    formDataToSend.append('superficie_cubierta', formData.superficie_cubierta);
    formDataToSend.append('gastos_comunes', formData.gastos_comunes);
    formDataToSend.append('contribuciones', formData.contribuciones);
    formDataToSend.append('expensas', formData.expensas);
    formDataToSend.append('latitud', formData.latitud);
    formDataToSend.append('longitud', formData.longitud);
    formDataToSend.append('precio_venta', formData.precio_venta);
    formDataToSend.append('precio_renta', formData.precio_renta);
    formDataToSend.append('ubicacion_referencia', formData.ubicacion_referencia);
    formDataToSend.append('region', formData.region);
    formDataToSend.append('comuna', formData.comuna);
    formDataToSend.append('tipo_operacion', formData.tipo_operacion);
    formDataToSend.append('tipo_propiedad', formData.tipo_propiedad);
    formDataToSend.append('is_featured', formData.is_featured);
    formDataToSend.append('agent', formData.agent);

    for (let i = 0; i < formData.images.length; i++) {
      formDataToSend.append('images', formData.images[i]);
    }

    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch('https://portillo-propiedades-backend.onrender.com/api/properties/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        navigate('/admin/propiedades');
      } else {
        const errorData = await response.json();
        setError(errorData);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" role="status">
            <span className="sr-only">Cargando...</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
          {error && (
            <div className="bg-red-100 text-red-800 p-4 rounded mb-4">
              {Object.keys(error).map((key) => (
                <p key={key}>
                  {key}: {Array.isArray(error[key]) ? error[key].join(', ') : error[key]}
                </p>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Información básica */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Información básica</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-gray-700">Título</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Descripción</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Precio Venta</label>
                  <input
                    type="number"
                    name="precio_venta"
                    value={formData.precio_venta}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Precio Renta</label>
                  <input
                    type="number"
                    name="precio_renta"
                    value={formData.precio_renta}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">¿Propiedad destacada?</label>
                  <input
                    type="checkbox"
                    name="is_featured"
                    checked={formData.is_featured}
                    onChange={handleChange}
                    className="w-5 h-5 border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>

                {/* Campo de selección de agente */}
                <div>
                  <label className="block text-gray-700">Agente</label>
                  <select
                    name="agent"
                    value={formData.agent}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  >
                    <option value="">Seleccione un agente</option>
                    {agents.map((agent) => (
                      <option key={agent.id} value={agent.id}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Detalles de la propiedad */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Detalles de la propiedad</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-gray-700">Tipo de operación</label>
                  <select
                    name="tipo_operacion"
                    value={formData.tipo_operacion}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  >
                    <option value="">Seleccione una operación</option>
                    <option value="venta">Venta</option>
                    <option value="arriendo">Arriendo</option>
                    <option value="arriendo_temporal">Arriendo Temporal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700">Tipo de propiedad</label>
                  <select
                    name="tipo_propiedad"
                    value={formData.tipo_propiedad}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  >
                    <option value="">Seleccione un tipo de propiedad</option>
                    <option value="departamento">Departamentos</option>
                    <option value="casa">Casas</option>
                    <option value="oficina">Oficinas</option>
                    <option value="parcela">Parcelas</option>
                    {/* Añadir más opciones si es necesario */}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700">Habitaciones</label>
                  <input
                    type="number"
                    name="habitaciones"
                    value={formData.habitaciones}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Baños</label>
                  <input
                    type="number"
                    name="baños"
                    value={formData.baños}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Área Total (m²)</label>
                  <input
                    type="number"
                    name="superficie_total"
                    value={formData.superficie_total}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Superficie Cubierta (m²)</label>
                  <input
                    type="number"
                    name="superficie_cubierta"
                    value={formData.superficie_cubierta}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Gastos Comunes</label>
                  <input
                    type="number"
                    name="gastos_comunes"
                    value={formData.gastos_comunes}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
{/*                 <div>
                  <label className="block text-gray-700">Contribuciones</label>
                  <input
                    type="number"
                    name="contribuciones"
                    value={formData.contribuciones}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div> */}
{/*                 <div>
                  <label className="block text-gray-700">Expensas</label>
                  <input
                    type="number"
                    name="expensas"
                    value={formData.expensas}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div> */}
              </div>
            </div>

            {/* Ubicación */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ubicación</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-gray-700">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Ubicación de referencia</label>
                  <input
                    type="text"
                    name="ubicacion_referencia"
                    value={formData.ubicacion_referencia}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-gray-700">Región</label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleRegionChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  >
                    <option value="">Seleccione una región</option>
                    {regions.map((region) => (
                      <option key={region.id} value={region.id}>
                        {region.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Comuna</label>
                  <select
                    name="comuna"
                    value={formData.comuna}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                    disabled={!formData.region}
                  >
                    <option value="">Seleccione una comuna</option>
                    {comunas.map((comuna) => (
                      <option key={comuna.id} value={comuna.id}>
                        {comuna.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                </div>
            </div>
{/*                 <div>
                  <label className="block text-gray-700">Ciudad</label>
                  <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div> */}
{/*                 <div>
                  <label className="block text-gray-700">Barrio</label>
                  <input
                    type="text"
                    name="comuna"
                    value={formData.comuna}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div> */}
{/*                 <div>
                  <label className="block text-gray-700">Latitud</label>
                  <input
                    type="text"
                    name="latitud"
                    value={formData.latitud}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div> */}
{/*                 <div>
                  <label className="block text-gray-700">Longitud</label>
                  <input
                    type="text"
                    name="longitud"
                    value={formData.longitud}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div> */}
              </div>
            </div>

            {/* Multimedia */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Multimedia</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-gray-700">Imágenes de la propiedad</label>
                  <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleImageUpload}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-right mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddProperty;
