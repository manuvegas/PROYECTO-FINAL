import React from "react";
import "./Compras.css";
import "animate.css/animate.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";


function CompraPrincipal({img,precio,prenda,cuotas}){
  const [open, setOpen] = useState(false);

  return (
      <div className="comprasItems">
        <div className="imgCompras">
          <img src={img} alt="" />
        </div>
        <div>
          <div className="tituloCompras">
            <h1>{prenda}</h1>
            <h3>{precio}</h3>
          </div>
          <div className="cuotas">
            <span>3 CUOTAS SIN INTERES DE {cuotas} </span>
          </div>
          <form action="">
            <div className="colorCompras">
              <label for="color">COLOR:</label>
              <div>
                <span className="colorBackground">......</span>
              </div>
            </div>
            <div className="tallesCompras">
              <h4>TALLE:</h4>
              <label class="form-check-label" for="flexRadioDefault1">
                S
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                M
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                L
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                XL
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                XXL
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
            </div>
          </form>
          <div>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="buttonDetalles"
            >
              VER DETALLES
            </Button>
            <div>
              <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                  <Card
                    body
                    className="cardDetalles"
                    style={{ width: "400px" }}
                  >
                    el 100 % del algodón que utilizamos en todos nuestros
                    productos es algodón orgánico certificado
                  </Card>
                </div>
              </Collapse>
            </div>
            <button className="buttonAgregar">AGREGAR AL CARRITO</button>
          </div>
        </div>
      </div>
  );
};

export default CompraPrincipal;
