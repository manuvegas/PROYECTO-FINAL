import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="section_inicio animate__animated animate__slideInLeft">
      <div className="contenedor_inicio">
        <div className="inicio">
          <form action="">
            <h2 className="h2_inicio">CREAR CUENTA</h2>
            <div className="form-floating mb-3 datos">
              <input
                type="nombre"
                className="form-control"
                id="nombre"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating mb-3 datos">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3 datos">
              <input
                type="telefono"
                className="form-control"
                id="telefono"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Telefono(Opcional)</label>
            </div>
            <div className="form-floating mb-3 datos">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
               
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3 datos">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingInput">Confirmar Password</label>
            </div>
            <button>
              <Link className="boton_sesion" to="/inicio">
                CREAR CUENTA
              </Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
