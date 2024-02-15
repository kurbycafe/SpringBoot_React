import React, {useEffect, useState} from 'react';
import {Form, Button, Container, Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from "axios";

const SignUpComponent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');


    //password match check state
    const [passwordMatch, setPasswordMatch] = useState(true);

    useEffect(() => {
        if (password !== passwordConfirm) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    }, [password, passwordConfirm]);

   const handlePasswordChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setPassword(value);
        if (password !== passwordConfirm) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

   const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setPasswordConfirm(value);

        if (passwordConfirm  !== password) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };



// send form data to server
    const handleSubmit = (e) => {
        e.preventDefault();

        if (passwordMatch === false) {
            alert('Passwords do not match');
            return;
        }

        if (name === '' || email === '') {
            alert('Name and email are required');
            return;
        }
        if(emailValidation === false) {
            alert('Email not validated');
            return;
        }

        if (!document.getElementById('formBasicCheckbox').checked) {
            alert('Please agree to the terms and conditions');
            return;
        }
        const formData = new FormData(document.getElementById('frm'));

        axios.post('http://localhost:8080/signupAction', formData)
            .then(response => {

                if (response.status === 200) {
                    if (response.data.SUCCESS === true) {
                        alert('User already exists');
                    }
                    if (response.data.SUCCESS === "Duplicated") {
                        alert('User already exists');
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
    /*
    * email send request to /sendEmail
    * */
    const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(document.getElementById('frm'));
        console.log(formData);
        axios.post('http://localhost:8080/sendEmail', formData)
            .then(response => {

                if (response.status === 200 && response.data.SUCCESS === true) {
                    alert('Email sent');
                    setEmailValidation(true);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };




    return (
        <Container className="mt-5 d-flex align-items-center justify-content-center w-auto">
            <Form className="w-50 d-flex flex-column" name="frm" id="frm">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="userName" onChange={setName}/>
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="userId" onChange={setName}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Group controlId="formBasicEmail" className="d-flex">
                        <Form.Control type="email" placeholder="Enter your email" name="userEmail" onChange={setEmail}/>
                        <Button variant="primary" type="submit" className="m-1"  onClick={sendEmail} >
                            Send
                        </Button>
                    </Form.Group>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  name="userPass" onChange={handlePasswordChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" value={passwordConfirm} onChange={handleConfirmPasswordChange} />
                    {!passwordMatch && password !== '' && passwordConfirm !== '' &&  <Form.Text className="text-danger">Passwords do not match</Form.Text>}
                    {passwordMatch && password !== ''  && <Form.Text >Passwords match</Form.Text>}

                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Sign Up
                </Button>
            </Form>
        </Container>
    );

};

export default SignUpComponent;
