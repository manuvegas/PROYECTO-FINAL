import React from 'react'
import "./RemerasPrendas.css";
import airJordan from "../../assets/img(remeras)/airJordan.jpeg";
import estampadaClasica from "../../assets/img(remeras)/estampada clasica.jpeg";
import jordanEstampada from "../../assets/img(remeras)/jordan estampada.jpeg";
import nikeAir from "../../assets/img(remeras)/nike air.jpeg";
import nikeClasica from "../../assets/img(remeras)/nike clasica.jpeg";
import nikeNba from "../../assets/img(remeras)/nike nba.jpeg";
import remeraLisa from "../../assets/img(remeras)/remera lisa.jpeg";
import remeraOverside from "../../assets/img(remeras)/remera overside.jpeg";
import RemeraPrenda from "./RemeraPrenda";

const remerasPrendas = [
  {
    id: 1,
    titulo: "AIR-JORDAN",
    img: airJordan,
    precio: "$20.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 2,
    titulo: "ESTAMPADA CLASSIC",
    img: estampadaClasica,
    precio: "$15.890",
    texto: "Talles del S al XXL",
  },
  {
    id: 3,
    tittulo: "JORDAN ESTAMPADA",
    img: jordanEstampada,
    precio: "$17.590",
    texto: "Talles del S al XXL",
  },
  {
    id: 4,
    titulo: "NIKE-AIR",
    img: nikeAir,
    precio: "$19.990",
    texto: "Talles del S al XXL",
  },
  {
    id: 5,
    titulo: "NIKE CLASSIC",
    img: nikeClasica,
    precio: "$21.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 6,
    titulo: "NIKE-NBA",
    img: nikeNba,
    precio: "$16.890",
    texto: "Talles del S al XXL",
  },
  {
    id: 7,
    tittulo: "REMERA LISA",
    img: remeraLisa,
    precio: "$13.990",
    texto: "Talles del S al XXL",
  },
  {
    id: 8,
    titulo: "REMERA OVERSIDE",
    img: remeraOverside,
    precio: "$17.990",
    texto: "Talles del S al XXL",
  },
];

const RemerasPrendas = () => {
  return (
    <nav className="prendas animate__animated animate__slideInUp">
      {remerasPrendas.map((item, index) => (
        <RemeraPrenda
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
export default RemerasPrendas