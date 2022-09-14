import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidjet from './CartWidjet';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../CartContext';


function BasicExample() {
  const {items}= useContext(CartContext)

  
  let categorias = ["rifles","francotirador"]
  let links = []
  
  links = categorias.map((element, indx)=> {
    
    return  (<NavDropdown.Item key={indx}>
      <Link to={`category/${element}`} >{element}</Link>
      </NavDropdown.Item>)
})
  


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to={`/`} style={{textDecoration:"none"}}>Bienvenido a Armas y Guerras</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={`/`} style={{textDecoration:"none"}}>
              Home
              </Link>
              </Nav.Link>
            <Nav.Link>Nosotros</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
           
              {links}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
       {!!items.length && <Link to={'/cart'}> <CartWidjet/></Link>}
      </Container>

      
    </Navbar>
  );
}

export default BasicExample;