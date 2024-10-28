import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarSimple from './General/Sidebar'; // Cambiar a Navbar si es necesario

const AdminLayout = () => {
  console.log('NavbarSimple rendering...'); // Añadir log para ver si se está llamando

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavbarSimple />

      {/* Contenido principal */}
      <div className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
