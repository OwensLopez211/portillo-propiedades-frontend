import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import FormProgress from './PropertyForm/FormProgress';
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
    moneda_precio: 'CLP',
  });

  const [agents, setAgents] = useState([]);
  const [regions, setRegions] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [error, setError] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      moneda_precio: newCurrency,
      precio_venta: prevData.precio_venta ? '' : prevData.precio_venta,
      precio_renta: prevData.precio_renta ? '' : prevData.precio_renta,
    }));
  };

  const unformatNumber = (value) => {
    if (!value) return '';
    return value.replace(/\./g, '');
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const unformattedValue = unformatNumber(value);
    
    if (unformattedValue === '' || /^\d*$/.test(unformattedValue)) {
      setFormData(prevData => ({
        ...prevData,
        [name]: unformattedValue,
        // Mantener los otros valores sin modificar
        precio_venta: name === 'precio_venta' ? unformattedValue : prevData.precio_venta,
        precio_renta: name === 'precio_renta' ? unformattedValue : prevData.precio_renta
      }));
    }
  };

  const loadComunas = useCallback(async (regionId, token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/regions/${regionId}/comunas/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComunas(response.data);
    } catch (err) {
      console.error('Error al cargar comunas:', err);
    }
  }, [API_BASE_URL]);

  const handleRegionChange = useCallback(async (e) => {
    const selectedRegionId = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      region: selectedRegionId,
      comuna: '',
    }));

    const token = localStorage.getItem('authToken');
    await loadComunas(selectedRegionId, token);
  }, [loadComunas]);

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

  useEffect(() => {
    const fetchPropertyData = async (token) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/properties/${id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const propertyData = response.data;
        setFormData(prevData => ({
          ...prevData,
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
          region: propertyData.region || '',
          comuna: propertyData.comuna || '',
          is_featured: propertyData.is_featured || false,
          agent: propertyData.agent || '',
          images: propertyData.images.map(img => ({
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
      } catch (err) {
        console.error('Error al cargar la propiedad:', err);
        setError('Error al cargar los datos de la propiedad');
        throw err;
      }
    };

    const fetchRegions = async (token) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/regions/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRegions(response.data);
      } catch (err) {
        console.error('Error al cargar regiones:', err);
      }
    };

    const fetchAgents = async (token) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/agents/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAgents(response.data);
      } catch (err) {
        console.error('Error al cargar agentes:', err);
      }
    };

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
  }, [API_BASE_URL, id, loadComunas]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isReadyToSubmit || currentStep !== 4) {
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
    formDataToSend.append('region', formData.region);
    formDataToSend.append('comuna', formData.comuna);
    formDataToSend.append('is_featured', formData.is_featured);
    formDataToSend.append('agent', formData.agent);

    formDataToSend.append('moneda_precio', formData.moneda_precio);
    if (formData.precio_venta !== undefined && formData.precio_venta !== '') {
      formDataToSend.append('precio_venta', unformatNumber(formData.precio_venta.toString()));
    }
    if (formData.precio_renta !== undefined && formData.precio_renta !== '') {
      formDataToSend.append('precio_renta', unformatNumber(formData.precio_renta.toString()));
    }

    formData.images.forEach((image) => {
      if (image instanceof File) {
        formDataToSend.append('images', image);
      }
    });

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
        return (
          <PropertyDetails
            formData={formData}
            handleChange={handleChange}
            handleCurrencyChange={handleCurrencyChange}
            handlePriceChange={handlePriceChange}
          />
        );
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
          {currentStep === 2 ? (
            <PropertyDetails
              formData={formData}
              handleChange={handleChange}
              handleCurrencyChange={handleCurrencyChange}
              handlePriceChange={handlePriceChange}
            />
          ) : renderStep()}

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
                onClick={() => setIsReadyToSubmit(true)}
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