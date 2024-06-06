import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";

function ShowSaleBillList() {
  const [bills, setBills] = useState([]);
  const [clientDetails, setClientDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getBills = async () => {
      try {
        const response = await api.get(`/client/company/sale-bill/${id}`);
        setBills(response.data.saleBillDTOList);
        setClientDetails({
          companyLegalName: response.data.companyLegalName,
          companyRif: response.data.companyRif,
        });
      } catch (error) {
        console.log("Error Getting sale bills", error);
      }
    };

    getBills();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="flex-box">
          <h1 className="heading">Facturas de Compras</h1>
          <Link to={`/client/${id}/sale-bill/add`} className="button-add">
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
              <th className="table-th">CONSUMIDOR</th>
              <th className="table-th">RIF CONSUMIDOR</th>
              <th className="table-th"></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {bills.map((bill, i) => (
              <tr key={bill.id}>
                <td className="table-td">{i + 1}</td>
                <td className="table-td">{bill.numBill}</td>
                <td className="table-td">{bill.numControl}</td>
                <td className="table-td">{bill.nameConsumer}</td>
                <td className="table-td">{bill.rifConsumer}</td>
                <td className="table-td">
                  <Link
                    to={`/client/${id}/buy-bill/${bill.id}`}
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
          <Link to={`/client/${id}`} className="button">
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowSaleBillList;
