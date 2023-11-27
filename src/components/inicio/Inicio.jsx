import React from "react";
import Remeras from "../categoriasPrincipales/Remeras";
import Zapas from "../zapas/Zapas";
import Posts from "../carousel/Posts";

function Inicio () {
  return (
    <main>
      <section>
        <nav>
          <h2 className="animate__animated animate__slideInUp">
            CATEGORIAS PRINCIPALES
          </h2>
          <Remeras/>
        </nav>
      </section>
      {/*  <Posts/>*/}
      <section>
        <nav>
          <h2 className="animate__animated animate__slideInUp">ZAPATILLAS</h2>
        </nav>
        <Zapas />
      </section>
    </main>
  );
};

export default Inicio;
