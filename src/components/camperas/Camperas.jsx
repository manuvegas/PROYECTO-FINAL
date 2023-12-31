import React from "react";
import "./Camperas.css"
import bordandoNike from "../../assets/img(camperas)/bordado nike.jpeg";
import camperaFriza from "../../assets/img(camperas)/campera friza nike.jpeg";
import clasicaNike from "../../assets/img(camperas)/classic nike.jpeg";
import jordanNike from "../../assets/img(camperas)/Jordan nike.jpeg";
import nikeAir from "../../assets/img(camperas)/nike air.jpeg";
import nikeJacket from "../../assets/img(camperas)/nike jacket.jpeg";
import  Campera from "./Campera";

const camperas = [
  {
    id: 17,
    titulo: "NIKE-BORD",
    img: bordandoNike,
    precio: "$26.790",
    texto: "Talles del S al XXL",
  },
  {
    id: 18,
    titulo: "CAMPERA-FRIZA",
    img: camperaFriza,
    precio: "$22.890",
    texto: "Talles del S al XXL",
  },
  {
    id: 19,
    titulo: "CLASSIC-NIKE",
    img: clasicaNike,
    precio: "$24.000",
    texto: "Talles del S al XXL",
  },
  {
    id: 20,
    titulo: "JORDAN-NIKE",
    img: jordanNike,
    precio: "$26.500",
    texto: "Talles del S al XXL",
  },
  {
    id: 21,
    titulo: "NIKE-AIR",
    img: nikeAir,
    precio: "$18.990",
    texto: "Talles del S al XXL",
  },
  {
    id: 22,
    titulo: "NIKE-FRIZADO",
    img: nikeJacket,
    precio: "$47.999",
    texto: "Talles del S al XXL",
  },
];

const Camperas = () => {
  return (
    <nav className="prendas animate__animated animate__slideInUp">
      {camperas.map((item, index) => (
        <Campera
          id={item.id}
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

export default Camperas;
