import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    precio_venta: '',
    precio_renta: '', // Precio renta añadido
    tipo_operacion: '',
    tipo_propiedad: '', 
    habitaciones: '',
    baños: '',
    superficie_total: '',
    superficie_cubierta: '', // Superficie cubierta añadida
    direccion: '',
    region: '',
    comuna: '',
    is_featured: false,
    agent: '',
    images: [],
    gastos_comunes: '', // Gastos comunes añadido
    ubicacion_referencia: '', // Ubicación de referencia añadido
  });

  const [agents, setAgents] = useState([]);
  const [regions, setRegions] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [imagesToDelete, setImagesToDelete] = useState([]);

  const fetchProperty = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get(`https://portillo-propiedades-backend.onrender.com/api/properties/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const propertyData = response.data;
      
      setFormData({
        title: propertyData.title || '',
        description: propertyData.descripcion || '',
        precio_venta: propertyData.precio_venta || '',
        precio_renta: propertyData.precio_renta || '', // Asignación de precio renta
        tipo_operacion: propertyData.tipo_operacion || '',
        tipo_propiedad: propertyData.tipo_propiedad || '',
        habitaciones: propertyData.habitaciones || '',
        baños: propertyData.baños || '',
        superficie_total: propertyData.superficie_total || '',
        superficie_cubierta: propertyData.superficie_cubierta || '', // Asignación de superficie cubierta
        direccion: propertyData.direccion || '',
        region: propertyData.region?.id || '',
        comuna: propertyData.comuna?.id || '',
        is_featured: propertyData.is_featured || false,
        agent: propertyData.agent?.id || '',
        images: propertyData.images.map((img) => ({ id: img.id, image_url: img.image_url })) || [],
        gastos_comunes: propertyData.gastos_comunes || '', // Asignación de gastos comunes
        ubicacion_referencia: propertyData.ubicacion_referencia || '', // Asignación de ubicación de referencia
      });

      // Cargar comunas en base a la región seleccionada
      if (propertyData.region) {
        await handleRegionChange({ target: { value: propertyData.region.id } }, true);
      }

      setIsLoading(false);
    } catch (err) {
      console.error('Error al obtener la propiedad:', err);
      setIsLoading(false); 
    }
  };

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

  const fetchRegions = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get('https://portillo-propiedades-backend.onrender.com/api/regions/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRegions(response.data);
    } catch (err) {
      console.error('Error al cargar regiones:', err);
    }
  };

  // Memorizar handleRegionChange para evitar recrearla en cada renderizado
  const handleRegionChange = useCallback(async (e, skipSetFormData = false) => {
    const selectedRegionId = e.target.value;
    if (!skipSetFormData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        region: selectedRegionId,
        comuna: '',
      }));
    }

    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get(`https://portillo-propiedades-backend.onrender.com/api/regions/${selectedRegionId}/comunas/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComunas(response.data);
    } catch (err) {
      console.error('Error al cargar comunas:', err);
    }
  }, []);

  useEffect(() => {
    fetchRegions();
    fetchProperty();
    fetchAgents();
  }, [id]);

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
      images: [...formData.images, ...Array.from(e.target.files)], 
    });
  };

  const handleDeleteImage = (imageId) => {
    setImagesToDelete([...imagesToDelete, imageId]);
    setFormData({
      ...formData,
      images: formData.images.filter((image) => image.id !== imageId), 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.description || !formData.direccion || !formData.habitaciones || !formData.baños) {
      setError({
        description: ['Este campo es requerido'],
        direccion: ['Este campo es requerido'],
        habitaciones: ['Este campo es requerido'],
        baños: ['Este campo es requerido'],
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('descripcion', formData.description);
    formDataToSend.append('direccion', formData.direccion);
    formDataToSend.append('habitaciones', formData.habitaciones);
    formDataToSend.append('baños', formData.baños);
    formDataToSend.append('precio_venta', formData.precio_venta);
    formDataToSend.append('tipo_operacion', formData.tipo_operacion);
    formDataToSend.append('is_featured', formData.is_featured);
    formDataToSend.append('agent', formData.agent);

    formData.images.forEach((image) => {
      if (image instanceof File) {
        formDataToSend.append('images', image);
      }
    });

    formDataToSend.append('imagesToDelete', JSON.stringify(imagesToDelete));

    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch(`https://portillo-propiedades-backend.onrender.com/api/properties/${id}/`, {
        method: 'PUT',
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

                {/* Select para agentes */}
                <div>
                    <label className="block text-gray-700">Agente</label>
                    <select
                        name="agent"
                        value={formData.agent}  // Asegúrate de que formData.agent contiene el ID del agente seleccionado
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                    >
                        <option value="">Seleccione un agente</option>
                        {agents.length > 0 && agents.map((agent) => (
                            <option key={agent.id} value={agent.id}>
                                {agent.name}
                            </option>
                        ))}
                    </select>
                </div>
                </div>
              </div>
            </div>

            {/* Otros campos */}
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

                <div className="grid grid-cols-2 gap-4">
                    {formData.images.map((image, index) => (
                        <div key={index} className="relative group">
                        <img
                            src={image instanceof File ? URL.createObjectURL(image) : image.image_url} 
                            alt={`property_image_${index}`}
                            className="h-32 w-32 object-cover rounded-lg"
                        />
                        {image.id && (
                            <button
                            onClick={() => handleDeleteImage(image.id)} 
                            className="absolute top-0 right-0 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                            &times;
                            </button>
                        )}
                        </div>
                    ))}
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

export default EditProperty;
