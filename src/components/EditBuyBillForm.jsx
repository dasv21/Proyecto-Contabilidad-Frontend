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
      navigate(`/client/${id}/buy-bill/${billId}`);
    } catch (error) {
      console.log("Error updating bill", error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="heading">Editar Factura de Compra</h1>
      <div className="grid-box">
        <div>
          <strong>Numero de Factura</strong>
          <input
            type="text"
            name="numBill"
            value={bill.numBill}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Número de Control</strong>
          <input
            type="text"
            name="numControl"
            value={bill.numControl}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Proveedor</strong>
          <input
            type="text"
            name="nameProvider"
            value={bill.nameProvider}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>RIF del Proveedor</strong>
          <input
            type="text"
            name="rifProvider"
            value={bill.rifProvider}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Fecha de Creación</strong>
          <input
            type="date"
            name="dateCreatedOn"
            value={bill.dateCreatedOn}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Fecha de Aplicacion</strong>
          <input
            type="date"
            name="dateApplicationOn"
            value={bill.dateApplicationOn}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Observacion</strong>
          <input
            type="text"
            name="observation"
            value={bill.observation}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Tipo de Transacción</strong>
          <input
            type="text"
            name="transactionType"
            value={bill.transactionType}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Monto Exento</strong>
          <input
            type="text"
            name="exemptAmount"
            value={bill.exemptAmount}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Monto IVA</strong>
          <input
            type="text"
            name="ivaAmount"
            value={bill.ivaAmount}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Total de Compra</strong>
          <input
            type="text"
            name="totalBuy"
            value={bill.totalBuy}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Impuesto Especial</strong>
          <input
            type="text"
            name="taxEspecial"
            value={bill.taxEspecial}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Tipo de Compra</strong>
          <input
            type="text"
            name="buyType"
            value={bill.buyType}
            onChange={handleInputChange}
            className="input"
          />
        </div>
      </div>
      <div className="flex-box">
        <Link to={`/client/${id}/buy-bill`} className="button">
          Volver
        </Link>
        <button type="submit" className="button">
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}

export default EditBuyBillForm;
