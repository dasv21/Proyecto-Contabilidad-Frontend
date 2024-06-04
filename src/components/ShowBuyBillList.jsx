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
      <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Facturas de Compras</h1>
          <p>
            <strong>Nombre Legal:</strong> {clientDetails.companyLegalName}
          </p>
          <p>
            <strong>RIF:</strong> {clientDetails.companyRif}
          </p>
          <p>
            <Link
              to={`/clients/${id}/buy-bill/add`}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
            >
              Agregar Factura
            </Link>
          </p>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Num. Factura
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Num. Control
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Proveedor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                RIF Proveedor
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {buyBills.map((bill) => (
              <tr key={bill.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{bill.numBill}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{bill.numControl}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {bill.nameProvider}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {bill.rifProvider}
                  </div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <Link
                    to={`/clients/${id}/buy-bill/${bill.id}`}
                    className="px-2 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                  >
                    ...
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <Link
            to={`/clients/${id}`}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowBuyBill;
