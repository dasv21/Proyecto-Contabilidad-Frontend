import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";

function ShowBuyBill() {
  const [buyBills, setBuyBills] = useState([]);
  const [clientDetails, setClientDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getBuyBills = async () => {
      try {
        const response = await api.get(`/client/company/buy-bill/${id}`);
        setBuyBills(response.data.buyBillDTOList);
        setClientDetails({
          companyLegalName: response.data.companyLegalName,
          companyRif: response.data.companyRif,
        });
      } catch (error) {
        console.log("Error Getting buy bills", error);
      }
    };

    getBuyBills();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="flex-box">
          <h1 className="form-heading">Facturas de Compras</h1>
          <Link to={`/clients/${id}/buy-bill/add`} className="button-add">
            Agregar Factura
          </Link>
        </div>
        <p>
          <strong>Nombre Legal:</strong> {clientDetails.companyLegalName}
        </p>
        <p>
          <strong>RIF:</strong> {clientDetails.companyRif}
        </p>
        <table className="table">
          <thead className="table-head">
            <tr>
              <th className="table-th">#</th>
              <th className="table-th">N° FACTURA</th>
              <th className="table-th">N° CONTROL</th>
              <th className="table-th">PROVEEDOR</th>
              <th className="table-th">RIF PROVEEDOR</th>
              <th className="table-th"></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {buyBills.map((bill, i) => (
              <tr key={bill.id}>
                <td className="table-td">{i + 1}</td>
                <td className="table-td">{bill.numBill}</td>
                <td className="table-td">{bill.numControl}</td>
                <td className="table-td">{bill.nameProvider}</td>
                <td className="table-td">{bill.rifProvider}</td>
                <td className="table-td">
                  <Link
                    to={`/clients/${id}/buy-bill/${bill.id}`}
                    className="button-more"
                  >
                    ...
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex-box">
          <Link to={`/clients/${id}`} className="button">
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowBuyBill;
