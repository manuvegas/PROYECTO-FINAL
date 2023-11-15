import React from 'react'
import  airfoce from "../../assets/img/airforce.jpeg";
import  retro from "../../assets/img/retro.jpeg";
import  airmax from "../../assets/img/airmax.jpeg";
import jordan  from "../../assets/img/jordan.jpeg";
import "./Zapas.css"
import "animate.css/animate.min.css"

const Zapas = () => {
  return (
    <nav className="zapatillas animate__animated animate__slideInUp">
      <div className="card container p-1">
        <img src={airfoce} className="card-img-top rounded" alt="remera_nike"/>
        <div className="card-body">
          <h3 className="card-title fs-1">AIR-FORCE</h3>
          <p className="card-text">Talles del 38 al 44</p>
          <span>$60.700</span>
          <a href="#" className="btn">COMPRAR</a>
          <a href="#" className='btn'> AGREGAR AL CARRITO</a>
        </div>
      </div>
      <div className="card container p-1" >
        <img src={retro} className="card-img-top rounded" alt="remera_nike"/>
        <div className="card-body">
          <h3 className="card-title fs-1">RETRO-JORDAN</h3>
          <p className="card-text">Talles del 38 al 44</p>
          <span>$105.890</span>
          <a href="#" className="btn">COMPRAR</a>
          <a href="#" className='btn'> AGREGAR AL CARRITO</a>
        </div>
      </div>
      <div className="card container p-1" >
        <img src={airmax} className="card-img-top rounded" alt="remera_nike"/>
        <div className="card-body">
          <h3 className="card-title fs-1">AIR-MAX</h3>
          <p className="card-text">Talles del 38 al 44 </p>
          <span>$88.800</span>
          <a href="#" className="btn">COMPRAR</a>
          <a href="#" className='btn'> AGREGAR AL CARRITO</a>
        </div>
      </div>
      <div className="card container p-1">
        <img src={jordan} className="card-img-top rounded" alt="remera_nike"/>
        <div className="card-body">
          <h3 className="card-title fs-1">JORDAN</h3>
          <p className="card-text">Talles del 38 al 44</p>
          <span>90.990</span>
          <a href="#" className="btn">COMPRAR</a>
          <a href="#" className='btn'> AGREGAR AL CARRITO</a>
        </div>
      </div>
    </nav>

  )
}

export default Zapas