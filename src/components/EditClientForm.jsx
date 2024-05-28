import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
      await api.put(`/client/company/${id}`, client);
      navigate(`/clients/${id}`);
    } catch (error) {
      console.log("Error updating client", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <h1 className="text-2xl text-center font-bold mb-4">Editar Cliente</h1>
      <div className="mb-4">
        <label className="block text-gray-700">RIF</label>
        <input
          type="text"
          name="rif"
          value={client.rif}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Nombre Corto</label>
        <input
          type="text"
          name="shortName"
          value={client.shortName}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Nombre Legal</label>
        <input
          type="text"
          name="legalName"
          value={client.legalName}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={client.email}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Teléfonos</label>
        {client.phones.map((phone, index) => (
          <input
            key={index}
            type="text"
            value={phone}
            onChange={(e) => handlePhoneChange(index, e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
        ))}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Dirección</label>
        <input
          type="text"
          name="address"
          value={client.address}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contador</label>
        <input
          type="text"
          name="accountant"
          value={client.accountant}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Guardar Cambios
      </button>
    </form>
  );
}

export default EditClientForm;
