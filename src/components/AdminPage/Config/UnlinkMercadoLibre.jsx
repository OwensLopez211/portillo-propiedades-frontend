import React from 'react';

const UnlinkMercadoLibre = () => {
  const handleUnlink = () => {
    // Elimina los tokens del localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('code_verifier');

    console.log('Desincronizado de MercadoLibre.');

    // Redirigir al usuario al flujo de autenticación de MercadoLibre
    const clientId = process.env.REACT_APP_MERCADOLIBRE_CLIENT_ID;
    const redirectUri = encodeURIComponent(process.env.REACT_APP_MERCADOLIBRE_REDIRECT_URI);
    const state = 'random_state_string';  // Puedes generar un estado aleatorio

    // Genera la URL de autenticación de MercadoLibre
    const mercadoLibreAuthURL = `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

    // Redirige al usuario a la página de autenticación de MercadoLibre
    window.location.href = mercadoLibreAuthURL;
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handleUnlink}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
      >
        Desincronizar MercadoLibre
      </button>
    </div>
  );
};

export default UnlinkMercadoLibre;
