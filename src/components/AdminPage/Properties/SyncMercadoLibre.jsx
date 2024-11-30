// components/MercadoLibreItems.jsx
import React, { useState, useEffect } from 'react';

const MercadoLibreItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem('authToken'); // Obtén el token del localStorage
      try {
        const response = await fetch(`${API_BASE_URL}/api/mercadolibre/items/`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener las publicaciones.');
        }

        const data = await response.json();
        setItems(data.results); // Asumiendo que las publicaciones están en un campo 'results'
      } catch (error) {
        setError(error.message);
      }
    };

    fetchItems();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (items.length === 0) {
    return <div>No hay publicaciones de MercadoLibre.</div>;
  }

  return (
    <div>
      <h2>Tus Publicaciones de MercadoLibre</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MercadoLibreItems;
