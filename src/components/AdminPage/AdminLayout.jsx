import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './General/Sidebar';

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
