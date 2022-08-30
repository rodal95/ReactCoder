import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidjet from './CartWidjet';

import {Link} from 'react-router-dom';
import { useEffect } from 'react';


function BasicExample() {

  let productos = [{id:1,categoria:"rifles", titulo: "Ak 47", precio: 500, imagen:"https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/11/30/5fa535c98fec8.jpeg"}, {id:2,categoria:"francotiradores", titulo:"M40", precio:350, imagen:"https://www.armas.es/files/page/img/1/armas-legendarias-sniper-m40-a100.jpg"}]
  let categorias = ["rifles","francotiradores"]
  let links = []
  
  links = categorias.map(element => {
    
    return  (<NavDropdown.Item href="#action/3.2">
      <Link to={`category/${element}`}>{element}</Link>
      </NavDropdown.Item>)


})
  
  
  console.log(links)

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
            {/* <NavDropdown.Item href="#action/3.2">
                <Link to={"category/rifles"} >rifles</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to={"category/francotiradores"} >francotirador</Link>
              </NavDropdown.Item> */}
              {links}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidjet/>
      </Container>

      
    </Navbar>
  );
}

export default BasicExample;