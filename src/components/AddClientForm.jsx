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
      <h1 className="form-heading">Agregar Cliente</h1>
      <div className="form-grid">
        <div>
          <label className="form-label">RIF</label>
          <input
            type="text"
            name="rif"
            placeholder="RIF"
            value={formData.rif}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Nombre Corto</label>
          <input
            type="text"
            name="shortName"
            placeholder="Nombre Corto"
            value={formData.shortName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Nombre Legal</label>

          <input
            type="text"
            name="legalName"
            placeholder="Nombre Legal"
            value={formData.legalName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Contador</label>
          <input
            type="text"
            name="accountant"
            placeholder="Contador Encargado"
            value={formData.accountant}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Teléfonos</label>
          <input
            type="text"
            placeholder="Principal"
            value={formData.phones[0]}
            onChange={(e) => handlePhoneChange(0, e.target.value)}
            className="form-input"
            required
          />
          <input
            type="text"
            value={formData.phones[1]}
            placeholder="Secundario"
            onChange={(e) => handlePhoneChange(1, e.target.value)}
            className="form-input"
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
