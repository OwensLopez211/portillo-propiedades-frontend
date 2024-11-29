// Función para formatear valores numéricos
export const formatNumber = (value) => {
    if (!value) return '';
    return Number(value).toLocaleString('es-CL', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };
  
  // Función para parsear valores numéricos del formulario
  export const parseFormNumber = (value) => {
    if (!value) return '';
    return value.replace(/\D/g, '');
  };