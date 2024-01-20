import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import React from "react";

const FooterComponent = () => {
    return (
        <Navbar fixed="bottom" bg="black" className="h-25">
            <Container>
                <Row className="text-white">
                    <Col> Impressum </Col>
                    <Col> AGB </Col>
                    <Col> Datenschutz </Col>
                    <Col> Contakt </Col>
                </Row>

            </Container>
        </Navbar>
    );
}

export default FooterComponent;