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
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-heading">Agregar Nueva Factura de Compra</h1>
      <div className="form-grid">
        <div>
          <label className="form-label">Número de Factura</label>
          <input
            type="text"
            name="numBill"
            placeholder="Número de Factura"
            value={formData.numBill}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Número de Control</label>
          <input
            type="text"
            name="numControl"
            placeholder="Número de Control"
            value={formData.numControl}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Nombre del Proveedor</label>
          <input
            type="text"
            name="nameProvider"
            placeholder="Nombre del Proveedor"
            value={formData.nameProvider}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">RIF del Proveedor</label>
          <input
            type="text"
            name="rifProvider"
            placeholder="RIF del Proveedor"
            value={formData.rifProvider}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Fecha de Creación</label>
          <input
            type="date"
            name="dateCreatedOn"
            placeholder="Fecha de Creación"
            value={formData.dateCreatedOn}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Fecha de Aplicación</label>
          <input
            type="date"
            name="dateApplicationOn"
            placeholder="Fecha de Aplicación"
            value={formData.dateApplicationOn}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Tipo de Compra</label>
          <input
            type="text"
            name="buyType"
            placeholder="Tipo de Compra"
            value={formData.buyType}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Tipo de Transacción</label>
          <input
            type="text"
            name="transactionType"
            placeholder="Tipo de Transacción"
            value={formData.transactionType}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Monto Exento</label>
          <input
            type="number"
            name="exemptAmount"
            placeholder="Monto Exento"
            value={formData.exemptAmount}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Monto IVA</label>
          <input
            type="number"
            name="ivaAmount"
            placeholder="Monto IVA"
            value={formData.ivaAmount}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Total de Compra</label>
          <input
            type="number"
            name="totalBuy"
            placeholder="Total de Compra"
            value={formData.totalBuy}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Impuesto Especial</label>
          <input
            type="number"
            name="taxEspecial"
            placeholder="Impuesto Especial"
            value={formData.taxEspecial}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Observación</label>
          <input
            type="text"
            name="observation"
            placeholder="Observación"
            value={formData.observation}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="box-button">
        <Link to={`/clients/${id}/buy-bill`} className="button">
          Volver
        </Link>
        <button type="submit" className="button">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default CreateBuyBillForm;
