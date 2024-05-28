import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="mx-auto my-4 max-w-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Agregar Cliente</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">RIF</label>
          <input
            type="text"
            name="rif"
            placeholder="RIF"
            value={formData.rif}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre Corto</label>
          <input
            type="text"
            name="shortName"
            placeholder="Nombre Corto"
            value={formData.shortName}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre Legal</label>

          <input
            type="text"
            name="legalName"
            placeholder="Nombre Legal"
            value={formData.legalName}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Teléfonos</label>
          <input
            type="text"
            placeholder="Principal"
            value={formData.phones[0]}
            onChange={(e) => handlePhoneChange(0, e.target.value)}
            className="w-full px-2 py-1 border rounded mb-2"
            required
          />
          <input
            type="text"
            value={formData.phones[1]}
            placeholder="Secundario"
            onChange={(e) => handlePhoneChange(1, e.target.value)}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dirección</label>
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contador</label>
          <input
            type="text"
            name="accountant"
            placeholder="Contador Encargado"
            value={formData.accountant}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default AddClient;
