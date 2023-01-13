import logo from '../assets/imgs/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header(props) {
  const setPage = props.setPage

  return (
    <header>
      <Navbar bg="primary" variant="dark" id="header">
        <Container>
          <Navbar.Brand 
            href="#inicio"
            onClick={() => setPage('inicio')}
          >
            <img src={logo} alt='Logo' id='logo' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link 
              href="#inicio"
              onClick={() => setPage('inicio')}
            >Inicio</Nav.Link>
            <Nav.Link 
              href="#productos"
              onClick={() => setPage('productos')}
            >Productos</Nav.Link>
            <Nav.Link 
              href="#clientes"
              onClick={() => setPage('clientes')}
            >Clientes</Nav.Link>
            <Nav.Link 
              href="#proveedores"
              onClick={() => setPage('proveedores')}
            >Proveedores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}