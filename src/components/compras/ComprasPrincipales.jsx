import buzosImg from "../../assets/img/buzo.jpeg";
import jogginsImg from "../../assets/img/joggin.jpeg";
import remerasImg from "../../assets/img(remeras)/airJordan.jpeg";
import bermudasImg from "../../assets/img/bermuda.jpeg";
import airforceZapa from "../../assets/img/airforce.jpeg";
import retroZapa from "../../assets/img/retro.jpeg";
import airmaxZapa from "../../assets/img/airmax.jpeg";
import jordanZapa from "../../assets/img/jordan.jpeg";
import estampadoNike from "../../assets/img(buzos)/estampado nike.jpeg";
import jordanEstampada from "../../assets/img(buzos)/jordan estampada air.jpeg";
import jordanNike from "../../assets/img(buzos)/jordan nike.jpeg";
import jordanOverside from "../../assets/img(buzos)/jordan overside.jpeg";
import nikeAirColors from "../../assets/img(buzos)/nike air colors.jpeg";
import nikeAir from "../../assets/img(buzos)/nike air.jpeg";
import nikeClasicaEstampado from "../../assets/img(buzos)/nike classic estampado.jpeg";
import nikeClasica from "../../assets/img(buzos)/nike classic.jpeg";
import bordandoNike from "../../assets/img(camperas)/bordado nike.jpeg";
import camperaFriza from "../../assets/img(camperas)/campera friza nike.jpeg";
import clasicaNike from "../../assets/img(camperas)/classic nike.jpeg";
import jordanNikeCampera from "../../assets/img(camperas)/Jordan nike.jpeg";
import nikeAirCampera from "../../assets/img(camperas)/nike air.jpeg";
import nikeJacket from "../../assets/img(camperas)/nike jacket.jpeg";
import classicNike from "../../assets/img(joggins)/classic nike.jpeg";
import estampadoNikejoggin from "../../assets/img(joggins)/estampado nike.jpeg";
import jogginJordan from "../../assets/img(joggins)/joggin jordan.jpeg";
import nikeCargo from "../../assets/img(joggins)/nike cargo.jpeg";
import nikeFrizada from "../../assets/img(joggins)/nike frizada.jpeg";
import airJordanRemera from "../../assets/img(remeras)/airJordan.jpeg";
import estampadaClasicaRemera from "../../assets/img(remeras)/estampada clasica.jpeg";
import jordanEstampadaRemera from "../../assets/img(remeras)/jordan estampada.jpeg";
import nikeAirRemera from "../../assets/img(remeras)/nike air.jpeg";
import nikeClasicaRemera from "../../assets/img(remeras)/nike clasica.jpeg";
import nikeNbaRemera from "../../assets/img(remeras)/nike nba.jpeg";
import remeraLisaRemera from "../../assets/img(remeras)/remera lisa.jpeg";
import remeraOversideRemera from "../../assets/img(remeras)/remera overside.jpeg";
import "animate.css/animate.min.css";
import CompraPrincipal from "./CompraPrincipal";
import {useParams} from "react-router-dom";

const cuotas = 3;

const itemsCompra = [
  {
    id: 1,
    prenda: "ESTAMPADO NIKE",
    precio: 19999,
    cuotas: (19999/cuotas).toFixed(2),
    img:  buzosImg ,
  },
  {
    id: 2,
    prenda: "JOGGIN",
    precio: 15890 ,
    cuotas: (15890/cuotas).toFixed(2),
    img:  jogginsImg ,
  },
  {
    id: 3,
    prenda: "AIR-JORDAN",
    precio: 13990,
    cuotas: (13990/cuotas).toFixed(2),
    img:  remerasImg ,
  },
  {
    id: 4,
    prenda: "BERMUDA",
    precio: 17990,
    cuotas: (17990/cuotas).toFixed(2),
    img:  bermudasImg ,
  },
  {
    id: 5,
    prenda: "AIR-FORCE",
    precio: 60700,
    cuotas: (60700/cuotas).toFixed(2),
    img:  airforceZapa ,
  },
  {
    id: 6,
    prenda: "RETRO-JORDAN",
    precio: 105890,
    cuotas: (105890/cuotas).toFixed(2),
    img:  retroZapa ,
  },
  {
    id: 7,
    prenda: "AIR-MAX",
    precio: 88800,
    cuotas:(88800/cuotas).toFixed(2),
    img:  airmaxZapa ,
  },
  {
    id: 8,
    prenda: "JORDAN",
    precio: 90990,
    cuotas: (90990/cuotas).toFixed(2),
    img:  jordanZapa ,
  },
  {
    id: 9,
    prenda: "ESTAMPADO-NIKE",
    precio: 20999,
    cuotas: (20999/cuotas).toFixed(2),
    img:  estampadoNike ,
  },
  {
    id: 10,
    prenda: "JORDAN-ESTAMP-AIR",
    precio: 23890,
    cuotas: (23890/cuotas).toFixed(2),
    img:  jordanEstampada ,
  },
  {
    id: 11,
    prenda: "JORDAN-NIKE",
    precio: 28990,
    cuotas: (28990/cuotas).toFixed(2),
    img:  jordanNike ,
  },
  {
    id: 12,
    prenda: "JORDAN-OVERSIDE",
    precio: 34999,
    cuotas: (34999/cuotas).toFixed(2),
    img:   jordanOverside ,
  },
  {
    id: 13,
    prenda: "NIKE-AIR-COLORS",
    precio: 21.600,
    cuotas: (21.600/cuotas).toFixed(2),
    img:  nikeAirColors ,
  },
  {
    id: 14,
    prenda: "NIKE-AIR",
    precio: 19.999,
    cuotas: (19.999/cuotas).toFixed(2),
    img:  nikeAir ,
  },
  {
    id: 15,
    prenda: "NIKE-CLASSIC-ESTAMP",
    precio: 18.990,
    cuotas: (18.990/cuotas).toFixed(2),
    img:  nikeClasicaEstampado ,
  },
  {
    id: 16,
    prenda: "NIKE-CLASSIC",
    precio: 27.890,
    cuotas: (27.890/cuotas).toFixed(2),
    img:  nikeClasica ,
  },
  {
    id: 17,
    prenda: "NIKE-BORD",
    precio: 26.790,
    cuotas: (26.790/cuotas).toFixed(2),
    img:  bordandoNike ,
  },
  {
    id: 18,
    prenda: "CAMPERA-FRIZA",
    precio: 22.890,
    cuotas: (22.890/cuotas).toFixed(2),
    img:  camperaFriza ,
  },
  {
    id: 19,
    prenda: "CLASSIC-NIKE",
    precio: 24.000,
    cuotas: (24.000/cuotas).toFixed(2),
    img:  clasicaNike ,
  },
  {
    id: 20,
    prenda: "JORDAN-NIKE",
    precio: 26.500,
    cuotas: (26.500/cuotas).toFixed(2),
    img:  jordanNikeCampera,
  },
  {
    id: 21,
    prenda: "NIKE-AIR",
    precio: 18.990,
    cuotas: (18.990/cuotas).toFixed(2),
    img:  nikeAirCampera ,
  },
  {
    id: 22,
    prenda: "NIKE-FRIZADO",
    precio: 47.999,
    cuotas: (47.999/cuotas).toFixed(2),
    img:  nikeJacket,
  },
  {
    id: 23,
    prenda: "CLASSIC NIKE",
    precio: 36.590,
    cuotas: (36.590/cuotas).toFixed(2),
    img:  classicNike ,
  },
  {
    id: 24,
    prenda: "ESTAMP-NIKE",
    precio: 26.890,
    cuotas: (26.890/cuotas).toFixed(2),
    img:  estampadoNikejoggin ,
  },
  {
    id: 25,
    prenda: "JOGGIN-JORDAN",
    precio: 33.999,
    cuotas: (33.999/cuotas).toFixed(2),
    img:  jogginJordan ,
  },
  {
    id: 26,
    prenda: "NIKE-CARGO",
    precio: 38.999,
    cuotas: (38.999/cuotas).toFixed(2),
    img:  nikeCargo ,
  },
  {
    id: 27,
    prenda: "NIKE-FRIZADO",
    precio: 17.990,
    cuotas: (17.990/cuotas).toFixed(2),
    img:  nikeFrizada ,
  },
  {
    id: 28,
    prenda: "AIR-JORDAN",
    precio: 20.999,
    cuotas: (20.999/cuotas).toFixed(2),
    img:  airJordanRemera ,
  },
  {
    id: 29,
    prenda: "ESTAMPADA CLASSIC",
    precio: 15.890,
    cuotas: (15.890/cuotas).toFixed(2),
    img:  estampadaClasicaRemera,
  },
  {
    id: 30,
    prenda: "JORDAN ESTAMPADA",
    precio: 17.590,
    cuotas: (17.590/cuotas).toFixed(2),
    img:  jordanEstampadaRemera,
  },
  {
    id: 31,
    prenda: "NIKE-AIR",
    precio: 19.990,
    cuotas: (19.990/cuotas).toFixed(2),
    img:  nikeAirRemera,
  },
  {
    id: 32,
    prenda: "NIKE CLASSIC",
    precio: 21.999,
    cuotas: (21.999/cuotas).toFixed(2),
    img:  nikeClasicaRemera ,
  },
  {
    id: 33,
    prenda: "NIKE-NBA",
    precio: 16.890,
    cuotas: (16.890/cuotas).toFixed(2),
    img:  nikeNbaRemera ,
  },
  {
    id: 34,
    prenda: "REMERA LISA",
    precio: 13.990,
    cuotas: (13.990/cuotas).toFixed(2),
    img:  remeraLisaRemera ,
  },
  {
    id: 35,
    prenda: "REMERA OVERSIDE",
    precio: 17.990,
    cuotas: (17.990/cuotas).toFixed(2),
    img:  remeraOversideRemera ,
  },

];



function ComprasPrincipales() {
  const { id } = useParams();
  const productoSeleccionado = itemsCompra.find((item) => item.id === parseInt(id));
  return (
    <section className="section animate__animated animate__slideInUp">
      {productoSeleccionado && (
        <CompraPrincipal
          prenda={productoSeleccionado.prenda}
          img={productoSeleccionado.img}
          cuotas={productoSeleccionado.cuotas}
          precio={productoSeleccionado.precio}
          key={productoSeleccionado.id}
        />
      )}
    </section>
  );
}

export default ComprasPrincipales;
