import React, {useState} from 'react';
import {Form, Button, Container, Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

const SignUpComponent = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(password === e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에서 다른 로직을 수행하거나 서버로 전송할 수 있습니다.
    };


    return (
        <Container className="mt-5 d-flex align-items-center justify-content-center w-auto">
            <Form className="w-50 d-flex flex-column">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Group controlId="formBasicEmail" className="d-flex">
                        <Form.Control type="email" placeholder="Enter your email" />
                        <Button variant="primary" type="submit" className="m-1">
                            Send
                        </Button>
                    </Form.Group>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    aaa
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" onChange={handleConfirmPasswordChange} />
                    {!passwordMatch && <Form.Text className="text-danger">Passwords do not match</Form.Text>}
                    {passwordMatch && <Form.Text className="text-danger">Passwords match</Form.Text>}

                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );

};

export default SignUpComponent;
