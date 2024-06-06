import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import ShowClientList from "./components/ShowClientList";
import ShowClientDetails from "./components/ShowClientDetails";
import AddClientForm from "./components/AddClientForm";
import EditClientForm from "./components/EditClientForm";
import ShowBuyBillList from "./components/ShowBuyBillList";
import ShowSaleBillList from "./components/ShowSaleBillList";
import AddBuyBillForm from "./components/AddBuyBillForm";
import ShowBuyBillDetails from "./components/ShowBuyBillDetails";
import EditBuyBillForm from "./components/EditBuyBillForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/** Routes clients */}
        <Route path="/client" element={<ShowClientList />} />
        <Route path="/client/add" element={<AddClientForm />} />
        <Route path="/client/:id/edit" element={<EditClientForm />} />
        <Route path="/client/:id" element={<ShowClientDetails />} />
        {/** Routes buy-bill */}
        <Route path="/client/:id/buy-bill" element={<ShowBuyBillList />} />
        <Route
          path="/client/:id/buy-bill/:billId"
          element={<ShowBuyBillDetails />}
        />
        <Route
          path="/client/:id/buy-bill/:billId/edit"
          element={<EditBuyBillForm />}
        />
        <Route path="/client/:id/buy-bill/add" element={<AddBuyBillForm />} />
        {/** Routes sale-bill */}
        <Route path="/client/:id/sale-bill" element={<ShowSaleBillList />} />
      </Routes>
    </Router>
  );
}

export default App;
