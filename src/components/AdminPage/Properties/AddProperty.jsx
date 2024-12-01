import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicInfo from './PropertyForm/BasicInfo';
import PropertyDetails from './PropertyForm/PropertyDetails';
import LocationInfo from './PropertyForm/LocationInfo';
import MediaUpload from './PropertyForm/mediaUpload';
import FormProgress from './PropertyForm/FormProgress';
import { Card, CardContent } from '../../../components/ui/card';
import { 
  ChevronLeft, 
  ChevronRight, 
  Save,
  AlertCircle,
  Loader
} from 'lucide-react';

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
    moneda_precio: '',
  });

  const [agents, setAgents] = useState([]);
  const [regions, setRegions] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
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

  const formatNumber = (value) => {
    if (!value) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const unformatNumber = (value) => {
    if (!value) return '';
    return value.replace(/\./g, '');
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const unformattedValue = unformatNumber(value);
    const formattedValue = formatNumber(unformattedValue);
    setFormData({ ...formData, [name]: unformattedValue });
    e.target.value = formattedValue;
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      moneda_precio: newCurrency,
      precio_venta: '',
      precio_renta: '',
    }));
  };
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
    return Object.keys(stepErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep !== 4) return;

    setIsLoading(true);

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

  const handleNextStep = () => {
    if (validateStep()) {
      setError(null);
      if (currentStep < 4) {
        setCurrentStep((step) => step + 1);
      }
    }
  };

  const handlePreviousStep = () => {
    setError(null);
    setCurrentStep((step) => step - 1);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Información Básica";
      case 2:
        return "Detalles de la Propiedad";
      case 3:
        return "Ubicación";
      case 4:
        return "Multimedia";
      default:
        return "";
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfo
            formData={formData}
            handleChange={handleChange}
            agents={agents}
            error={error}
          />
        );
      case 2:
        return (
          <PropertyDetails
            formData={formData}
            handleChange={handleChange}
            handleCurrencyChange={handleCurrencyChange}
            handlePriceChange={handlePriceChange}
            error={error}
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
            error={error}
          />
        );
      case 4:
        return (
          <MediaUpload
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-white rounded-2xl shadow-neumorph">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Nueva Propiedad</h1>
              <p className="text-blue-100 mt-1">{getStepTitle()}</p>
            </div>
            <span className="px-3 py-1 bg-blue-500/30 text-white rounded-full text-sm font-medium backdrop-blur-sm">
              Paso {currentStep} de 4
            </span>
          </div>
        </div>

        <CardContent className="p-6">
          {error && typeof error === 'object' && Object.keys(error).length > 0 && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <div className="flex">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                <div className="text-red-700">
                  {error.message ? (
                    <p className="font-medium">{error.message}</p>
                  ) : (
                    <ul className="list-disc list-inside">
                      {Object.entries(error).map(([key, value]) => (
                        <li key={key} className="text-sm">
                          {Array.isArray(value) ? value[0] : value}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}

          <FormProgress currentStep={currentStep} />

          <form onSubmit={(e) => {
            e.preventDefault();
            if (isReadyToSubmit && currentStep === 4) {
              handleSubmit(e);
            }
          }}>
            <div className="mt-6">
              {renderStep()}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200"
                    >
                      <ChevronLeft className="w-5 h-5 mr-2" />
                      Anterior
                    </button>
                  )}
                </div>

                <div>
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                    >
                      Siguiente
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={() => setIsReadyToSubmit(true)}
                      disabled={isLoading}
                      className={`
                        flex items-center px-6 py-2 rounded-lg transition-all duration-200
                        ${isLoading 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700 text-white'
                        }
                      `}
                    >
                      {isLoading ? (
                        <>
                          <Loader className="w-5 h-5 mr-2 animate-spin" />
                          Guardando...
                        </>
                      ) : (
                        <>
                          <Save className="w-5 h-5 mr-2" />
                          Guardar Propiedad
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProperty;