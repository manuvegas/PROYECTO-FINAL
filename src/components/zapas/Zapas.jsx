import React from "react";
import airforceZapa from "../../assets/img/airforce.jpeg";
import retroZapa from "../../assets/img/retro.jpeg";
import airmaxZapa from "../../assets/img/airmax.jpeg";
import jordanZapa from "../../assets/img/jordan.jpeg";
import Zapa from "./Zapa";
import "./Zapas.css";
import "animate.css/animate.min.css";

const zapas = [
  {
    id: 5,
    titulo: "AIR-FORCE",
    img: airforceZapa,
    precio: "$60.700",
    texto: "Talles del 38 al 44",
  },
  {
    id: 6,
    titulo: "RETRO-JORDAN",
    img: retroZapa,
    precio: "$105.890",
    texto: "Talles del 38 al 44",
  },
  {
    id: 7,
    titulo: "AIR-MAX",
    img: airmaxZapa,
    precio: "$88.800",
    texto: "Talles del 38 al 44",
  },
  {
    id: 8,
    titulo: "JORDAN",
    img: jordanZapa,
    precio: "$90.990",
    texto: "Talles del 38 al 44",
  },
];

const Zapas = () => {
  return (
    <nav className="zapatillas animate__animated animate__slideInUp">
      {zapas.map((item) => (
        <Zapa
          id={item.id}
          titulo={item.titulo}
          img={item.img}
          texto={item.texto}
          precio={item.precio}
          key={item.id}
        />
      ))}
    </nav>
  );
};

export default Zapas;
