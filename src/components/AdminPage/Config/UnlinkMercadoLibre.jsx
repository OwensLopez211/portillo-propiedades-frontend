import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnlinkMercadoLibre = () => {
  const navigate = useNavigate();

  const handleUnlink = () => {
    // Eliminar los tokens de localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('code_verifier');

    // Mostrar mensaje de éxito
    alert('Se ha desvinculado exitosamente de MercadoLibre.');

    // Redirigir a la página de configuración
    navigate('/admin/configuracion');
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handleUnlink}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
      >
        Desvincular MercadoLibre
      </button>
    </div>
  );
};

export default UnlinkMercadoLibre;
