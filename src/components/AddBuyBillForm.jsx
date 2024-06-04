import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function CreateBuyBillForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numBill: "",
    numControl: "",
    nameProvider: "",
    rifProvider: "",
    dateCreatedOn: "",
    dateApplicationOn: "",
    buyType: "",
    transactionType: "",
    exemptAmount: "",
    ivaAmount: "",
    totalBuy: "",
    taxEspecial: "",
    observation: "",
    companyId: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/bill/buy-bill", formData);
      alert("Factura creada exitosamente");
      navigate(`/clients/${id}/buy-bill`);
    } catch (error) {
      console.error("Error creando factura", error);
      alert("Hubo un error al crear la factura");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Crear Nueva Factura de Compra
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-700">Número de Factura</label>
            <input
              type="text"
              name="numBill"
              placeholder="Número de Factura"
              value={formData.numBill}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Número de Control</label>
            <input
              type="text"
              name="numControl"
              placeholder="Número de Control"
              value={formData.numControl}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Nombre del Proveedor</label>
            <input
              type="text"
              name="nameProvider"
              placeholder="Nombre del Proveedor"
              value={formData.nameProvider}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">RIF del Proveedor</label>
            <input
              type="text"
              name="rifProvider"
              placeholder="RIF del Proveedor"
              value={formData.rifProvider}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Fecha de Creación</label>
            <input
              type="date"
              name="dateCreatedOn"
              placeholder="Fecha de Creación"
              value={formData.dateCreatedOn}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Fecha de Aplicación</label>
            <input
              type="date"
              name="dateApplicationOn"
              placeholder="Fecha de Aplicación"
              value={formData.dateApplicationOn}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Tipo de Compra</label>
            <input
              type="text"
              name="buyType"
              placeholder="Tipo de Compra"
              value={formData.buyType}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Tipo de Transacción</label>
            <input
              type="text"
              name="transactionType"
              placeholder="Tipo de Transacción"
              value={formData.transactionType}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Monto Exento</label>
            <input
              type="number"
              name="exemptAmount"
              placeholder="Monto Exento"
              value={formData.exemptAmount}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Monto IVA</label>
            <input
              type="number"
              name="ivaAmount"
              placeholder="Monto IVA"
              value={formData.ivaAmount}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Total de Compra</label>
            <input
              type="number"
              name="totalBuy"
              placeholder="Total de Compra"
              value={formData.totalBuy}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Impuesto Especial</label>
            <input
              type="number"
              name="taxEspecial"
              placeholder="Impuesto Especial"
              value={formData.taxEspecial}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Observación</label>
            <input
              type="text"
              name="observation"
              placeholder="Observación"
              value={formData.observation}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <Link
            to={`/clients/${id}/buy-bill`}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 "
          >
            Volver
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBuyBillForm;
