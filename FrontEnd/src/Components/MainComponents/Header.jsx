import React from 'react'

//ESTILOS CSS
import '../../Styles/MainStyles/Header.css';

//IMPORTS DE BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//IMPORT DE IMÁGENES
import logo from '../../Img/edunamica_logo.svg';

//IMPORT DE LINK TO
import {Link, useLocation} from 'react-router-dom';


function HeaderNav() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logo}
            alt="Logo"
            width="140"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '180px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/' className={`custom-navlink ${location.pathname === '/' ? 'active' : ''}`} style={{ fontSize: '21px' }}>INICIO</Nav.Link>
            <Nav.Link as={Link} to='/Cursos' className={`custom-navlink ${location.pathname === '/Cursos' ? 'active' : ''}`} style={{ fontSize: '21px' }}>CURSOS</Nav.Link>
            <Nav.Link as={Link} to='/Contacto' className={`custom-navlink ${location.pathname === '/Contacto' ? 'active' : ''}`} style={{ fontSize: '21px' }}>CONTACTO</Nav.Link>
            <Nav.Link as={Link} to='/Blog' className={`custom-navlink ${location.pathname === '/Blog' ? 'active' : ''}`} style={{ fontSize: '21px' }}>BLOG</Nav.Link>
          </Nav>
          <div className="navbar-buttons">
      <button className="navbar-btn login-btn">
        <Link to="/Login" style={{ color: 'inherit', textDecoration: 'none' }}>
          Inicia sesión
        </Link>
      </button>
      <button className="navbar-btn register-btn">
        <Link to="/Registro" style={{ color: 'inherit', textDecoration: 'none' }}>
          Regístrate
        </Link>
      </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;