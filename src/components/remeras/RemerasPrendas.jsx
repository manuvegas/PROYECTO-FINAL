import React from 'react'
import "./RemerasPrendas.css";
import airJordanRemera from "../../assets/img(remeras)/airJordan.jpeg";
import estampadaClasicaRemera from "../../assets/img(remeras)/estampada clasica.jpeg";
import jordanEstampadaRemera from "../../assets/img(remeras)/jordan estampada.jpeg";
import nikeAirRemera from "../../assets/img(remeras)/nike air.jpeg";
import nikeClasicaRemera from "../../assets/img(remeras)/nike clasica.jpeg";
import nikeNbaRemera from "../../assets/img(remeras)/nike nba.jpeg";
import remeraLisaRemera from "../../assets/img(remeras)/remera lisa.jpeg";
import remeraOversideRemera from "../../assets/img(remeras)/remera overside.jpeg";
import RemeraPrenda from "./RemeraPrenda";

const remerasPrendas = [
  {
    id: 9,
    titulo: "AIR-JORDAN",
    img: airJordanRemera,
    precio: "$20.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 10,
    titulo: "ESTAMPADA CLASSIC",
    img: estampadaClasicaRemera,
    precio: "$15.890",
    texto: "Talles del S al XXL",
  },
  {
    id: 11,
    titulo: "JORDAN ESTAMPADA",
    img: jordanEstampadaRemera,
    precio: "$17.590",
    texto: "Talles del S al XXL",
  },
  {
    id: 12,
    titulo: "NIKE-AIR",
    img: nikeAirRemera,
    precio: "$19.990",
    texto: "Talles del S al XXL",
  },
  {
    id: 13,
    titulo: "NIKE CLASSIC",
    img: nikeClasicaRemera,
    precio: "$21.999",
    texto: "Talles del S al XXL",
  },
  {
    id: 14,
    titulo: "NIKE-NBA",
    img: nikeNbaRemera,
    precio: "$16.890",
    texto: "Talles del S al XXL",
  },
  {
    id: 15,
    titulo: "REMERA LISA",
    img: remeraLisaRemera,
    precio: "$13.990",
    texto: "Talles del S al XXL",
  },
  {
    id: 16,
    titulo: "REMERA OVERSIDE",
    img: remeraOversideRemera,
    precio: "$17.990",
    texto: "Talles del S al XXL",
  },
];

const RemerasPrendas = () => {
  return (
    <nav className="prendas animate__animated animate__slideInUp">
      {remerasPrendas.map((item) => (
        <RemeraPrenda
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
export default RemerasPrendas