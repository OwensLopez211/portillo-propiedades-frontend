import LinkMercadoLibre from './Config/LinkMercadoLibre';
import UnlinkMercadoLibre from './Config/UnlinkMercadoLibre';  // Importa el nuevo componente

const Config = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Configuraciones del sistema</h1>
        <p></p>
      </div>
      <div>
        <LinkMercadoLibre />
      </div>
      <div>
        <UnlinkMercadoLibre /> 
      </div>
    </div>
  );
};

export default Config;
