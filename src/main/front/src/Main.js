import React, {useEffect, useRef} from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';

const Main = () => {


    useEffect(() => {


    }, []);

    return (
        <Container className="mt-5">
            {/*max 3*/}
            <h2> Notice </h2>
            <CardGroup>
                <Card>

                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


            </CardGroup>
        </Container>
    );
};

export default Main;
