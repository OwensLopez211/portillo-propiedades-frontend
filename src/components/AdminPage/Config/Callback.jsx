import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Callback = () => {
  const history = useHistory();

  useEffect(() => {
    // Captura el código de autorización desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');  // El código que devuelve MercadoLibre

    // Recupera el code_verifier del localStorage
    const codeVerifier = localStorage.getItem('code_verifier');

    // Envía el código de autorización al backend para obtener el token de acceso
    fetch('https://portillo-propiedades-backend.onrender.com/api/get-token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: authorizationCode,
        code_verifier: codeVerifier,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Token obtenido:', data);
        // Redirige al usuario al panel de administración
        history.push('/admin');
      })
      .catch(error => {
        console.error('Error al obtener el token:', error);
      });
  }, [history]);

  return <div>Procesando la autenticación...</div>;
};

export default Callback;
