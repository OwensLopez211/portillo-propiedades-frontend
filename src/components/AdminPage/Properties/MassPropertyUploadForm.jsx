import React, { useState } from 'react';

const MassPropertyUploadForm = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [message, setMessage] = useState('');

  // Maneja el cambio de archivo CSV
  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  // Maneja la subida del archivo CSV
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!csvFile) {
      setMessage('Por favor, selecciona un archivo CSV');
      return;
    }

    const formData = new FormData();
    formData.append('csv', csvFile);

    // Obtener el token del localStorage
    const token = localStorage.getItem('authToken');  // Asegúrate de que 'authToken' sea la clave correcta donde guardas el token

    try {
      const response = await fetch('https://portillo-propiedades-backend.onrender.com/api/upload-mass-properties/', {
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
            Selecciona un archivo CSV:
          </label>
          <input type="file" accept=".csv" onChange={handleFileChange} />
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
