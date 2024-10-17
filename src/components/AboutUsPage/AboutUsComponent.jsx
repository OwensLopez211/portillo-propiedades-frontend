import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto my-8 p-4 flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-lg">
            {/* Texto */}
            <div className="lg:w-1/2 p-6">
                <h2 className="text-3xl font-bold mb-4 text-[#175EA5]">Tu camino inmobiliario, nuestra prioridad.</h2> {/* Cambio de color */}
                <p className="mb-4 text-justify text-[#175EA5]">
                    Somos un equipo de profesionales con años de experiencia en el mercado dedicados a brindarte un servicio inmobiliario integral y personalizado. Más que un agente, somos tu aliado estratégico; confiando en nosotros podrás tomar las mejores decisiones. Te acompañamos en cada paso del proceso de compra, venta o arriendo, asegurando que encuentres la propiedad ideal para tus necesidades y objetivos.
                </p>
                <p className="text-justify text-[#175EA5]">
                    Nuestra experiencia y compromiso junto con soluciones a tu medida y objetivos reales te garantizan tranquilidad y satisfacción en cada etapa, desde la búsqueda de la propiedad ideal hasta la gestión de todos los trámites.
                </p>
            </div>

            {/* Imagen */}
            <div className="lg:w-1/2 p-6 flex justify-center">
                <img 
                    src="/Aboutimage.png" 
                    alt="About Us" 
                    className="rounded-lg shadow-md" 
                    style={{ width: '369px', height: '432px' }} // Ajusta el tamaño aquí
                />
            </div>
        </div>
    );
};

export default AboutUs;
