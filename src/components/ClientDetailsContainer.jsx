import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import ClientDetails from "./ClientDetails";

function ClientDetailsContainer() {
  const [client, setClient] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchClientDetails = async () => {
      try {
        const response = await api.get(`/client/company/${id}`);
        setClient(response.data);
      } catch (error) {
        console.log("Error Feching Clients", error);
      }
    };

    fetchClientDetails();
  }, [id]);
  return (
    <>
      <ClientDetails client={client} />
    </>
  );
}

export default ClientDetailsContainer;
