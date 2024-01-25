import React from 'react';
import {Form, Button, Container, Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

const LoginComponent = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{minHeight: '60vh'}}>

            <Form className="w-25">
                <Form.Group controlId="formBasicEmail" className="w-100">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="w-100">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className="mt-2">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>



                <Navbar >
                    <Nav className="me-auto">
                        <Nav.Link href="/find">Forgot ID/Password</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar>

                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Form>
        </div>
    );
};

export default LoginComponent;
