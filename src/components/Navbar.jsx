import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidjet from './CartWidjet';
import {Link} from 'react-router-dom';
function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link to={`/`} style={{textDecoration:"none"}}>Bienvenido a Armas y Guerras</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={`/`} style={{textDecoration:"none"}}>
              Home
              </Link>
              </Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Armas de Mano</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Armas de Asedio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vehiculos</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidjet/>
      </Container>

      
    </Navbar>
  );
}

export default BasicExample;