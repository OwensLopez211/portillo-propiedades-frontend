import React, { useState } from 'react';

const MassPropertyUploadForm = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [message, setMessage] = useState('');

  // Maneja el cambio de archivo Excel
  const handleFileChange = (e) => {
    setExcelFile(e.target.files[0]);
  };

  // Maneja la subida del archivo Excel
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!excelFile) {
      setMessage('Por favor, selecciona un archivo Excel');
      return;
    }

    const formData = new FormData();
    formData.append('excel', excelFile);  // Cambia 'csv' a 'excel' para que coincida con el backend

    // Obtener el token del localStorage
    const token = localStorage.getItem('authToken');  // Asegúrate de que 'authToken' sea la clave correcta donde guardas el token

    try {
      const response = await fetch('http://localhost:8000/api/upload-mass-properties/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,  // Enviar el token en el encabezado
        },
        body: formData,
      });

      if (response.ok) {
        // Intentar obtener la respuesta JSON solo si está disponible
        const data = await response.json().catch(() => {
          return { message: "Propiedades subidas exitosamente" }; // Mensaje predeterminado si no hay JSON
        });
        setMessage(data.message || "Propiedades subidas exitosamente");
      } else {
        const errorData = await response.json();
        setMessage(`Error al subir propiedades: ${errorData.error}`);
      }
    } catch (error) {
      setMessage(`Error al conectar con el servidor: ${error.message}`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Subir propiedades masivamente</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Selecciona un archivo Excel (.xlsx):
          </label>
          <input type="file" accept=".xlsx" onChange={handleFileChange} />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Subir Propiedades
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default MassPropertyUploadForm;
