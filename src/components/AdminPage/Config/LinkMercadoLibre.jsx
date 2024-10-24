import React from 'react';

// Usa variables de entorno para mayor seguridad
const LinkMercadoLibre = () => {
  const clientId = process.env.REACT_APP_MERCADOLIBRE_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_MERCADOLIBRE_REDIRECT_URI;
  const state = 'random_state_string'; // Puedes generar un estado aleatorio para mayor seguridad

  // URL de autenticación de MercadoLibre
  const mercadoLibreAuthURL = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;

  const handleClick = () => {
    // Redirige al usuario a la página de autenticación de MercadoLibre
    window.location.href = mercadoLibreAuthURL;
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handleClick}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
      >
        Vincular con MercadoLibre
      </button>
    </div>
  );
};

export default LinkMercadoLibre;
