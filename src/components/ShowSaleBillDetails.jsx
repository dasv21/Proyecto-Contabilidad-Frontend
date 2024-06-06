import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function ShowSaleBillDetails() {
  const { id, billId } = useParams();
  const [bill, setBill] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getBillDetails = async () => {
      try {
        const response = await api.get(`/bill/sale-bill/${billId}`);
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
        await api.delete(`/bill/sale-bill/${billId}`);
        navigate(`/client/${id}/sale-bill`);
      } catch (error) {
        console.log("Error deleting bill", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="flex-box">
        <h1 className="heading">Factura de Venta: {bill.numBill}</h1>
        <Link
          to={`/client/${id}/sale-bill/${billId}/edit`}
          className="button-edit"
        >
          Editar
        </Link>
      </div>
      <div className="grid-box">
        <div>
          <strong>Número de Control: </strong>
          {bill.numControl}
        </div>
        <div>
          <strong>Consumidor: </strong>
          {bill.nameConsumer}
        </div>
        <div>
          <strong>RIF del Consumidor: </strong>
          {bill.rifConsumer}
        </div>
        <div>
          <strong>Fecha de Creación: </strong>
          {new Date(bill.dateCreatedOn).toLocaleDateString()}
        </div>
        <div>
          <strong>Fecha de Aplicación: </strong>
          {new Date(bill.dateApplicationOn).toLocaleDateString()}
        </div>
        <div>
          <strong>Creado en: </strong>
          {new Date(bill.createOn).toLocaleString()}
        </div>
        <div>
          <strong>Actualizado en: </strong>
          {new Date(bill.updateOn).toLocaleString()}
        </div>
        <div>
          <strong>Tipo de Transacción: </strong>
          {bill.transactionType}
        </div>
        <div>
          <strong>Monto Exento: </strong>
          {bill.exemptAmount}
        </div>
        <div>
          <strong>Monto IVA: </strong>
          {bill.ivaAmount}
        </div>
        <div>
          <strong>Total de Venta: </strong>
          {bill.totalSale}
        </div>
        <div>
          <strong>Tipo de Venta: </strong>
          {bill.saleType}
        </div>
        <div>
          <strong>Observación: </strong>
          {bill.observation}
        </div>
      </div>
      <div className="flex-box">
        <Link to={`/client/${id}/buy-bill`} className="button">
          Volver
        </Link>
        <button onClick={handleDelete} className="button-delete">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ShowSaleBillDetails;
