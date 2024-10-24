import React from 'react';
import { useNavigate } from 'react-router-dom';  // Para la redirección

const UnlinkMercadoLibre = () => {
  const navigate = useNavigate();  // Hook para navegar a otra página

  const handleUnlink = () => {
    // Elimina los tokens relacionados a MercadoLibre
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('code_verifier');

    console.log('Desincronizado de MercadoLibre.');

    // Redirigir al usuario al logout de MercadoLibre con parámetro de redirección a tu plataforma
    const mercadoLibreLogoutURL = `https://www.mercadolibre.com/jms/mlc/lgz/logout?go=${encodeURIComponent('https://portillo-propiedades-frontend.vercel.app/admin/configuracion')}`;

    // Redirigir al usuario al logout de MercadoLibre con la redirección a tu plataforma
    window.location.href = mercadoLibreLogoutURL;
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
