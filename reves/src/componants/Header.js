import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import '../styles/App.css';
import '../assets/Parisienne-Regular.ttf';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Fade from 'react-reveal/Fade';
import Logo from "../assets/logo-removebg-preview.png"
const Header = () => {
    return (
        <header>
            <div className="ctn-logo">
                <img src={Logo}></img>
            </div>

            <Navbar collapseOnSelect className="header" expand="lg" variant="white">
                <Fade clear duration={1200}>
                    <Navbar.Brand href="#home" className="title">Rêves Intimes</Navbar.Brand>
                </Fade>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Nav className="mr-auto">
                    <NavDropdown title="Produits" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#lingerie">Lingerie</NavDropdown.Item>
                        <NavDropdown.Item href="#jouets">Jouets</NavDropdown.Item>
                        <NavDropdown.Item href="#cosmetique">Cosmétique</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#localisation" className="nav-link">Nous trouver</Nav.Link>
                    <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                </Nav>


            </Navbar>
        </header>
    );
};

export default Header;