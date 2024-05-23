import { useEffect, useState } from "react";
import ClientList from "./ClientList";
import api from "../../api/api";

function ClientListContainer() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await api.get("/client/company");
        setClients(response.data);
      } catch (error) {
        console.log("Error Feching Clients", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <>
      <ClientList clients={clients} />
    </>
  );
}

export default ClientListContainer;
