import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarSimple from './General/Sidebar'; // Asegúrate de que es el navbar y no el sidebar

const AdminLayout = () => {
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
