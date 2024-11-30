import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicInfo from './PropertyForm/BasicInfo';
import PropertyDetails from './PropertyForm/PropertyDetails';
import LocationInfo from './PropertyForm/LocationInfo';
import MediaUpload from './PropertyForm/mediaUpload';
import FormProgress from './PropertyForm/FormProgress';

const AddProperty = () => {
  const navigate = useNavigate();
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
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchInitialData = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const [agentsResponse, regionsResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/agents/`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${API_BASE_URL}/api/regions/`, { headers: { Authorization: `Bearer ${token}` } }),
        ]);
        setAgents(agentsResponse.data);
        setRegions(regionsResponse.data);
      } catch (err) {
        console.error('Error al cargar datos iniciales:', err);
        setError('Error al cargar datos iniciales');
      }
    };
    fetchInitialData();
  }, [API_BASE_URL]);

  const handleRegionChange = async (e) => {
    const selectedRegionId = e.target.value;
    setFormData({ ...formData, region: selectedRegionId, comuna: '' });

    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/regions/${selectedRegionId}/comunas/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep !== 4) return; // Asegúrate de que solo se envíe el formulario en el último paso

    setIsLoading(true);

    // Validación de campos requeridos
    if (!formData.title || !formData.description || !formData.direccion || !formData.habitaciones || !formData.baños) {
      setError({
        title: ['Este campo es requerido'],
        descripcion: ['Este campo es requerido'],
        direccion: ['Este campo es requerido'],
        habitaciones: ['Este campo es requerido'],
        baños: ['Este campo es requerido'],
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
    formDataToSend.append('moneda_precio', formData.moneda_precio);

    // Agregar imágenes
    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((image) => formDataToSend.append('images', image));
    }

    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch(`${API_BASE_URL}/api/properties/`, {
        method: 'POST',
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
      console.error('Error en la conexión:', error);
      setError({ message: 'Error en la conexión con el servidor' });
    } finally {
      setIsLoading(false);
    }
  };

  // Validar el paso actual antes de avanzar
const validateStep = () => {
  let stepErrors = {};
  if (currentStep === 1) {
    if (!formData.title) stepErrors.title = 'El título es obligatorio.';
    if (!formData.description) stepErrors.description = 'La descripción es obligatoria.';
  } else if (currentStep === 2) {
    if (!formData.tipo_operacion) stepErrors.tipo_operacion = 'Seleccione el tipo de operación.';
    if (formData.tipo_operacion === 'venta' && !formData.precio_venta)
      stepErrors.precio_venta = 'El precio de venta es obligatorio.';
    if (formData.tipo_operacion === 'arriendo' && !formData.precio_renta)
      stepErrors.precio_renta = 'El precio de arriendo es obligatorio.';
  } else if (currentStep === 3) {
    if (!formData.direccion) stepErrors.direccion = 'La dirección es obligatoria.';
    if (!formData.region) stepErrors.region = 'Seleccione una región.';
    if (!formData.comuna) stepErrors.comuna = 'Seleccione una comuna.';
  }
  setError(stepErrors);
  return Object.keys(stepErrors).length === 0; // Devuelve true si no hay errores
};

// Avanzar al siguiente paso
const handleNextStep = () => {
  if (validateStep()) {
    setError(null); // Limpiar errores al avanzar
    if (currentStep < 4) {
      setCurrentStep((step) => step + 1); // Avanzar solo si no estás en el último paso
    }
  }
};


// Retroceder al paso anterior
const handlePreviousStep = () => {
  setError(null); // Limpiar errores al retroceder
  setCurrentStep((step) => step - 1);
};

const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfo
            formData={formData}
            handleChange={handleChange}
            agents={agents}
          />
        );
      case 2:
        return (
          <PropertyDetails
            formData={formData}
            handleChange={handleChange}
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
        return (
          <MediaUpload
            formData={formData}
            setFormData={setFormData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {error && (
          <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
            <p className="font-semibold">{error.message}</p>
            {error.fields && (
              <ul className="list-disc ml-4 mt-2">
                {error.fields.map((field, index) => (
                  <li key={index}>{field}</li>
                ))}
              </ul>
            )}
            {error.details && (
              <p className="mt-2 text-sm">{JSON.stringify(error.details)}</p>
            )}
          </div>
        )}

        <FormProgress currentStep={currentStep} />

        <form
          onSubmit={(e) => {
            e.preventDefault(); // Siempre prevenir el envío predeterminado
            if (isReadyToSubmit && currentStep === 4) {
              handleSubmit(e); // Enviar formulario solo si se cumple la condición
            }
          }}
        >
          {renderStep()}

          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
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
                onClick={() => setIsReadyToSubmit(true)} // Permitir envío solo si se hace clic aquí
                disabled={isLoading}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-auto disabled:opacity-50"
              >
                {isLoading ? 'Guardando...' : 'Guardar Propiedad'}
              </button>

            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
