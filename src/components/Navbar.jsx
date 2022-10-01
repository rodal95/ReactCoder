import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidjet from './CartWidjet';
import { useContext, useState, useEffect, useParams } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../CartContext';
import db from '../services'
import { collection, doc, getDocs } from 'firebase/firestore';

function BasicExample() {
  const {items}= useContext(CartContext)
  const [categorias, setCategorias] = useState([]);
  useEffect(()=>{
    const getColData = async ()=> {
      try{
      const data = collection(db, "products") 
       const col = await getDocs(data)
       const res = col.docs.map((doc)=> doc.data().categoria ) 
       let categoriasFiltradas =res.filter((item, index)=>{
        return res.indexOf(item) === index
       })
       
       setCategorias(categoriasFiltradas)
      } catch(error){
        console.log(error)
      }
    }
    getColData()
    return ()=>{}
  },[])
  let links = []
  links = categorias.map((element, indx)=> {
    return  (<NavDropdown.Item key={indx} as="button" >
      <Link to={`category/${element}`} style={{textDecoration:"none"}}>{element}</Link>
      </NavDropdown.Item>)
})
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to={`/`} style={{textDecoration:"none"}}>AMMO NATION</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Text>
             <Link to={"/"} style={{textDecoration:"none"}}>
              Home
              </Link>
              </Navbar.Text>
            <Nav.Link>Nosotros</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
           
              {links}
              <NavDropdown.Item as="button" >
               <Link to={`/`} style={{textDecoration:"none"}}>Todos</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
       {!!items.length && <Link to={'/cart'}> <CartWidjet/></Link>}
      </Container>

      
    </Navbar>
  );
}

export default BasicExample;