import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Form from "./components/formulario/Form";
import Login from "./components/login/Login";
import Cambios from "./components/cambios/Cambios";
import Envios from "./components/envios/Envios";
import RemerasPrendas from "./components/remeras/RemerasPrendas";
import Buzos from "./components/buzos/Buzos";
import Joggins from "./components/joggins/Joggins";
import Camperas from "./components/camperas/Camperas";
import "animate.css/animate.min.css";
import Inicio from "./components/inicio/inicio";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/formulario" element={<Form />} />
              <Route path="/cambios" element={<Cambios />} />
              <Route path="/envios" element={<Envios />} />
              <Route path="/remeras" element={<RemerasPrendas />} />
              <Route path="/buzos" element={<Buzos />} />
              <Route path="/camperas" element={<Camperas />} />
              <Route path="/joggins" element={<Joggins />} />
              <Route path="/inicio" element={< Inicio/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
