import LinkMercadoLibre from './Config/LinkMercadoLibre';
import UnlinkMercadoLibre from './Config/UnlinkMercadoLibre';

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
        <UnlinkMercadoLibre /> {/* Añade el botón de desincronización */}
      </div>
    </div>
  );
};

export default Config;
