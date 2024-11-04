import React, { useState, useEffect } from 'react';

const PropertyCount = () => {
  const [propertyCount, setPropertyCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener el conteo de propiedades
    const fetchPropertyCount = async () => {
      const token = localStorage.getItem('authToken'); // Obtener el token del localStorage
      try {
        const response = await fetch('${API_BASE_URL}/api/count/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Agregar el token en el encabezado
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener el conteo de propiedades');
        }
        const data = await response.json();
        setPropertyCount(data.count);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Llamar a la función de conteo
    fetchPropertyCount();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="property-count p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold">Total de Propiedades</h2>
      <p className="text-2xl font-bold">{propertyCount}</p>
    </div>
  );
};

export default PropertyCount;
