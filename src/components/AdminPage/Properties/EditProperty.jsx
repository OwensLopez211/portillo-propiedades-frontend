import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import FormProgress from './PropertyForm/FormProgress'; // Reutilizamos el FormProgress
import BasicInfo from './PropertyForm/BasicInfo';
import PropertyDetails from './PropertyForm/PropertyDetails';
import LocationInfo from './PropertyForm/LocationInfo';
import MediaUpload from './PropertyForm/mediaUpload';

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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
    is_featured: false,
    agent: '',
    images: [],
    gastos_comunes: '',
    ubicacion_referencia: '',
  });

  const [agents, setAgents] = useState([]);
  const [regions, setRegions] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [error, setError] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  // Función para cargar datos de la propiedad
  const fetchPropertyData = async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/properties/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log('Datos recibidos de la propiedad:', response.data);
      console.log('Region:', response.data.region);
      console.log('Comuna:', response.data.comuna);
  
      const propertyData = response.data;
      setFormData((prevFormData) => ({
        ...prevFormData,
        title: propertyData.title || '',
        description: propertyData.descripcion || '',
        precio_venta: propertyData.precio_venta || '',
        precio_renta: propertyData.precio_renta || '',
        tipo_operacion: propertyData.tipo_operacion || '',
        tipo_propiedad: propertyData.tipo_propiedad || '',
        habitaciones: propertyData.habitaciones || '',
        baños: propertyData.baños || '',
        superficie_total: propertyData.superficie_total || '',
        superficie_cubierta: propertyData.superficie_cubierta || '',
        direccion: propertyData.direccion || '',
        region: propertyData.region || '', // Cambiar propertyData.region?.id por propertyData.region
        comuna: propertyData.comuna || '',
        is_featured: propertyData.is_featured || false,
        agent: propertyData.agent || '',
        images: propertyData.images.map((img) => ({
          id: img.id,
          image_url: img.image_url,
        })),
        imagesToDelete: [],
        gastos_comunes: propertyData.gastos_comunes || '',
        ubicacion_referencia: propertyData.ubicacion_referencia || '',
        moneda_precio: propertyData.moneda_precio || 'CLP',
      }));

      if (propertyData.region) {
        await loadComunas(propertyData.region, token);
      }
  
      return propertyData;
    } catch (err) {
      console.error('Error al cargar la propiedad:', err);
      setError('Error al cargar los datos de la propiedad');
      throw err;
    }
  };

  // Función para cargar regiones
  const fetchRegions = async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/regions/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Regiones obtenidas:', response.data);
      setRegions(response.data);
    } catch (err) {
      console.error('Error al cargar regiones:', err);
    }
  };

  // Función para cargar agentes
  const fetchAgents = async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/agents/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Agentes obtenidos:', response.data);
      setAgents(response.data);
    } catch (err) {
      console.error('Error al cargar agentes:', err);
    }
  };

  // Función para cargar comunas según la región seleccionada
  const loadComunas = async (regionId, token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/regions/${regionId}/comunas/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Comunas para región ID:', regionId, response.data);
      setComunas(response.data);
    } catch (err) {
      console.error('Error al cargar comunas:', err);
    }
  };

  // Manejo del cambio de región
  const handleRegionChange = async (e) => {
    const selectedRegionId = e.target.value;
    console.log('Región seleccionada:', selectedRegionId);
    setFormData((prevFormData) => ({
      ...prevFormData,
      region: selectedRegionId,
      comuna: '', // Limpiar comuna al cambiar región
    }));

    const token = localStorage.getItem('authToken');
    await loadComunas(selectedRegionId, token);
  };


  useEffect(() => {
    const fetchInitialData = async () => {
      const token = localStorage.getItem('authToken');
      try {
        await Promise.all([
          fetchPropertyData(token),
          fetchRegions(token),
          fetchAgents(token),
        ]);
      } catch (err) {
        console.error('Error al cargar los datos iniciales:', err);
        setError('Error al cargar los datos iniciales');
      }
    };
  
    fetchInitialData();
  }, [API_BASE_URL, id, ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isReadyToSubmit || currentStep !== 4) {
      return; // Evitar envío si no es el último paso o no se presionó el botón de enviar
    }

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('descripcion', formData.description);
    formDataToSend.append('direccion', formData.direccion);
    formDataToSend.append('habitaciones', formData.habitaciones);
    formDataToSend.append('baños', formData.baños);
    formDataToSend.append('precio_venta', formData.precio_venta);
    formDataToSend.append('tipo_operacion', formData.tipo_operacion);
    formDataToSend.append('region', formData.region);
    formDataToSend.append('comuna', formData.comuna);
    formDataToSend.append('is_featured', formData.is_featured);
    formDataToSend.append('agent', formData.agent);

    // Agregar imágenes nuevas
    formData.images.forEach((image) => {
      if (image instanceof File) {
        formDataToSend.append('images', image);
      }
    });

    // Agregar IDs de imágenes a eliminar
    formDataToSend.append('imagesToDelete', JSON.stringify(formData.imagesToDelete || []));

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_BASE_URL}/api/properties/${id}/`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        navigate('/administracion/propiedades');
      } else {
        const errorData = await response.json();
        setError(errorData);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError({
        message: 'Ocurrió un error al guardar los cambios. Por favor, intenta nuevamente.',
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfo formData={formData} handleChange={handleChange} agents={agents} />;
      case 2:
        return <PropertyDetails formData={formData} handleChange={handleChange} />;
      case 3:
        return (
          <LocationInfo
            formData={formData}
            handleChange={handleChange}
            handleRegionChange={handleRegionChange}
            regions={regions}
            comunas={comunas}
          />
        );
      case 4:
        return <MediaUpload formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {error && <div className="bg-red-50 text-red-800 p-4 rounded-md">{error.message}</div>}
        <FormProgress currentStep={currentStep} />
        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Anterior
              </button>
            )}
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-auto"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => setIsReadyToSubmit(true)} // Solo activa el envío en el último paso
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-auto"
              >
                Guardar Cambios
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProperty;