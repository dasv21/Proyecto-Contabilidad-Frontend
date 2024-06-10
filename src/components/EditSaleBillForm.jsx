import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/api";

function EditSaleBillForm() {
  const { id, billId } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState({
    id: "",
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
  });

  useEffect(() => {
    const getBillDetails = async () => {
      try {
        const response = await api.get(`/bill/sale-bill/${billId}`);
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
      await api.put(`/bill/sale-bill`, bill);
      navigate(`/client/${id}/sale-bill/${billId}`);
    } catch (error) {
      console.log("Error updating bill", error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="heading">Editar Factura de Venta</h1>
      <div className="grid-box">
        <div>
          <strong>Numero de Factura: </strong>
          <input
            type="text"
            name="numBill"
            value={bill.numBill}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Número de Control: </strong>
          <input
            type="text"
            name="numControl"
            value={bill.numControl}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Nombre del Consumidor: </strong>
          <input
            type="text"
            name="nameConsumer"
            value={bill.nameConsumer}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>RIF del Consumidor: </strong>
          <input
            type="text"
            name="rifConsumer"
            value={bill.rifConsumer}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Tipo de Transacción: </strong>
          <input
            type="text"
            name="transactionType"
            value={bill.transactionType}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Tipo de Venta: </strong>
          <input
            type="text"
            name="saleType"
            value={bill.saleType}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Fecha de Creación: </strong>
          <input
            type="date"
            name="dateCreatedOn"
            value={bill.dateCreatedOn}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Fecha de Aplicacion: </strong>
          <input
            type="date"
            name="dateApplicationOn"
            value={bill.dateApplicationOn}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Monto Exento: </strong>
          <input
            type="text"
            name="exemptAmount"
            value={bill.exemptAmount}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Monto IVA: </strong>
          <input
            type="text"
            name="ivaAmount"
            value={bill.ivaAmount}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Total de Venta: </strong>
          <input
            type="text"
            name="totalSale"
            value={bill.totalSale}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div>
          <strong>Observacion: </strong>
          <input
            type="text"
            name="observation"
            value={bill.observation}
            onChange={handleInputChange}
            className="input"
          />
        </div>
      </div>
      <div className="flex-box">
        <Link to={`/client/${id}/sale-bill/${billId}`} className="button">
          Volver
        </Link>
        <button type="submit" className="button">
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}

export default EditSaleBillForm;
