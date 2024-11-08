import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto my-8 p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-lg">
            {/* Texto e Imagen Principal */}
            <div className="w-full lg:flex lg:flex-row items-center">
                {/* Texto */}
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-3xl font-bold mb-4 text-[#175EA5]">Tu camino inmobiliario, nuestra prioridad.</h2>
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
                        style={{ width: '369px', height: '432px' }}
                    />
                </div>
            </div>

            {/* Sección de Socias */}
            <div className="w-full mt-10 p-6 bg-transparent rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-center text-[#175EA5] mb-6">Socias</h3>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    {/* Carol */}
                    <div className="md:w-1/2 text-center p-4">
                        <img 
                            src="/carol_image.png" 
                            alt="Carol" 
                            className="rounded-full mx-auto mb-4 shadow-md" 
                            style={{ width: '150px', height: '150px' }}
                        />
                        <h4 className="text-xl font-semibold text-[#175EA5]">Carol</h4>
                        <p className="text-justify text-[#175EA5] mt-2">
                            Carol es una profesional dedicada y apasionada por el mercado inmobiliario. Con años de experiencia en la industria, se enfoca en proporcionar soluciones personalizadas y en construir relaciones de confianza con nuestros clientes. Su visión estratégica y atención al detalle hacen que cada transacción sea eficiente y satisfactoria.
                        </p>
                    </div>
                    
                    {/* Susana */}
                    <div className="md:w-1/2 text-center p-4">
                        <img 
                            src="/Susana.jpeg" 
                            alt="Susana" 
                            className="rounded-full mx-auto mb-4 shadow-md" 
                            style={{ width: '150px', height: '150px' }}
                        />
                        <h4 className="text-xl font-semibold text-[#175EA5]">Susana</h4>
                        <p className="text-justify text-[#175EA5] mt-2">
                            Susana Kornbluth Scherzer, arquitecta graduada de Pratt Institute en Nueva York y socia fundadora de Newland Propiedades, aporta más de 20 años de experiencia en el mercado inmobiliario. Su trayectoria abarca diseño de proyectos, remodelaciones y gestión de proyectos en áreas como telecomunicaciones, construcción y prefabricados de hormigón. Reconocida por su habilidad para establecer relaciones sólidas con clientes y expandir redes comerciales, Susana se distingue por un enfoque estratégico y personalizado en cada iniciativa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
