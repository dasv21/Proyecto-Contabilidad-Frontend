import { Link } from "react-router-dom";
import { clientPropType } from "../../utils/prop-types-defs";

function Client({ client }) {
  return (
    <div>
      <h3>{client.shortName}</h3>
      <p>{client.email}</p>
      <p>{client.rif}</p>
      <Link
        className="nline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        to={`/clients/${client.id}`}
      >
        Modificar
      </Link>
    </div>
  );
}

Client.propTypes = {
  client: clientPropType,
};

export default Client;
