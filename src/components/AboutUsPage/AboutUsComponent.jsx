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
                    Somos un equipo de profesionales con años de experiencia en el mercado, dedicados a brindarte un servicio inmobiliario integral y personalizado. Más que simples agentes, somos tu aliado estratégico. Confiando en nosotros, podrás tomar las mejores decisiones. Te acompañamos en cada paso del proceso de compra, venta o arriendo, asegurándonos de que encuentres la propiedad ideal para tus necesidades y objetivos.
                    
                    </p>
                    <p className="text-justify text-[#175EA5]">
                    Nuestra experiencia y compromiso, junto con soluciones a tu medida y objetivos reales, te garantizan tranquilidad y satisfacción en cada etapa: desde la búsqueda de la propiedad ideal hasta la gestión de todos los trámites.
                    </p>
                </div>

                {/* Imagen */}
                <div className="lg:w-1/2 p-6 flex justify-center">
                    <img 
                        src="/Aboutimage.png" 
                        alt="About Us" 
                        className="rounded-lg shadow-md" 
                        style={{ width: '300px', height: '350px' }} // Tamaño reducido
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
                        src="Carol.jpg" 
                        alt="Carol" 
                        className="rounded-full mx-auto mb-4 shadow-md" 
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                        <h4 className="text-xl font-semibold text-[#175EA5]">Caroll Sinclair W.</h4>
                        <p className="text-sm font-light text-[#175EA5]">Diseñadora<br />Pratt Institute, Brooklyn, N.Y., USA</p>
                        <p className="text-justify text-[#175EA5] mt-2">
                        Ha trabajado en proyectos diversos, que van desde el diseño corporativo para grandes empresas hasta la creación de productos innovadores. Su enfoque combina creatividad, funcionalidad y un profundo entendimiento de las necesidades de los clientes. Es apasionada por la creación de marcas, espacios que perduren y productos con alma. Con más de 17 años de experiencia en el sector inmobiliario y más de 35 como diseñadora, ha desarrollado una comprensión profunda de cómo el diseño de un espacio puede influir significativamente en la calidad de vida de las personas.

                        Su enfoque se centra en comprender a cada cliente y construir relaciones sólidas y de confianza, basadas en la transparencia, la comunicación abierta y la atención a los detalles. Su experiencia le permite maximizar el potencial de cada propiedad mediante una estrategia sólida y una planificación meticulosa, asegurando que cada transacción se lleve a cabo de manera exitosa y satisfactoria.
                        </p>
                    </div>
                    
                    {/* Susana */}
                    <div className="md:w-1/2 text-center p-4">
                    <img 
                        src="Susana.jpg" 
                        alt="Susana" 
                        className="rounded-full mx-auto mb-4 shadow-md" 
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                        <h4 className="text-xl font-semibold text-[#175EA5]">Susana Kornblüth S.</h4>
                        <p className="text-sm font-light text-[#175EA5]">Arquitecto<br />Pratt Institute, Brooklyn, N.Y., USA</p>
                        <p className="text-justify text-[#175EA5] mt-2">
                            Susana, socia fundadora de Newland Propiedades, cuenta con más de 35 años de experiencia en el mercado inmobiliario, desarrollando una trayectoria profesional en Nueva York, México y Santiago de Chile. Su expertise abarca el diseño de proyectos arquitectónicos, remodelaciones y la gestión de proyectos en sectores clave como telecomunicaciones, construcción y prefabricados de hormigón.

                            <br />
                            Destacada por su capacidad para construir relaciones sólidas y ampliar redes comerciales, Susana se enfoca en brindar soluciones estratégicas y personalizadas. Su visión para crear espacios funcionales y visualmente atractivos, sumada a su dedicación y atención a las necesidades de cada cliente, la convierten en una profesional de confianza para quienes buscan un hogar que se adapte a su estilo de vida y expectativas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
