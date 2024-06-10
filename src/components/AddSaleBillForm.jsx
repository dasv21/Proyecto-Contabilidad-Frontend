import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function AddSaleBillForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numBill: "",
    numControl: "",
    nameConsumer: "",
    rifConsumer: "",
    dateCreatedOn: "",
    dateApplicationOn: "",
    saleType: "",
    transactionType: "",
    exemptAmount: "",
    ivaAmount: "",
    totalSale: "",
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
      await api.post("/bill/sale-bill", formData);
      alert("Factura creada exitosamente");
      navigate(`/client/${id}/sale-bill`);
    } catch (error) {
      console.error("Error creando factura", error);
      alert("Hubo un error al crear la factura");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="heading">Agregar Nueva Factura de Venta</h1>
      <div className="grid-box">
        <div>
          <strong>Número de Factura: </strong>
          <input
            type="text"
            name="numBill"
            placeholder="Número de Factura"
            value={formData.numBill}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Número de Control: </strong>
          <input
            type="text"
            name="numControl"
            placeholder="Número de Control"
            value={formData.numControl}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Nombre del Consumidor: </strong>
          <input
            type="text"
            name="nameConsumer"
            placeholder="Nombre del Consumidor"
            value={formData.nameConsumer}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>RIF del Consumidor: </strong>
          <input
            type="text"
            name="rifConsumer"
            placeholder="RIF del Consumidor"
            value={formData.rifConsumer}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Tipo de Transacción: </strong>
          <input
            type="text"
            name="transactionType"
            placeholder="Tipo de Transacción"
            value={formData.transactionType}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Tipo de Venta: </strong>
          <input
            type="text"
            name="saleType"
            placeholder="Tipo de Venta"
            value={formData.saleType}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Fecha de Creación: </strong>
          <input
            type="date"
            name="dateCreatedOn"
            placeholder="Fecha de Creación"
            value={formData.dateCreatedOn}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Fecha de Aplicación: </strong>
          <input
            type="date"
            name="dateApplicationOn"
            placeholder="Fecha de Aplicación"
            value={formData.dateApplicationOn}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Monto Exento: </strong>
          <input
            type="number"
            name="exemptAmount"
            placeholder="Monto Exento"
            value={formData.exemptAmount}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Monto IVA: </strong>
          <input
            type="number"
            name="ivaAmount"
            placeholder="Monto IVA"
            value={formData.ivaAmount}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Total de Venta: </strong>
          <input
            type="number"
            name="totalSale"
            placeholder="Total de Venta"
            value={formData.totalSale}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <strong>Observación: </strong>
          <input
            type="text"
            name="observation"
            placeholder="Observación"
            value={formData.observation}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>
      <div className="flex-box">
        <Link to={`/client/${id}/sale-bill`} className="button">
          Volver
        </Link>
        <button type="submit" className="button">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default AddSaleBillForm;
