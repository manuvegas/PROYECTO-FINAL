import React from "react";
import estampadoNike from "../../assets/img(buzos)/estampado nike.jpeg";
import jordanEstampada from "../../assets/img(buzos)/jordan estampada air.jpeg";
import jordanNike from "../../assets/img(buzos)/jordan nike.jpeg";
import jordanOverside from "../../assets/img(buzos)/jordan overside.jpeg";
import nikeAirColors from "../../assets/img(buzos)/nike air colors.jpeg";
import nikeAir from "../../assets/img(buzos)/nike air.jpeg";
import nikeClasicaEstampado from "../../assets/img(buzos)/nike classic estampado.jpeg";
import nikeClasica from "../../assets/img(buzos)/nike classic.jpeg";
import Buzo from "./Buzo"
import "./Buzos.css"

const buzos = [
  {
    id: 1,
    titulo: "ESTAMPADO-NIKE",
    img: estampadoNike,
    precio: "$20.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 2,
    titulo: "JORDAN-ESTAMP-AIR",
    img: jordanEstampada,
    precio: "$23.890",
    texto: "Talles del S al XXL",
  },
  {
    id: 3,
    tittulo: "JORDAN-NIKE",
    img: jordanNike,
    precio: "$28.990",
    texto: "Talles del S al XXL",
  },
  {
    id: 4,
    titulo: "JORDAN-OVERSIDE",
    img: jordanOverside,
    precio: "$34.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 5,
    titulo: "NIKE-AIR-COLORS",
    img: nikeAirColors,
    precio: "$21.600",
    texto: "Talles del S al XXL",
  },
  {
    id: 6,
    titulo: "NIKE-AIR",
    img: nikeAir,
    precio: "$19.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 7,
    tittulo: "NIKE-CLASSIC-ESTAMP",
    img: nikeClasicaEstampado,
    precio: "$18.990",
    texto: "Talles del S al XXL",
  },
  {
    id: 8,
    titulo: "NIKE-CLASSIC",
    img: nikeClasica,
    precio: "$27.890",
    texto: "Talles del S al XXL",
  },
];
const Buzos = () => {
  return (
    <nav className="prendas animate__animated animate__slideInUp">
      {buzos.map((item, index) => (
        <Buzo
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

export default Buzos;
