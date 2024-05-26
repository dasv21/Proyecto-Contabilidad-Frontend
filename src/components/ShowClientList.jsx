import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

function ClientListContainer() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await api.get("/client/company");
        setClients(response.data);
      } catch (error) {
        console.log("Error Feching Clients", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <>
      <div className="mx-auto my-4 ">
        <div className="flex justify-between items-center mb-2 mx-2">
          <h1 className="text-2xl font-bold ">Lista de Clientes</h1>
          <Link
            to="/clients/add"
            className="inline-block px-2 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600  "
          >
            Agregar Cliente
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>RIF</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr key={client.id} className="text-center border-t">
                  <td>{i + 1}</td>
                  <td>{client.shortName}</td>
                  <td>{client.email}</td>
                  <td>{client.rif}</td>
                  <td>
                    <Link
                      className="inline-block px-1 py-1 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      to={`/clients/${client.id}`}
                    >
                      Detalles
                    </Link>

                    <Link
                      className="inline-block px-1 py-1 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
                      to={`/clients/${client.id}/invoices`}
                    >
                      Facturas
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ClientListContainer;
