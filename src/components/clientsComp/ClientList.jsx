import PropTypes from "prop-types";
import Client from "./Client";
import { clientPropType } from "../../utils/prop-types-defs";

function ClientList({ clients }) {
  return (
    <div className="container">
      <div className="products">
        {clients.map((client) => (
          <Client key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}

ClientList.propTypes = {
  clients: PropTypes.arrayOf(clientPropType),
};

export default ClientList;
