import React from 'react'
import "./Remeras.css";
import PropTypes from "prop-types";


function Remera({titulo,img,texto,precio}) {
  return (
    <div className="card container p-1">
        <img src={img} className="card-img-top rounded" alt={titulo}/>
        <div className="card-body">
            <h3 className="card-title fs-1">{titulo}</h3>
            <p className="card-text">{texto}</p>
            <span>{precio}</span>
            <a href="#" className="btn">COMPRAR</a>
            <a href="#" className='btn'> AGREGAR AL CARRITO</a>
        </div>
    </div>
  )
}

Remera.propTypes = {
  titulo:PropTypes.string.isRequired,
  img:PropTypes.string,
  texto:PropTypes.string

}
export default Remera