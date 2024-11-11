import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import NewsTicker from '../components/General/NewsTicker';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const newsMessage = "¡Bienvenidos al nuevo Portal Newland! Nota: La versión de dispositivos mobiles en la administración aun esta en progreso";
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/administracion/inicio');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }

      const data = await response.json();
      localStorage.setItem('authToken', data.access);
      navigate('/administracion/inicio');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #a6c0fe, #f68084)',
        backgroundSize: '200% 200%',
        animation: 'bg-pan 10s infinite alternate',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-500 opacity-80"></div>

      {/* Contenido */}
      <div className="flex flex-col items-center z-10 relative space-y-8">

        <div>
          <NewsTicker message={newsMessage} />

        </div>
        {/* Texto de Bienvenida */}
        <div className="text-center text-white space-y-4">
          <h1 className="text-4xl font-bold">Portal Administrativo</h1>
          <p className="text-lg">
            Bienvenido al sistema de administración de propiedades de <span className="font-semibold">NewLand Propiedades</span>.
          </p>
          <p className="text-sm text-gray-200">Accede a la gestión de propiedades, agentes y clientes.</p>
        </div>

        {/* Login Form */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                Nombre de Usuario
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white bg-opacity-20 text-white placeholder-white"
                placeholder="Ingrese su usuario"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white bg-opacity-20 text-white placeholder-white"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            {error && <p className="text-red-400 text-center mb-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 w-full"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CSS Animación */}
      <style>
        {`
          @keyframes bg-pan {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
