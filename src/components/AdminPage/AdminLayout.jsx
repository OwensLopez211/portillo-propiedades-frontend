// AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './General/Sidebar';

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar Fijo */}
      <div className="flex-grow p-6 bg-gray-100 ml-64"> {/* Deja margen izquierdo igual al ancho del sidebar */}
        <Outlet /> {/* Renderiza el contenido dinámico aquí */}
      </div>
    </div>
  );
};

export default AdminLayout;
