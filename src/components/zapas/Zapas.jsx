import React from "react";
import airfoce from "../../assets/img/airforce.jpeg";
import retro from "../../assets/img/retro.jpeg";
import airmax from "../../assets/img/airmax.jpeg";
import jordan from "../../assets/img/jordan.jpeg";
import Zapa from "./Zapa";
import "./Zapas.css";
import "animate.css/animate.min.css";

const zapas = [
  {
    id: 1,
    titulo: "AIR-FORCE",
    img: airfoce,
    precio: "$60.700",
    texto: "Talles del 38 al 44",
  },
  {
    id: 2,
    titulo: "RETRO-JORDAN",
    img: retro,
    precio: "$105.890",
    texto: "Talles del 38 al 44",
  },
  {
    id: 3,
    tittulo: "AIR-MAX",
    img: airmax,
    precio: "$88.800",
    texto: "Talles del 38 al 44",
  },
  {
    id: 4,
    titulo: "JORDAN",
    img: jordan,
    precio: "$90.990",
    texto: "Talles del 38 al 44",
  },
];

const Zapas = () => {
  return (
    <nav className="zapatillas animate__animated animate__slideInUp">
      {zapas.map((item, index) => (
        <Zapa
          titulo={item.titulo}
          img={item.img}
          texto={item.texto}
          precio={item.precio}
          key={index}
        />
      ))}
    </nav>
  );
};

export default Zapas;
