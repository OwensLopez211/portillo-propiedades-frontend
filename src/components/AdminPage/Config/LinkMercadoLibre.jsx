import React from 'react';

// Función para generar un code_verifier aleatorio
const generateCodeVerifier = () => {
  const array = new Uint32Array(56);  // El tamaño recomendado para el code_verifier es entre 43 y 128 caracteres
  window.crypto.getRandomValues(array);
  return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
};

// Función para convertir el resultado de SHA-256 en base64url
const base64urlencode = (str) => {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

// Función para generar el code_challenge basado en el code_verifier
const generateCodeChallenge = async (codeVerifier) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return base64urlencode(digest);
};

const LinkMercadoLibre = () => {
  const clientId = process.env.REACT_APP_MERCADOLIBRE_CLIENT_ID;
  const redirectUri = encodeURIComponent(process.env.REACT_APP_MERCADOLIBRE_REDIRECT_URI);
  const state = 'random_state_string';  // Puedes generar un estado aleatorio para evitar CSRF

  const handleClick = async () => {
    // Genera el code_verifier
    const codeVerifier = generateCodeVerifier();
    // Guarda el code_verifier en localStorage para usarlo más tarde
    localStorage.setItem('code_verifier', codeVerifier);
    console.log('Code Verifier stored:', codeVerifier);  // Agrega esto para verificar

    // Genera el code_challenge
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // Crea la URL de autenticación de MercadoLibre con PKCE
    const mercadoLibreAuthURL = `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`;

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
