import "./App.css";
import Carrusel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Remeras from "./components/principales/Remeras";
import Zapas from "./components/zapas/Zapas";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Form from "./components/formulario/Form";
import Login from "./components/login/Login";
import Cambios from "./components/cambios/Cambios";
import Envios from "./components/envios/envios";
import RemerasPrendas from "./components/remeras/RemerasPrendas";
import Buzos from "./components/buzos/buzos";
import Joggins from "./components/joggins/joggins";
import Camperas from "./components/camperas/Camperas";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <div>
            <Routes> 
              <Route path="/Login" element={<Login/>}/>
              <Route path="/formulario" element={<Form/>}/>
              <Route path="/cambios" element={<Cambios/>}/>
              <Route path="/envios" element={<Envios/>}/>
              <Route path="/remeras" element={<RemerasPrendas/>}/>
              <Route path="/buzos" element={<Buzos/>}/>
              <Route path="/camperas" element={<Camperas/>}/>
              <Route path="/joggins" element={<Joggins/>}/>
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
                <Zapas />
              </nav>
            </section>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
