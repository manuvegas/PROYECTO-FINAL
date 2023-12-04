import buzosImg from "../../assets/img/buzo.jpeg";
import jogginsImg from "../../assets/img/joggin.jpeg";
import remerasImg from "../../assets/img(remeras)/airJordan.jpeg";
import bermudasImg from "../../assets/img/bermuda.jpeg";
import airforceZapa from "../../assets/img/airforce.jpeg";
import retroZapa from "../../assets/img/retro.jpeg";
import airmaxZapa from "../../assets/img/airmax.jpeg";
import jordanZapa from "../../assets/img/jordan.jpeg";
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
