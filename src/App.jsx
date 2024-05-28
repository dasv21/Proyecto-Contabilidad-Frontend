import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import ShowClientList from "./components/ShowClientList";
import ShowClientDetails from "./components/ShowClientDetails";
import AddClientForm from "./components/AddClientForm";
import EditClientForm from "./components/EditClientForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ShowClientList />} />
        <Route path="/clients/add" element={<AddClientForm />} />
        <Route path="/clients/:id/edit" element={<EditClientForm />} />
        <Route path="/clients/:id" element={<ShowClientDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
