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
      navigate(`/clients/${id}`);
    } catch (error) {
      console.log("Error updating client", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-heading">Editar Cliente</h1>
      <div className="form-grid">
        <div>
          <label className="form-label">RIF</label>
          <input
            type="text"
            name="rif"
            value={client.rif}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Nombre Corto</label>
          <input
            type="text"
            name="shortName"
            value={client.shortName}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Nombre Legal</label>
          <input
            type="text"
            name="legalName"
            value={client.legalName}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={client.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="address"
            value={client.address}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Contador</label>
          <input
            type="text"
            name="accountant"
            value={client.accountant}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Teléfonos</label>
          {client.phones.map((phone, index) => (
            <input
              key={index}
              type="text"
              value={phone}
              onChange={(e) => handlePhoneChange(index, e.target.value)}
              className="form-input"
            />
          ))}
        </div>
      </div>
      <div className="box-button">
        <Link to={`/clients/${id}`} className="button">
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
