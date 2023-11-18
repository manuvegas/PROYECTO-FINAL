import React from "react";
import "./Envios.css"

const Envios = () => {
  return (
    <div>
      <h2 class="h1_envios">
        <i>ENVIOS</i>
      </h2>
      <fieldset class="fieldset_envios">
        <h2 class="h2_cambios titulo">
          <i class="titulo">¡ATENCION!</i>
          <p>
            LOS ENVIOS LOS HACEMOS NOSOTROS,POR LO QUE EL ENVIO DEL PRODUCTO
            DEPENDE DEL DIA, LOS ENVIOS LOS HACEMOS EL MISMO DIA QUE SE HACE EL
            PEDIDO,LO CUAL NO QUIERE DECIR QUE EL ENVIO SERA EL DIA SIGUIENTE
          </p>
        </h2>
        <h3 class="h3_cambios">
          <i class="titulo">HORARIOS(LOCAL):</i>
          <p>De lunes a viernes de 9:00 a 13:00 y de 16:00 a 20:00</p>
        </h3>
        <h3 class="h3_cambios">
          <i class="titulo">HORARIOS(ENVIOS):</i>
          <p>De lunes a viernes de 9:00 a 20:00(De corrido)</p>
        </h3>
        <h4>
          <p class="texto_envios">
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
