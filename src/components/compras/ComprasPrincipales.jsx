import buzos from "../../assets/img/buzo.jpeg";
import joggins from "../../assets/img/joggin.jpeg";
import remeras from "../../assets/img(remeras)/airJordan.jpeg";
import bermudas from "../../assets/img/bermuda.jpeg";
import airforce from "../../assets/img/airforce.jpeg";
import airmax from "../../assets/img/airmax.jpeg";
import retro from "../../assets/img/retro.jpeg";
import jordan from "../../assets/img/jordan.jpeg";
import "animate.css/animate.min.css";
import CompraPrincipal from "./CompraPrincipal";

const itemsCompra = [
  {
    id: 1,
    prenda: "ESTAMPADO NIKE",
    precio: "$19.999",
    cuotas: "",
    img: { buzos },
  },
  {
    id: 2,
    prenda: "JOGGIN",
    precio: "$15.890",
    cuotas: "",
    img: { joggins },
  },
  {
    id: 3,
    prenda: "AIR-JORDAN",
    precio: "$13.990",
    cuotas: "..",
    img: { remeras },
  },
  {
    id: 4,
    prenda: "BERMUDA",
    precio: "$17.990",
    cuotas: "",
    img: { bermudas },
  },
  {
    id: 5,
    prenda: "AIR-FORCE",
    precio: "$60.700",
    cuotas: "",
    img: { airforce },
  },
  {
    id: 6,
    prenda: "RETRO-JORDAN",
    precio: "$105.890",
    cuotas: "",
    img: { retro },
  },
  {
    id: 7,
    prenda: "AIR-MAX",
    precio: "$88.800",
    cuotas: "",
    img: { airmax },
  },
  {
    id: 8,
    prenda: "JORDAN",
    precio: "$90.990",
    cuotas: "",
    img: { jordan },
  },
];

function ComprasPrincipales() {
  return (
    <section className="section animate__animated animate__slideInUp">
      {itemsCompra.map((item, index) => (
        <CompraPrincipal
          prenda={item.prenda}
          img={item.img}
          cuotas={item.cuotas}
          precio={item.precio}
          key={index}
        />
      ))}
    </section>
  );
}

export default ComprasPrincipales;
