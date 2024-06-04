import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function ShowClientDetails() {
  const [client, setClient] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getClientDetails = async () => {
      try {
        const response = await api.get(`/client/company/${id}`);
        setClient(response.data);
      } catch (error) {
        console.log("Error Fetching Client", error);
      }
    };

    getClientDetails();
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "¿Está seguro que desea eliminar este cliente?"
    );
    if (confirmed) {
      try {
        await api.delete(`/client/company/${id}`);
        navigate("/clients");
      } catch (error) {
        console.log("Error deleting client", error);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">{client.shortName}</h1>
        <Link
          to={`/clients/${id}/edit`}
          className="ml-2 px-2 py-1 bg-gray-500 text-white font-semibold rounded hover:bg-yellow-600"
        >
          Editar
        </Link>
        <button
          onClick={handleDelete}
          className="ml-2 px-2 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>

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
        <strong>Creado en:</strong> {new Date(client.createOn).toLocaleString()}
      </p>
      <p>
        <strong>Actualizado en:</strong>{" "}
        {new Date(client.updateOn).toLocaleString()}
      </p>
      <div className="flex justify-between mt-2">
        <Link
          to={`/clients`}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Volver
        </Link>
        <Link
          to={`/clients/${id}/buy-bill`}
          className="px-2 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Facturas de Compras
        </Link>
        <Link
          to={`/clients/${id}/sales-bill`}
          className="px-2 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
        >
          Facturas de Ventas
        </Link>
      </div>
    </div>
  );
}

export default ShowClientDetails;
