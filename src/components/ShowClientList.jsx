import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function ShowClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await api.get("/client/company");
        setClients(response.data);
      } catch (error) {
        console.log("Error Fetching Clients", error);
      }
    };

    getClients();
  }, []);

  return (
    <div className=" mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Lista de Clientes</h1>
        <Link
          to="/clients/add"
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
        >
          Agregar Cliente
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                #
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium tracking-wider">
                NOMBRE
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium tracking-wider">
                EMAIL
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium tracking-wider">
                RIF
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map((client, i) => (
              <tr key={client.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{i + 1}</div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {client.shortName}
                  </div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{client.email}</div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{client.rif}</div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <Link
                    to={`/clients/${client.id}`}
                    className="px-2 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                  >
                    ...
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowClientList;
