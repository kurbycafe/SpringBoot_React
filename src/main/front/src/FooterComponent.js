import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (
        <Navbar fixed="bottom" bg="black" className="h-25">
            <Container>
                <Row className="text-white">


                    <Nav >
                        <Nav.Link href="/Impressum" className="text-white">Impressum</Nav.Link>
                        <Nav.Link href="/Datenschutz" className="text-white">Datenschutz</Nav.Link>
                        <Nav.Link href="/AGB" className="text-white">AGB</Nav.Link>
                        <Nav.Link href="/Kontakt" className="text-white">Kontakt</Nav.Link>
                    </Nav>
                </Row>

            </Container>
        </Navbar>
    );
}

export default FooterComponent;