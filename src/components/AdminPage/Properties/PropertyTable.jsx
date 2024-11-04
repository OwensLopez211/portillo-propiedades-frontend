import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirigir
import axios from 'axios';

const PropertyTable = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Usar navigate para redirigir

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('${API_BASE_URL}/api/property-list/');
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error al obtener propiedades:', err);
        setError('Error al cargar las propiedades');
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Cargando propiedades...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  // Función para redirigir al formulario de edición de propiedad
  const handleEdit = (propertyId) => {
    navigate(`/admin/propiedades/editar/${propertyId}`); // Redirigir a la ruta de edición
  };

  // Función para eliminar una propiedad
  const handleDelete = async (propertyId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta propiedad?");
    
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        await axios.delete(`${API_BASE_URL}/api/properties/${propertyId}/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        setProperties(properties.filter(property => property.id !== propertyId));
        console.log(`Propiedad con ID: ${propertyId} eliminada`);
      } catch (err) {
        console.error('Error al eliminar la propiedad:', err);
        setError('Error al eliminar la propiedad');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Lista de Propiedades</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-center">ID</th>
              <th className="py-3 px-4 text-center">Seleccionar</th>
              <th className="py-3 px-4 text-center">Título</th>
              <th className="py-3 px-4 text-center">Tipo de Propiedad</th>
              <th className="py-3 px-4 text-center">Habitaciones</th>
              <th className="py-3 px-4 text-center">Baños</th>
              <th className="py-3 px-4 text-center">Acciones</th> {/* Nueva columna para las acciones */}
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id} className="border-b transition duration-300 hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{property.id}</td>
                <td className="py-2 px-4 text-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="py-2 px-4 text-center">{property.title}</td>
                <td className="py-2 px-4 text-center">{property.tipo_propiedad}</td>
                <td className="py-2 px-4 text-center">{property.habitaciones}</td>
                <td className="py-2 px-4 text-center">{property.baños}</td>
                <td className="py-2 px-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 mr-3" onClick={() => handleEdit(property.id)}>
                    <svg height="1em" viewBox="0 0 512 512">
                      <path
                        d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                      />
                    </svg>
                  </button>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(property.id)}>
                    <svg height="1em" viewBox="0 0 512 512">
                      <path
                        d="M64 160h384l-21.5 320c-1.3 19.7-17.9 32-37.5 32H122.5c-19.6 0-36.2-12.3-37.5-32L64 160zM432 80H80V32c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v48z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyTable;
