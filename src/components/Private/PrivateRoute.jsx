import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');

  // Si no hay token, redirige al login
  if (!authToken) {
    return <Navigate to="/login" />;
  }

  // Si hay token, muestra el contenido protegido
  return children;
};

export default PrivateRoute;
