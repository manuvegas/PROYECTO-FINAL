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

const itemsCompra = [
  {
    id: 1,
    prenda: "ESTAMPADO NIKE",
    precio: "$19.999",
    cuotas: "",
    img:  buzosImg ,
  },
  {
    id: 2,
    prenda: "JOGGIN",
    precio: "$15.890",
    cuotas: "",
    img:  jogginsImg ,
  },
  {
    id: 3,
    prenda: "AIR-JORDAN",
    precio: "$13.990",
    cuotas: "",
    img:  remerasImg ,
  },
  {
    id: 4,
    prenda: "BERMUDA",
    precio: "$17.990",
    cuotas: "",
    img:  bermudasImg ,
  },
  {
    id: 5,
    prenda: "AIR-FORCE",
    precio: "$60.700",
    cuotas: "",
    img:  airforceZapa ,
  },
  {
    id: 6,
    prenda: "RETRO-JORDAN",
    precio: "$105.890",
    cuotas: "",
    img:  retroZapa ,
  },
  {
    id: 7,
    prenda: "AIR-MAX",
    precio: "$88.800",
    cuotas: "",
    img:  airmaxZapa ,
  },
  {
    id: 8,
    prenda: "JORDAN",
    precio: "$90.990",
    cuotas: "",
    img:  jordanZapa ,
  },
];

function ComprasPrincipales() {
  return (
    <section className="section animate__animated animate__slideInUp">
      {itemsCompra.map((item) => (
        <CompraPrincipal
          prenda={item.prenda}
          img={item.img}
          cuotas={item.cuotas}
          precio={item.precio}
          key={item.id}
        />
      ))}
    </section>
  );
}

export default ComprasPrincipales;
