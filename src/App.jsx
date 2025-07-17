import { Route, Routes } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import "./styles/main.scss";
import Dashboard from "./pages/Dashboard";
import ClientManagement from "./pages/ClientManagement";

function App() {
  return (
    <>
      <Sidenav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<ClientManagement />} />
      </Routes>
    </>
  );
}

export default App;
