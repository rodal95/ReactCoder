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
              <Link to='/item/1'>
              <NavDropdown.Item href="#action/3.1">Rifles</NavDropdown.Item>
              </Link>
              <Link to='/item/2'>
              <NavDropdown.Item href="#action/3.3">Francotiradores</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidjet/>
      </Container>

      
    </Navbar>
  );
}

export default BasicExample;