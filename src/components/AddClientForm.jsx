import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function AddClient() {
  const [formData, setFormData] = useState({
    rif: "",
    shortName: "",
    legalName: "",
    email: "",
    phones: ["", ""],
    address: "",
    accountant: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (index, value) => {
    const newPhones = [...formData.phones];
    newPhones[index] = value;
    setFormData({ ...formData, phones: newPhones });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/client/company", formData);
      navigate("/clients");
    } catch (error) {
      console.log("Error creating client", error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="heading">Agregar Cliente</h1>

      <div className="grid-box">
        <div>
          <strong>RIF</strong>
          <input
            type="text"
            name="rif"
            placeholder="RIF"
            value={formData.rif}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Nombre Corto</strong>
          <input
            type="text"
            name="shortName"
            placeholder="Nombre Corto"
            value={formData.shortName}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Nombre Legal</strong>

          <input
            type="text"
            name="legalName"
            placeholder="Nombre Legal"
            value={formData.legalName}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Email</strong>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Dirección</strong>
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Contador</strong>
          <input
            type="text"
            name="accountant"
            placeholder="Contador Encargado"
            value={formData.accountant}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Teléfonos</strong>
          <input
            type="text"
            placeholder="Principal"
            value={formData.phones[0]}
            onChange={(e) => handlePhoneChange(0, e.target.value)}
            className="input"
            required
          />
          <input
            type="text"
            value={formData.phones[1]}
            placeholder="Secundario"
            onChange={(e) => handlePhoneChange(1, e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="flex-box">
        <Link to={`/clients`} className="button">
          Volver
        </Link>
        <button type="submit" className="button">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default AddClient;
