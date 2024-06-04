import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function ShowBuyBillDetails() {
  const { id, billId } = useParams();
  const [bill, setBill] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getBillDetails = async () => {
      try {
        const response = await api.get(`/bill/buy-bill/${billId}`);
        setBill(response.data);
      } catch (error) {
        console.log("Error Fetching Bill", error);
      }
    };

    getBillDetails();
  }, [billId]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "¿Está seguro que desea eliminar esta factura?"
    );
    if (confirmed) {
      try {
        await api.delete(`/bill/buy-bill/${billId}`);
        navigate(`/clients/${id}/buy-bill`);
      } catch (error) {
        console.log("Error deleting bill", error);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Factura de Compra: {bill.numBill}
        </h1>
        <div className="flex space-x-2">
          <Link
            to={`/clients/${id}/buy-bill/${billId}/edit`}
            className="px-2 py-1 bg-gray-500 text-white font-semibold rounded hover:bg-yellow-600"
          >
            Editar
          </Link>
          <button
            onClick={handleDelete}
            className="px-2 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p>
            <strong>Número de Control:</strong> {bill.numControl}
          </p>
          <p>
            <strong>Proveedor:</strong> {bill.nameProvider}
          </p>
          <p>
            <strong>RIF del Proveedor:</strong> {bill.rifProvider}
          </p>
          <p>
            <strong>Fecha de Creación:</strong>{" "}
            {new Date(bill.dateCreatedOn).toLocaleDateString()}
          </p>
          <p>
            <strong>Fecha de Aplicación:</strong>{" "}
            {new Date(bill.dateApplicationOn).toLocaleDateString()}
          </p>
          <p>
            <strong>Creado en:</strong>{" "}
            {new Date(bill.createOn).toLocaleString()}
          </p>
          <p>
            <strong>Actualizado en:</strong>{" "}
            {new Date(bill.updateOn).toLocaleString()}
          </p>
        </div>
        <div>
          <p>
            <strong>Tipo de Transacción:</strong> {bill.transactionType}
          </p>
          <p>
            <strong>Monto Exento:</strong> {bill.exemptAmount}
          </p>
          <p>
            <strong>Monto IVA:</strong> {bill.ivaAmount}
          </p>
          <p>
            <strong>Total de Compra:</strong> {bill.totalBuy}
          </p>
          <p>
            <strong>Impuesto Especial:</strong> {bill.taxEspecial}
          </p>
          <p>
            <strong>Tipo de Compra:</strong> {bill.buyType}
          </p>
        </div>
        <div className="mb-4 col-span-2">
          <strong>Observación:</strong> {bill.observation}
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <Link
          to={`/clients/${id}/buy-bill`}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Volver
        </Link>
      </div>
    </div>
  );
}

export default ShowBuyBillDetails;
