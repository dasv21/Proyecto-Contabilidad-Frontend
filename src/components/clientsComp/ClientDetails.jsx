import { clientDetailsPropType } from "../../utils/prop-types-defs";

function ClientDetails({ client }) {
  if (!client) {
    return <div className="text-center mt-10">Cargando...</div>;
  }

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">{client.shortName}</h1>
        <p>
          <strong>Nombre Legal:</strong> {client.legalName}
        </p>
        <p>
          <strong>RIF:</strong> {client.rif}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${client.email}`} className="text-blue-500">
            {client.email}
          </a>
        </p>
        <div>
          <strong>Teléfonos:</strong>
          <ul className="list-disc list-inside ml-4">
            {Array.isArray(client.phones) && client.phones.length > 0 ? (
              client.phones.map((phone, index) => <li key={index}>{phone}</li>)
            ) : (
              <li>No hay teléfonos disponibles</li>
            )}
          </ul>
        </div>
        <p>
          <strong>Dirección:</strong> {client.address}
        </p>
        <p>
          <strong>Contador:</strong> {client.accountant}
        </p>
        <p>
          <strong>Creado en:</strong>{" "}
          {new Date(client.createOn).toLocaleString()}
        </p>
        <p>
          <strong>Actualizado en:</strong>{" "}
          {new Date(client.updateOn).toLocaleString()}
        </p>
      </div>
    </>
  );
}

ClientDetails.propTypes = {
  client: clientDetailsPropType,
};

export default ClientDetails;
