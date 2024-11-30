import { useState, useEffect } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

const UFDisplay = () => {
  const [ufData, setUfData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUFValue = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/latest-uf/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });
        
        if (!response.ok) {
          throw new Error('No se pudo obtener el valor de la UF');
        }
        
        const data = await response.json();
        setUfData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUFValue();
    // Actualizar cada hora
    const interval = setInterval(fetchUFValue, 3600000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-lg shadow-md border border-red-200">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#175EA5]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#175EA5]">Valor UF</h2>
        <FaExchangeAlt className="text-[#175EA5] text-xl" />
      </div>
      
      <div className="mb-4">
        <p className="text-3xl font-bold text-[#175EA5]">
          {ufData.formatted_value}
        </p>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>Actualizado: {new Date(ufData.date).toLocaleDateString('es-CL', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</p>
      </div>
    </div>
  );
};

export default UFDisplay;