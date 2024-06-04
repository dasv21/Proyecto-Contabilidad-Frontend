import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/api";

function EditBuyBillForm() {
  const { id, billId } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState({
    id: "",
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
  });

  useEffect(() => {
    const getBillDetails = async () => {
      try {
        const response = await api.get(`/bill/buy-bill/${billId}`);
        setBill(response.data);
      } catch (error) {
        console.log("Error Getting Bill", error);
      }
    };

    getBillDetails();
  }, [billId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBill({ ...bill, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/bill/buy-bill`, bill);
      navigate(`/clients/${id}/buy-bill/${billId}`);
    } catch (error) {
      console.log("Error updating bill", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <h1 className="text-2xl text-center font-bold mb-4">
        Editar Factura de Compra
      </h1>
      <div className="grid grid-cols-2">
        <div className="mx-2">
          <div className="mb-2">
            <label className="block text-gray-700">Numero de Factura</label>
            <input
              type="text"
              name="numBill"
              value={bill.numBill}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Número de Control</label>
            <input
              type="text"
              name="numControl"
              value={bill.numControl}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Proveedor</label>
            <input
              type="text"
              name="nameProvider"
              value={bill.nameProvider}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">RIF del Proveedor</label>
            <input
              type="text"
              name="rifProvider"
              value={bill.rifProvider}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Fecha de Creación</label>
            <input
              type="date"
              name="dateCreatedOn"
              value={bill.dateCreatedOn}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Fecha de Aplicacion</label>
            <input
              type="date"
              name="dateApplicationOn"
              value={bill.dateApplicationOn}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2 col-span-2">
            <label className="block text-gray-700">Observacion</label>
            <input
              type="text"
              name="observation"
              value={bill.observation}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div>
          <div className="mb-2">
            <label className="block text-gray-700">Tipo de Transacción</label>
            <input
              type="text"
              name="transactionType"
              value={bill.transactionType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Monto Exento</label>
            <input
              type="text"
              name="exemptAmount"
              value={bill.exemptAmount}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Monto IVA</label>
            <input
              type="text"
              name="ivaAmount"
              value={bill.ivaAmount}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Total de Compra</label>
            <input
              type="text"
              name="totalBuy"
              value={bill.totalBuy}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Impuesto Especial</label>
            <input
              type="text"
              name="taxEspecial"
              value={bill.taxEspecial}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Tipo de Compra</label>
            <input
              type="text"
              name="buyType"
              value={bill.buyType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
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
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}

export default EditBuyBillForm;
