import {Button, Container, Form, FormGroup} from "react-bootstrap";
import React from "react";


const InquiryForm = () => {
    return (


            <Form className="m-5" style={{minHeight: '60vh'}}>
                <FormGroup controlId="name">
                    <Form.Label>name</Form.Label>
                aaa    <Form.Control type="name" placeholder="Enter name"/>
                </FormGroup>
                <FormGroup controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>

                </FormGroup>
                <FormGroup controlId="message" className="h-100">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text"  style={{minHeight: '20vh'}}/>
                </FormGroup>
                <Button className="mt-3" type="submit">Submit</Button>
            </Form>


    );
};

export default InquiryForm;