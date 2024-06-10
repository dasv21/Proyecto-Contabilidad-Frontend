import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/api";

function EditClientForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState({
    id: "",
    rif: "",
    shortName: "",
    legalName: "",
    email: "",
    phones: [""],
    address: "",
    accountant: "",
  });

  useEffect(() => {
    const getClientDetails = async () => {
      try {
        const response = await api.get(`/client/company/${id}`);
        setClient(response.data);
      } catch (error) {
        console.log("Error Getting Client", error);
      }
    };

    getClientDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handlePhoneChange = (index, value) => {
    const newPhones = [...client.phones];
    newPhones[index] = value;
    setClient({ ...client, phones: newPhones });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/client/company`, client);
      navigate(`/client/${id}`);
    } catch (error) {
      console.log("Error updating client", error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="heading">Editar Cliente</h1>
      <div className="grid-box">
        <div>
          <strong>Nombre Legal: </strong>
          <input
            type="text"
            name="legalName"
            value={client.legalName}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Nombre Corto: </strong>
          <input
            type="text"
            name="shortName"
            value={client.shortName}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>RIF: </strong>
          <input
            type="text"
            name="rif"
            value={client.rif}
            onChange={handleInputChange}
            className="input"
          />
        </div>

        <div>
          <strong>Email: </strong>
          <input
            type="email"
            name="email"
            value={client.email}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Contador: </strong>
          <input
            type="text"
            name="accountant"
            value={client.accountant}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Dirección: </strong>
          <input
            type="text"
            name="address"
            value={client.address}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Teléfonos: </strong>
          {client.phones.map((phone, index) => (
            <input
              key={index}
              type="text"
              value={phone}
              onChange={(e) => handlePhoneChange(index, e.target.value)}
              className="input"
            />
          ))}
        </div>
      </div>
      <div className="flex-box">
        <Link to={`/client/${id}`} className="button">
          Volver
        </Link>
        <button type="submit" className="button">
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}

export default EditClientForm;
