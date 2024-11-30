import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/landing/HomePage';
import AboutUs from './pages/landing/AboutUs';
import Services from './pages/landing/Services';
import WorkWithUs from './pages/landing/WorkWithUs';
import PropertiesPage from './pages/landing/PropertiesPage';
import PropertyFormPage from './pages/landing/PropertyFormPage';
 import FeePage from './pages/landing/FeePage';
import PropertyDetail from './pages/landing/PropertyDetail';
import Login from './pages/Login';
import PrivateRoute from './components/Private/PrivateRoute'; // Componente de rutas protegidas
import Home from './components/AdminPage/Home';
import Properties from './components/AdminPage/Properties';
import AdminLayout from './components/AdminPage/AdminLayout';
import AddProperty from './components/AdminPage/Properties/AddProperty';
import EditProperty from './components/AdminPage/Properties/EditProperty';
/* import Config from './components/AdminPage/Config'; */
import Callback from './components/AdminPage/Config/Callback';
/* import NewsPage from './pages/landing/NewsPage'; */
import MassPropertyUploadForm from './components/AdminPage/Properties/MassPropertyUploadForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/propiedades" element={<PropertiesPage />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<WorkWithUs />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/entreganos-propiedad" element={<PropertyFormPage />} />
         <Route path="/honorarios" element={<FeePage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
{/*         <Route path="/News" element={<NewsPage />} /> */}

        
        {/* Ruta protegida con AdminLayout */}
        <Route 
          path="/administracion" 
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="inicio" element={<Home />} />
          <Route path="propiedades" element={<Properties />} />
          <Route path="propiedades/agregar" element={<AddProperty />} />
          <Route path="propiedades/editar/:id" element={<EditProperty />} /> 
          {/* <Route path="configuracion" element={<Config />} */}
          <Route path="propiedades/subir-masivamente" element={<MassPropertyUploadForm />} /> {/* Nueva ruta */}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;