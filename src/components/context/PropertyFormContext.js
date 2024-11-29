import React, { createContext, useContext, useState } from 'react';

const PropertyFormContext = createContext(undefined);

export const PropertyFormProvider = ({ children }) => {
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
    gastos_comunes: '',
    is_featured: false,
    agent: '',
    images: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const value = {
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange
  };

  return (
    <PropertyFormContext.Provider value={value}>
      {children}
    </PropertyFormContext.Provider>
  );
};

export const usePropertyForm = () => {
  const context = useContext(PropertyFormContext);
  if (context === undefined) {
    throw new Error('usePropertyForm must be used within a PropertyFormProvider');
  }
  return context;
};