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
import Remeras from "../categoriasPrincipales/Remeras";
import Zapas from "../zapas/Zapas";
import Carrusel from "../carousel/Carousel";
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
            </Routes>
          </div>
          <main>
            <section>
              <nav>
                <h2 className="animate__animated animate__slideInUp">
                  CATEGORIAS PRINCIPALES
                </h2>
                <Remeras />
              </nav>
            </section>
            <Carrusel />
            <section>
              <nav>
                <h2 className="animate__animated animate__slideInUp">
                  ZAPATILLAS
                </h2>
              </nav>
              <Zapas />
            </section>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
