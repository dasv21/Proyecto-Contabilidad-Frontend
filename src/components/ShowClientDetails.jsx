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
    <div className="container">
      <div className="flex-box">
        <h1 className="heading">{client.shortName}</h1>
        <Link to={`/clients/${id}/edit`} className="button-edit">
          Editar
        </Link>
      </div>
      <div className="grid-box">
        <div>
          <strong>Nombre Legal:</strong> {client.legalName}
        </div>
        <div>
          <strong>RIF:</strong> {client.rif}
        </div>
        <div>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${client.email}`} className="text-blue-500">
            {client.email}
          </a>
        </div>
        <div>
          <strong>Contador:</strong> {client.accountant}
        </div>
        <div>
          <strong>Dirección:</strong> {client.address}
        </div>
        <div>
          <strong>Teléfonos:</strong>

          {Array.isArray(client.phones) && client.phones.length > 0 ? (
            client.phones.map((phone, index) => <a key={index}> {phone} </a>)
          ) : (
            <>No hay teléfonos disponibles</>
          )}
        </div>

        <div>
          <strong>Creado en:</strong>{" "}
          {new Date(client.createOn).toLocaleString()}
        </div>
        <div>
          <strong>Actualizado en:</strong>{" "}
          {new Date(client.updateOn).toLocaleString()}
        </div>
      </div>
      <div className="flex-box">
        <Link to={`/clients`} className="button">
          Volver
        </Link>
        <Link to={`/clients/${id}/buy-bill`} className="button">
          Facturas de Compras
        </Link>
        <Link to={`/clients/${id}/sales-bill`} className="button">
          Facturas de Ventas
        </Link>
        <button onClick={handleDelete} className="button-delete">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ShowClientDetails;
