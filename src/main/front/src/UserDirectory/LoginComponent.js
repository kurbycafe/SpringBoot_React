import React, {useState} from 'react';
import {Form, Button, Container, Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import PageComponent from "../PageComponent";
import axios from "axios";
const LoginComponent = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();



        const formData = new FormData(document.getElementById('frm'));
        console.log(formData);
        axios.post('http://localhost:8080/loginAction', formData)
            .then(response => {
                if (response.status === 200 && response.data.SUCCESS === true) {
                    alert('login success');
                    window.location.href = '/';
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <PageComponent>
        <div
                    className="d-flex align-items-center justify-content-center" style={{minHeight: '60vh'}}>

            <Form className="w-25" id="frm">
                <Form.Group controlId="formBasicEmail" className="w-100">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter ID" name="userId"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="w-100">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="userPass"/>
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

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>


            </Form>
        </div>
            </PageComponent>
    );
};

export default LoginComponent;
