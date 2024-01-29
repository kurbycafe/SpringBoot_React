import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";

const HeaderComponent = () => {
    return (



        <Navbar collapseOnSelect expand="lg" className="bg-body-secondary" >
            <Container>
                <Navbar.Brand href="/">Simple Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Rooms & Reservations</Nav.Link>
                        <Nav.Link href="/Career">Careers</Nav.Link>
                        <NavDropdown title="About Us" id="collapsible-nav-dropdown">

                            <NavDropdown.Item href="#">
                                Facilities & Services
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">Location & Map</NavDropdown.Item>
                            <NavDropdown.Item href="#">Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;