import React from "react";
import "./Camperas.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Campera({ titulo, img, texto, precio,id }) {
  return (
    <div className="card container p-1">
      <img src={img} className="card-img-top rounded" alt={titulo} />
      <div className="card-body">
        <h3 className="card-title fs-1">{titulo}</h3>
        <p className="card-text">{texto}</p>
        <span>{precio}</span>
        <Link to={`/comprasPrincipales/${id}`} className="btn">
          COMPRAR
        </Link>
        <Link to="" className="btn">
          AGREGAR AL CARRITO
        </Link>
      </div>
    </div>
  );
}

Campera.propTypes = {
  titulo: PropTypes.string,
  img: PropTypes.string,
  texto: PropTypes.string,
};
export default Campera;
