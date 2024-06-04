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
    <div className="mx-auto p-2 bg-white shadow-md text-gray-700">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">Lista de Clientes</h1>
        <Link
          to="/clients/add"
          className="px-2 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
        >
          Agregar Cliente
        </Link>
      </div>

      <table className=" min-w-full divide-y divide-gray-200">
        <thead className=" bg-gray-600 text-white">
          <tr>
            <th className="px-2 py-2 text-left text-xs font-medium">#</th>
            <th className="px-2 py-2 text-left text-xs font-medium">NOMBRE</th>
            <th className="px-2 py-2 text-left text-xs font-medium">EMAIL</th>
            <th className="px-2 py-2 text-left text-xs font-medium">RIF</th>
            <th className="px-2 py-2 text-left text-xs font-medium"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          {clients.map((client, i) => (
            <tr key={client.id}>
              <td className="px-2 py-2">{i + 1}</td>
              <td className="px-2 py-2">{client.shortName}</td>
              <td className="px-2 py-2">{client.email}</td>
              <td className="px-2 py-2">{client.rif}</td>
              <td className="px-2 py-2">
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
  );
}

export default ShowClientList;
