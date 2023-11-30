import React from 'react'
import Joggin from "./Joggin"
import classicNike from "../../assets/img(joggins)/classic nike.jpeg";
import estampadoNike from "../../assets/img(joggins)/estampado nike.jpeg";
import jogginJordan from "../../assets/img(joggins)/joggin jordan.jpeg";
import nikeCargo from "../../assets/img(joggins)/nike cargo.jpeg";
import nikeFrizada from "../../assets/img(joggins)/nike frizada.jpeg";
import "./Joggins.css"

const joggins = [
  {
    id: 31,
    titulo: "CLASSI NIKE",
    img: classicNike,
    precio: "$36.590",
    texto: "Talles del S al XXL",
  },
  {
    id: 32,
    titulo: "ESTAMP-NIKE",
    img: estampadoNike,
    precio: "$26.890",
    texto: "Talles del S al XXL",
  },
  {
    id: 33,
    titulo: "JOGGIN-JORDAN",
    img: jogginJordan,
    precio: "$33.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 34,
    titulo: "NIKE-CARGO",
    img: nikeCargo,
    precio: "$38.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 35,
    titulo: "NIKE-FRIZADO",
    img: nikeFrizada,
    precio: "$17.990",
    texto: "Talles del S al XXL",
  }
];

const Joggins = () => {
  return (
    <nav className="prendas animate__animated animate__slideInUp">
      {joggins.map((item) => (
        <Joggin
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

export default Joggins;