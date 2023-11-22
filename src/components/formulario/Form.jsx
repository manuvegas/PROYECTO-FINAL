import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <section className="animate__animated animate__slideInLeft">
      <h2>
        <i className="contactos_nombre">CONTACTOS</i>
      </h2>
      <div className="contactos_flex">
        <div>
          <h2>
            <i className="contactos_nombre">ENCOTRANOS EN</i>
          </h2>
          <ul className="ul_contactos">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              1153678906
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              pepito@hotmail.com
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              Parana 7177 entre Alcorta y Fray Cayetano Rodriguez
            </li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.7871884318733!2d-58.52926178773256!3d-34.50827907287596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0f1da12bce7%3A0xf0a25a34b83a795e!2sNike%20Store%20Unicenter!5e0!3m2!1ses-419!2sar!4v1695594403871!5m2!1ses-419!2sar"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mapa_contactos"
          ></iframe>
        </div>
        <form
          action=""
          method="post"
          enctype="multipart/form-data"
          className="form_contactos"
        >
          <fieldset className="fieldset_contactos">
            <legend className="legend_contactos">FORMULARIO</legend>
            <div className="flex_contactos">
              <label for="nombre" className="label_contactos">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ingrese su Nombre"
                required
                className="input_form"
              />
            </div>
            <div className="flex_contactos">
              <label for="apellido" className="label_contactos">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                placeholder="Ingrese su Apellido"
                required
                className="input_form"
              />
            </div>
            <div className="flex_contactos">
              <label for="correo" className="label_contactos">
                Correo electronico
              </label>
              <input
                type="email"
                name="correo"
                id="correo"
                placeholder="Ingrese su correo electronico"
                className="input_form"
              />
            </div>
            <div className="flex_contactos">
              <label for="telefono" className="label_contactos">
                Telefono
              </label>
              <input
                type="number"
                name="telefono"
                id="telefono"
                placeholder="Ingrese su numero de telefono "
                required
                className="input_form"
              />
            </div>
            <div className="flex_contactos">
              <label for="mensaje" className="label_contactos">
                Mensaje(opcional)
              </label>
              <textarea name="mensaje" id="mensaje" cols="3" rows="" className="input_msj"></textarea>
            </div>
            <div>
              <input type="submit" value="ENVIAR" className="input_enviar" />
              <input type="submit" value="BORRAR" className="input_enviar" />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Form;
