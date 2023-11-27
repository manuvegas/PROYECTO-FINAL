import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="section_inicio animate__animated animate__slideInLeft">
      <div className="contenedor_inicio">
        <div className="inicio">
          <form action="">
            <h2 className="h2_inicio">INICIO</h2>
            <div className="form-floating mb-3 datos">
              <input
                variant=""
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating datos">
              <input
                variant=""
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button>
              <Link className="boton_sesion" to="/inicio">
                Iniciar sesion
              </Link>
            </button>
            <div className="registrarse">
              <p>
                Si no tenes una cuenta <Link to="/">Registrarse</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
