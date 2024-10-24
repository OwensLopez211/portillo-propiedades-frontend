import React, { useState, useEffect } from 'react';
import AgentCard from './AgentCard';

const AgentsCarousel = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/agents/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error('Error fetching agents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) {
    return <div>Cargando agentes...</div>;
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Agentes</h2>
        <p className="text-gray-600 mb-8">Conozca nuestro equipo</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <span className="block w-2 h-2 bg-orange-600 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default AgentsCarousel;
