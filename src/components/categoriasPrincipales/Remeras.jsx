import React from "react";
import buzoImg from "../../assets/img/buzo.jpeg";
import jogginImg from "../../assets/img/joggin.jpeg";
import jordanImg from "../../assets/img(remeras)/airJordan.jpeg";
import bermudaImg from "../../assets/img/bermuda.jpeg";
import Remera from "./Remera";
import "./Remeras.css";
import "animate.css/animate.min.css";

const remeras = [
  {
    id: 1,
    titulo: "BUZOS",
    img: buzoImg,
    precio: "$19.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 2,
    titulo: "JOGGIN",
    img: jogginImg,
    precio: "$15.890",
    texto: "Talles del S al XXL",
  },
  {
    id: 3,
    titulo: "REMERA",
    img: jordanImg,
    precio: "$13.990",
    texto: "Talles del S al XXL",
  },
  {
    id: 4,
    titulo: "BERMUDA",
    img: bermudaImg,
    precio: "$17.990",
    texto: "Talles del S al XXL",
  },
];

const Remeras = () => {
  return (
    <nav className="prendas animate__animated animate__slideInUp">
      {remeras.map((item) => (
        <Remera
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

export default Remeras;
