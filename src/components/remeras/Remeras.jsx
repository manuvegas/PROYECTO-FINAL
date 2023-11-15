import React from 'react'
import  buzo from "../../assets/img/buzo.jpeg";
import  joggin from "../../assets/img/joggin.jpeg";
import  jordan  from "../../assets/img(remeras)/airJordan.jpeg";
import bermuda  from "../../assets/img/bermuda.jpeg";
import Remera from "./Remera";
import "./Remeras.css"


const remeras =[
  {
    id:1,
    titulo:"BUZOS",
    img:buzo,
    precio:"$19.999",
    texto:"Talles del S al XXL",

  },{
    id:2,
    titulo:"JOGGIN",
    img:joggin,
    precio:"$15.890",
    texto:"Talles del S al XXL",
  },{
    id:3,
    tittulo:"REMERA",
    img:jordan,
    precio:"$13.990",
    texto:"Talles del S al XXL"
  },{
    id:4,
    titulo:"BERMUDA",
    img:bermuda,
    precio:"$17.990",
    texto:"Talles del S al XXL",
  }
]
const Remeras = () => {
  return (
        <nav className="prendas animate__animated animate__slideInUp">
          {
            remeras.map((remera,index) =>(
              <Remera titulo={remeras.titulo} img={remeras.img} texto={remeras.texto} precio={remeras.precio} key={index}/>
            ))

          } 
        </nav>
  )
}


export default Remeras