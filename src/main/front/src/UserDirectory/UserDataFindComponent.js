import React, { useState } from 'react';
import { Container, Button, Form, Tabs, Tab } from 'react-bootstrap';

const FindUsernameForm = () => (
    <Container className="mt-5">
        <h2>Find Username</h2>
        <Form>
            {/* 아이디 찾기 폼 구성 */}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Find Username
            </Button>
        </Form>
    </Container>
);

const ResetPasswordForm = () => (
    <Container className="mt-5">
        <h2>Reset Password</h2>
        <Form>
            {/* 비밀번호 찾기 폼 구성 */}
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Reset Password
            </Button>
        </Form>
    </Container>
);

const UserDataFindComponent = () => {
    const [activeTab, setActiveTab] = useState('find-username');

    return (
        <Container className="mt-5">
            <h2>Welcome to the Account Recovery Page</h2>
            <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                <Tab eventKey="find-username" title="Find Username">
                    <FindUsernameForm />
                </Tab>
                <Tab eventKey="reset-password" title="Reset Password">
                    <ResetPasswordForm />
                </Tab>
            </Tabs>
        </Container>
    );
};

export default UserDataFindComponent;
