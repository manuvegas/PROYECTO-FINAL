import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffcanvasButton from "../offcanvas/Offcanvas";
import { Link } from "react-router-dom";
import "./Header.css";


function Header(id) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-4 my-lg-0 " navbarScroll>
            <Link to="/Login" className="link">
              LOGIN
            </Link>
            <Link to="/inicio" className="link">
              HOME
            </Link>
            <NavDropdown
              title="PRODUCTOS"
              id="navbarScrollingDropdown"
              className="desplegable"
            >
              <NavDropdown.Item>
                <Link to="/remeras" className="link">
                  REMERAS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/buzos" className="link">
                  BUZOS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/camperas" className="link">
                  CAMPERAS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/joggins" className="link">
                  JOGGINS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to={`/comprasPrincipales/${id}`} className="link">
                  AIRFORCE
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/comprasPrincipales/${id}`} className="link">
                  RETRO-JORDAN-NIKE
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/comprasPrincipales/${id}`} className="link">
                  JORDAN-NIKE
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/comprasPrincipales/${id}`} className="link">
                  AII-MAX
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/Formulario" className="link">
              CONTACTOS
            </Link>
            <Link to="/Cambios" className="link">
              CAMBIOS
            </Link>
            <Link to="/Envios" className="link">
              ENVIOS
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 input"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
            <OffcanvasButton />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
