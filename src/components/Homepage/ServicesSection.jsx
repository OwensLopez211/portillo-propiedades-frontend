// src/components/ServicesSection.jsx

import React from 'react';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'ESTUDIO JURÍDICO',
      description: 'Te apoyamos en todo momento',
      image: '/juridico2.jpg',
    },
    {
      title: 'COMPRA Y VENTA',
      description: 'Corretaje y Gestión Inmobiliaria',
      image: '/escritura-de-compraventa.jpg',
    },
    {
      title: 'ADMINISTRACIÓN PROPIEDADES',
      description: '',
      image: '/edifi.jpg',
    },
    {
      title: 'APART AMOBLADOS',
      description: 'Por día y larga estadía',
      image: '/SLA_3734.jpg',
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestros servicios</h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
