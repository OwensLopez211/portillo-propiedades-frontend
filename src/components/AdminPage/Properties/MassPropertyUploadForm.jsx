import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const MassPropertyUploadForm = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseDetails, setResponseDetails] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          file.type === 'application/vnd.ms-excel') {
        setExcelFile(file);
        setMessage('');
      } else {
        setMessage('Por favor, selecciona un archivo Excel válido (.xlsx)');
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!excelFile) {
      setMessage('Por favor, selecciona un archivo Excel');
      return;
    }

    setLoading(true);
    setMessage('');
    setResponseDetails(null);

    const formData = new FormData();
    formData.append('excel', excelFile);

    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch(`${API_BASE_URL}/api/upload-mass-properties/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResponseDetails({
          total_filas_procesadas: data.total_filas_procesadas,
          propiedades_creadas: data.propiedades_creadas,
          propiedades_modificadas: data.propiedades_modificadas,
          propiedades_sin_cambios: data.propiedades_sin_cambios,
          errores: data.errores
        });
        setMessage(data.message);
      } else {
        setMessage(`Error: ${data.error || 'Error al subir las propiedades'}`);
      }
    } catch (error) {
      setMessage(`Error de conexión: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Carga Masiva de Propiedades</h1>
          <p className="text-blue-100 mt-1">Sube tu archivo Excel con el listado de propiedades</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Drag & Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
                isDragging 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-blue-400'
              } transition-colors duration-200`}
            >
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center space-y-3">
                <Upload className="w-12 h-12 text-blue-500" />
                <div className="text-gray-600">
                  <span className="font-medium">Arrastra tu archivo aquí</span> o
                  <span className="text-blue-500 font-medium"> haz clic para seleccionar</span>
                </div>
                <p className="text-sm text-gray-500">
                  Solo archivos Excel (.xlsx, .xls)
                </p>
                {excelFile && (
                  <div className="mt-2 text-sm text-blue-600 font-medium">
                    Archivo seleccionado: {excelFile.name}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !excelFile}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium
                ${loading || !excelFile 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'} 
                transition-colors duration-200`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando archivo...
                </>
              ) : 'Subir Propiedades'}
            </button>
          </form>

          {/* Messages */}
          {message && (
            <div className={`mt-6 p-4 rounded-lg ${
              message.startsWith('Error') 
                ? 'bg-red-50 text-red-700 border border-red-200' 
                : 'bg-green-50 text-green-700 border border-green-200'
            }`}>
              {message}
            </div>
          )}

          {/* Results Summary */}
          {responseDetails && (
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Resumen de la carga</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Total procesadas</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {responseDetails.total_filas_procesadas}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Creadas nuevas</p>
                  <p className="text-2xl font-bold text-green-600">
                    {responseDetails.propiedades_creadas}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Modificadas</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {responseDetails.propiedades_modificadas}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Sin cambios</p>
                  <p className="text-2xl font-bold text-gray-600">
                    {responseDetails.propiedades_sin_cambios}
                  </p>
                </div>
              </div>

              {responseDetails.errores && responseDetails.errores.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Errores encontrados</h4>
                  <div className="bg-white rounded-lg shadow-sm">
                    {responseDetails.errores.map((error, index) => (
                      <div 
                        key={index}
                        className={`p-3 text-sm text-red-600 ${
                          index !== responseDetails.errores.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        {error}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MassPropertyUploadForm;