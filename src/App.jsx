import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import ClientListContainer from "./components/clientsComp/ClientListContainer";
import ClientDetailsContainer from "./components/clientsComp/ClientDetailsContainer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<ClientListContainer />} />
          <Route path="/clients/:id" element={<ClientDetailsContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
