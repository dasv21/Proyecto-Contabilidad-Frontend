import { Link } from "react-router-dom";
import { clientPropType } from "../utils/prop-types-defs";

function Client({ client }) {
  return (
    <tr className="text-center border-t">
      <td className="py-2 px-4">{client.shortName}</td>
      <td className="py-2 px-4">{client.email}</td>
      <td className="py-2 px-4">{client.rif}</td>
      <td className="py-2 px-4 flex">
        <Link
          className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          to={`/clients/${client.id}`}
        >
          Editar
        </Link>

        <Link
          className="inline-block px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
          to={`/clients/${client.id}/invoices`}
        >
          Facturas
        </Link>
      </td>
    </tr>
  );
}

Client.propTypes = {
  client: clientPropType,
};

export default Client;
