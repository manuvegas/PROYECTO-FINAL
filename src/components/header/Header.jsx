import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffcanvasButton from "../offcanvas/Offcanvas";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-4 my-lg-0 " navbarScroll>
            <Nav.Link>
              <Link to="/Login" className="link">
                LOGIN
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="link">
                HOME
              </Link>
            </Nav.Link>
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
              <NavDropdown.Item>AIRFORCE</NavDropdown.Item>
              <NavDropdown.Item>RETRO-JORDAN-NIKE</NavDropdown.Item>
              <NavDropdown.Item>JORDAN-NIKE</NavDropdown.Item>
              <NavDropdown.Item>AII-MAX</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/Formulario" className="link">
                CONTACTOS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Cambios" className="link">
                CAMBIOS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Envios" className="link">
                ENVIOS
              </Link>
            </Nav.Link>
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
