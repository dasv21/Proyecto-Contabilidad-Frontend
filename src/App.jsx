import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import ClientListContainer from "./components/ClientListContainer";
import ClientDetailsContainer from "./components/ClientDetailsContainer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container mx-auto p-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<ClientListContainer />} />
            <Route path="/clients/:id" element={<ClientDetailsContainer />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
