import PropTypes from "prop-types";
import Client from "./Client";
import { clientPropType } from "../utils/prop-types-defs";
import { Link } from "react-router-dom";

function ClientList({ clients }) {
  return (
    <div className="mx-auto my-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold px-4">Lista de Clientes</h1>
        <Link
          to="/clients/new"
          className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Agregar Cliente
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2 px-4">Nombre</th>
              <th className="w-1/4 py-2 px-4">Email</th>
              <th className="w-1/4 py-2 px-4">RIF</th>
              <th className="w-1/4 py-2 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <Client key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

ClientList.propTypes = {
  clients: PropTypes.arrayOf(clientPropType),
};

export default ClientList;
