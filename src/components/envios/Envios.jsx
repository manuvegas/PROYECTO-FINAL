import React from "react";
import "./Envios.css"
import "animate.css/animate.min.css";

const Envios = () => {
  return (
    <div className="animate__animated animate__slideInLeft">
      <h2>
        <i>ENVIOS</i>
      </h2>
      <fieldset className="fieldset_envios">
        <h1 className="h2_cambios">
          <i className="titulo">¡ATENCION!</i></h1>
          <p className="texto">
            LOS ENVIOS LOS HACEMOS NOSOTROS,POR LO QUE EL ENVIO DEL PRODUCTO
            DEPENDE DEL DIA, LOS ENVIOS LOS HACEMOS EL MISMO DIA QUE SE HACE EL
            PEDIDO,LO CUAL NO QUIERE DECIR QUE EL ENVIO SERA EL DIA SIGUIENTE
          </p>
     
        <h3 className="h3_cambios">
          <i className="titulo">HORARIOS(LOCAL):</i></h3>
          <p className="texto">De lunes a viernes de 9:00 a 13:00 y de 16:00 a 20:00</p>
      
        <h3 className="h3_cambios">
          <i className="titulo">HORARIOS(ENVIOS):</i></h3>
          <p className="texto">De lunes a viernes de 9:00 a 20:00(De corrido)</p>
        
        <h4>
          <p className="texto_envios">
            <b>
              <i>
                ¡¡LOS ENVIOS QUE SE HAGAN EL DIA VIERNES SE DAN LA SEMANA QUE
                VIENE!!
              </i>
            </b>
          </p>
        </h4>
      </fieldset>
    </div>
  );
};

export default Envios;
