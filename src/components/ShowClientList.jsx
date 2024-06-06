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
    <div className="container">
      <div className="flex-box">
        <h1 className="heading">Lista de Clientes</h1>
        <Link to="/clients/add" className="button-add">
          Agregar Cliente
        </Link>
      </div>

      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="table-th">#</th>
            <th className="table-th">NOMBRE</th>
            <th className="table-th">EMAIL</th>
            <th className="table-th">RIF</th>
            <th className="table-th"></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {clients.map((client, i) => (
            <tr key={client.id}>
              <td className="table-td">{i + 1}</td>
              <td className="table-td">{client.shortName}</td>
              <td className="table-td">{client.email}</td>
              <td className="table-td">{client.rif}</td>
              <td className="table-td">
                <Link to={`/clients/${client.id}`} className="button-more">
                  ...
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex-box">
        <Link to={`/`} className="button">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default ShowClientList;
