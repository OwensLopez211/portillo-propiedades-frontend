import React from 'react';

const UnlinkMercadoLibre = () => {
  const handleUnlink = () => {
    // Elimina el access_token y cualquier otro dato relacionado de localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('code_verifier');

    console.log('Desincronizado de MercadoLibre.');
    alert('Se ha desincronizado de MercadoLibre exitosamente.');
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handleUnlink}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
      >
        Desincronizar MercadoLibre
      </button>
    </div>
  );
};

export default UnlinkMercadoLibre;
