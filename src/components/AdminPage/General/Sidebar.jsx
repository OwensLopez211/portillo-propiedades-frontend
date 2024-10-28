import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeIcon, BuildingOfficeIcon, Cog6ToothIcon, ArrowUpOnSquareIcon } from '@heroicons/react/24/outline';
import '../Static/Sidebar.css'; // Asegúrate de tener tus estilos CSS

const Sidebar = () => {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="sidebar p-5 flex flex-col bg-gray-800">
      {/* Logo */}
      <div className="mb-10 flex items-center">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="h-8 w-8 mr-3" />
        <span className="text-xl font-bold text-gray-200">NewLand Propiedades</span>
      </div>

      {/* Menú */}
      <ul className="flex-grow">
        <li>
          <Link to="/admin/inicio" className="flex items-center p-2 mb-3 hover:bg-gray-700 rounded-lg text-gray-200">
            <HomeIcon className="h-6 w-6" />
            <span className="ml-4">Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/propiedades" className="flex items-center p-2 mb-3 hover:bg-gray-700 rounded-lg text-gray-200">
            <BuildingOfficeIcon className="h-6 w-6" />
            <span className="ml-4">Propiedades</span>
          </Link>
          <ul className="pl-10 mt-2">
            <li>
              <Link to="/admin/propiedades/agregar" className="flex items-center p-2 hover:bg-gray-600 rounded-lg text-gray-200">
                Agregar Propiedad
              </Link>
            </li>
            <li>
              <Link to="/admin/propiedades/subir-masivamente" className="flex items-center p-2 hover:bg-gray-600 rounded-lg text-gray-200">
                <ArrowUpOnSquareIcon className="h-5 w-5 mr-2" />
                Subir Masivamente
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/admin/configuracion" className="flex items-center p-2 mb-3 hover:bg-gray-700 rounded-lg text-gray-200">
            <Cog6ToothIcon className="h-6 w-6" />
            <span className="ml-4">Configuración</span>
          </Link>
        </li>
      </ul>

      {/* Logout */}
      <button className="Btn mt-auto" onClick={handleLogout}>
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
          </svg>
        </div>
        <div className="text">Logout</div>
      </button>
    </div>
  );
};

export default Sidebar;
