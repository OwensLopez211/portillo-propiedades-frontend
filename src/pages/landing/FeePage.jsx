import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import SecondaryHero from '../../components/General/SecundaryHero';
import Footer from '../../components/General/Footer';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons';

const FeePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Topbar />
      <Navbar />
      <SecondaryHero
        title="Nuestros Honorarios"
        subtitle=""
        backgroundImage="Fees.jpg"
      />

      <div className="container mx-auto px-4 py-16 max-w-6xl text-[#175EA5]"> {/* Aplicado text-[#175EA5] al contenedor */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Conozca los detalles de nuestros honorarios, diseñados para brindar un servicio profesional y confiable en cada paso del proceso.
          </p>
        </div>

        <div className="space-y-16">
          {/* Sección Compraventa */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <h2 className="text-3xl font-bold mb-4">
              Compraventa de una Propiedad
            </h2>
            <p className="text-lg mb-6">
              Obtenga un servicio integral para garantizar una transacción exitosa en la compraventa de su propiedad.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Partes involucradas:</strong> Vendedor, comprador y corredor de propiedades.</li>
              <li><strong>Monto de los honorarios:</strong> 2% más impuestos sobre el valor de venta, pagado por cada parte (vendedor y comprador).</li>
              <li><strong>Garantía del pago:</strong> Cheque o vale vista en custodia en notaría, liberado al cumplirse la inscripción.</li>
              <li><strong>Momento del pago:</strong> Al inscribir la propiedad en el conservador de bienes raíces.</li>
            </ul>
          </div>

          {/* Sección Arriendo */}
          <div className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <h2 className="text-3xl font-bold mb-4">
              Arriendo de una Propiedad
            </h2>
            <p className="text-lg mb-6">
              Facilitamos el proceso de arriendo asegurando transparencia y seguridad.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Partes involucradas:</strong> Arrendador, arrendatario y corredor de propiedades.</li>
              <li><strong>Monto de los honorarios:</strong> 50% más impuestos sobre el valor de arriendo, pagado por cada parte.</li>
              <li><strong>Momento del pago:</strong> Al firmar el contrato de arriendo en notaría.</li>
            </ul>
          </div>

          {/* Sección Arriendo por Temporada */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <h2 className="text-3xl font-bold mb-4">
              Arriendo por Temporada o Diario
            </h2>
            <p className="text-lg mb-6">
              Servicios diseñados para alquileres de temporada o diarios.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Partes involucradas:</strong> Arrendador, arrendatario y corredor de propiedades.</li>
              <li><strong>Monto de los honorarios:</strong> 10% más impuestos sobre el valor del arriendo por temporada o diario.</li>
              <li><strong>Momento del pago:</strong> Al firmar el contrato de arriendo.</li>
            </ul>
          </div>
        </div>
      </div>

      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default FeePage;
