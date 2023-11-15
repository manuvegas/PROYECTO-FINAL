import "./App.css";
import Carrusel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Remeras from "./components/remeras/Remeras";
import Zapas from "./components/zapas/Zapas";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="" element={<login/>}></Route>
              <Route path="" element={<inicio/>}></Route>
              <Route path="" element={<contactos/>}></Route>
              <Route path="" element={<cambios/>}></Route>
              <Route path="" element={<envios/>}></Route>
            </Routes>
          </div>
          <main>
            <section>
              <nav>
                <h2 className="animate__animated animate__slideInUp">
                  CATEGORIAS PRINCIPALES{" "}
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
