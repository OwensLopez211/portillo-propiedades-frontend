import React, { useState, useEffect } from 'react';
import LinkMercadoLibre from './LinkMercadoLibre';
import UnlinkMercadoLibre from './UnlinkMercadoLibre';

const MercadoLibreAccount = () => {
  const [isLinked, setIsLinked] = useState(false);

  useEffect(() => {
    // Comprobar si el token existe en el localStorage
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsLinked(true);  // Si hay un token, la cuenta está vinculada
    } else {
      setIsLinked(false); // Si no hay token, la cuenta no está vinculada
    }
  }, []);  // Este efecto se ejecuta solo una vez, al cargar el componente

  return (
    <div>
      {isLinked ? (
        <UnlinkMercadoLibre />  // Si está vinculado, muestra el botón para desvincular
      ) : (
        <LinkMercadoLibre />  // Si no está vinculado, muestra el botón para vincular
      )}
    </div>
  );
};

export default MercadoLibreAccount;
