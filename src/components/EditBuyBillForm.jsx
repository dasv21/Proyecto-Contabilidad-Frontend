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
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-heading">Editar Factura de Compra</h1>
      <div className="form-grid">
        <div>
          <label className="form-label">Numero de Factura</label>
          <input
            type="text"
            name="numBill"
            value={bill.numBill}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Número de Control</label>
          <input
            type="text"
            name="numControl"
            value={bill.numControl}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Proveedor</label>
          <input
            type="text"
            name="nameProvider"
            value={bill.nameProvider}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">RIF del Proveedor</label>
          <input
            type="text"
            name="rifProvider"
            value={bill.rifProvider}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Fecha de Creación</label>
          <input
            type="date"
            name="dateCreatedOn"
            value={bill.dateCreatedOn}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Fecha de Aplicacion</label>
          <input
            type="date"
            name="dateApplicationOn"
            value={bill.dateApplicationOn}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Observacion</label>
          <input
            type="text"
            name="observation"
            value={bill.observation}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Tipo de Transacción</label>
          <input
            type="text"
            name="transactionType"
            value={bill.transactionType}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Monto Exento</label>
          <input
            type="text"
            name="exemptAmount"
            value={bill.exemptAmount}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Monto IVA</label>
          <input
            type="text"
            name="ivaAmount"
            value={bill.ivaAmount}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Total de Compra</label>
          <input
            type="text"
            name="totalBuy"
            value={bill.totalBuy}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Impuesto Especial</label>
          <input
            type="text"
            name="taxEspecial"
            value={bill.taxEspecial}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Tipo de Compra</label>
          <input
            type="text"
            name="buyType"
            value={bill.buyType}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="box-button">
        <Link to={`/clients/${id}/buy-bill`} className="button">
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
