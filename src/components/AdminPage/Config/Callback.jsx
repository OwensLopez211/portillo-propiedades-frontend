import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');
    const API_BASE_URL = process.env.REACT_APP_API_URL;

    if (authorizationCode) {
      // Enviar el código al backend para intercambiarlo por el token
      fetch(`${API_BASE_URL}/mercadolibre/get-token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: authorizationCode,
          code_verifier: localStorage.getItem('code_verifier'), // Asegúrate de que esto tiene un valor válido
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.access_token) {
            // Guardar el token en el localStorage o en un estado global
            localStorage.setItem('access_token', data.access_token);
            // Redirigir al panel de administración
            navigate('/administracion/inicio');
          } else {
            console.error('Error en la autenticación:', data);
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
