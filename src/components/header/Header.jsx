import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffcanvasButton from "../offcanvas/Offcanvas";


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <OffcanvasButton/>
        <Navbar.Collapse id="navbarScroll"> 
          <Nav
            className="me-auto my-4 my-lg-0" 
            navbarScroll
          >
            <Nav.Link href="">LOGIN</Nav.Link>
            <Nav.Link href="#action2">INICIO</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">REMERAS</NavDropdown.Item>
              <NavDropdown.Item href="#action3">BUZOS</NavDropdown.Item>
              <NavDropdown.Item href="#action3">CAMPERAS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">JOGGGINS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">AIRFORCE</NavDropdown.Item>
              <NavDropdown.Item href="#action5">RETRO-JORDAN-NIKE</NavDropdown.Item>
              <NavDropdown.Item href="#action5">JORDAN-NIKE</NavDropdown.Item>
              <NavDropdown.Item href="#action5">AII-MAX</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">CONTACTOS</Nav.Link>
            <Nav.Link href="#action2">CAMBIOS</Nav.Link>
            <Nav.Link href="#action2">ENVIOS</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
           
          </Form>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
