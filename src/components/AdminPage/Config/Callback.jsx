import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');
    const state = urlParams.get('state');

    if (authorizationCode && state === 'expected_state_value') {
      // Enviar el código al backend para intercambiarlo por el token
      fetch('https://portillo-propiedades-backend.onrender.com/mercadolibre/get-token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: authorizationCode,
          code_verifier: localStorage.getItem('code_verifier'), // Recuperar el code_verifier almacenado en localStorage
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.access_token) {
            // Guardar el token en el localStorage o en un estado global
            localStorage.setItem('access_token', data.access_token);
            navigate('/admin'); // Redirigir al panel de administración o donde quieras
          }
        })
        .catch(error => {
          console.error('Error obteniendo el token:', error);
        });
    }
  }, [navigate]);

  return <div>Procesando la autenticación...</div>;
};

export default Callback;
