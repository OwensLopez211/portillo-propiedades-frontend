import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Static/Toggle.css'; // Asegúrate de tener el CSS del toggle switch

const MercadoLibreAccount = () => {
  const [isLinked, setIsLinked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Comprobar si el token existe en el localStorage
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsLinked(true);  // Si hay un token, la cuenta está vinculada
    } else {
      setIsLinked(false); // Si no hay token, la cuenta no está vinculada
    }
  }, []);  // Este efecto se ejecuta solo una vez, al cargar el componente

  // Función para manejar el toggle
  const handleToggle = () => {
    if (isLinked) {
      // Desvinculación
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('code_verifier');
      alert('Se ha desvinculado de MercadoLibre');
      setIsLinked(false); // Cambiar el estado a desvinculado
      navigate('/admin/configuracion');
    } else {
      // Vinculación
      const clientId = process.env.REACT_APP_MERCADOLIBRE_CLIENT_ID;
      const redirectUri = encodeURIComponent(process.env.REACT_APP_MERCADOLIBRE_REDIRECT_URI);
      const state = 'random_state_string';  // Puedes generar un estado aleatorio para evitar CSRF

      // Generar el code_verifier y code_challenge
      const generateCodeVerifier = () => {
        const array = new Uint32Array(56);
        window.crypto.getRandomValues(array);
        return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
      };

      const generateCodeChallenge = async (codeVerifier) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(codeVerifier);
        const digest = await crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode.apply(null, new Uint8Array(digest)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      };

      const codeVerifier = generateCodeVerifier();
      localStorage.setItem('code_verifier', codeVerifier);

      generateCodeChallenge(codeVerifier).then((codeChallenge) => {
        const mercadoLibreAuthURL = `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`;

        // Redirigir al usuario a la página de autenticación de MercadoLibre
        window.location.href = mercadoLibreAuthURL;
      });

      // Cambiar el estado a vinculado
      setIsLinked(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="toggle-wrapper">
        <input
          type="checkbox"
          className="toggle-checkbox"
          checked={isLinked}
          onChange={handleToggle} // Este evento cambia el estado y redirige o desvincula
        />
        <div className="toggle-container">
          <div className="toggle-button">
            <div className="toggle-button-circles-container">
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
              <div className="toggle-button-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MercadoLibreAccount;
