import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Search, Edit2, Trash2, ChevronLeft, ChevronRight, Building2, Home, FileSpreadsheet, Filter } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/card';

const PropertyTable = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterTipo, setFilterTipo] = useState('');
  const [filterOperacion, setFilterOperacion] = useState('');
  const [filterPublicada, setFilterPublicada] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/property-list/`);
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error al obtener propiedades:', err);
        setError('Error al cargar las propiedades');
        setLoading(false);
      }
    };

    fetchProperties();
  }, [API_BASE_URL]);

  const handleEdit = (propertyId) => {
    navigate(`/administracion/propiedades/editar/${propertyId}`);
  };

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
      } catch (err) {
        console.error('Error al eliminar la propiedad:', err);
        setError('Error al eliminar la propiedad');
      }
    }
  };

  const handlePublishToggle = async (propertyId, currentState) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.patch(
        `${API_BASE_URL}/api/properties/${propertyId}/`,
        { is_published: !currentState },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      
      setProperties(properties.map(property => 
        property.id === propertyId 
          ? { ...property, is_published: !property.is_published }
          : property
      ));
    } catch (err) {
      console.error('Error al cambiar el estado de publicación:', err);
      setError('Error al actualizar el estado de la propiedad');
    }
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.tipo_propiedad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (property.codigo && property.codigo.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTipo = filterTipo ? property.tipo_propiedad.toLowerCase() === filterTipo.toLowerCase() : true;
    const matchesOperacion = filterOperacion ? property.tipo_operacion.toLowerCase() === filterOperacion.toLowerCase() : true;
    const matchesPublicada = filterPublicada === '' ? true : property.is_published === (filterPublicada === 'publicada');

    return matchesSearch && matchesTipo && matchesOperacion && matchesPublicada;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const PropertyTypeIcon = ({ type }) => {
    return type === 'casa' ? <Home className="w-4 h-4" /> : <Building2 className="w-4 h-4" />;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 text-red-700">
              <FileSpreadsheet className="w-5 h-5" />
              <p className="font-medium">{error}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Card className="overflow-hidden bg-white rounded-2xl shadow-neumorph transition-all duration-300">
        <CardContent className="p-0"> {/* Removemos el padding por defecto */}
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-white">Propiedades</h1>
              <span className="px-3 py-1 bg-blue-500/30 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                {properties.length}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar propiedades..."
                  className="pl-10 pr-4 py-2.5 w-full sm:w-64 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-white"
              >
                  <Filter className="w-4 h-4 mr-2" />
                Filtros
              </button>
            </div>
          </div>
        </div>

            {/* Filters Section with animation */}
        <div className={`transition-all duration-300 ${isFilterOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-gray-50 border-b">
            <select
              value={filterTipo}
              onChange={(e) => setFilterTipo(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            >
                  <option value="">Tipo de Propiedad</option>
                  <option value="casa">Casa</option>
                  <option value="departamento">Departamento</option>
                  <option value="oficina">Oficina</option>
                  <option value="local">Local</option>
                  <option value="terreno">Terreno</option>
                  <option value="bodega">Bodega</option>
                  <option value="estacionamiento">Estacionamiento</option>
                </select>

                <select
                  value={filterOperacion}
                  onChange={(e) => setFilterOperacion(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Tipo de Operación</option>
                  <option value="venta">Venta</option>
                  <option value="arriendo">Arriendo</option>
                  <option value="arriendo_temporal">Arriendo Temporal</option>
                </select>

                <select
                  value={filterPublicada}
                  onChange={(e) => setFilterPublicada(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Estado de Publicación</option>
                  <option value="publicada">Publicada</option>
                  <option value="no_publicada">No Publicada</option>
                </select>
          </div>
          </div>

            {/* Table Section */}
            <div className="p-6">
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propiedad</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operación</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {currentProperties.map((property) => (
                  <tr key={property.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{property.title}</span>
                        <span className="text-sm text-gray-500">Código: {property.codigo || 'Sin código'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <PropertyTypeIcon type={property.tipo_propiedad} />
                        <span className="text-sm text-gray-900 capitalize">{property.tipo_propiedad}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {property.tipo_operacion === 'venta' ? 'Venta' : 
                         property.tipo_operacion === 'arriendo' ? 'Arriendo' : 'Arriendo Temporal'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={property.is_published}
                            onChange={() => handlePublishToggle(property.id, property.is_published)}
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                        <span className="text-sm text-gray-600">
                          {property.is_published ? 'Publicada' : 'No publicada'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(property.id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(property.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

            {/* Pagination Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mt-6">
              <span className="text-sm text-gray-700">
                Mostrando {indexOfFirstItem + 1} a {Math.min(indexOfLastItem, filteredProperties.length)} de {filteredProperties.length} propiedades
              </span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium text-gray-700">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyTable;