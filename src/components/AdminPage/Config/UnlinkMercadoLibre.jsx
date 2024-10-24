const handleUnlink = () => {
    // Realizar una solicitud al backend si es necesario
    fetch('https://portillo-propiedades-backend.onrender.com/mercadolibre/unlink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      },
      body: JSON.stringify({
        message: 'User has unlinked MercadoLibre account'
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Unlink response:', data);
    })
    .catch(error => {
      console.error('Error unlinking:', error);
    });
  
    // Elimina los tokens de localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('code_verifier');
    
    alert('Se ha desincronizado de MercadoLibre exitosamente.');
  };
  