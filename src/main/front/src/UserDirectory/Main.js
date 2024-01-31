import React, {useEffect, useRef} from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import {motion} from "framer-motion";
import PageComponent from "../PageComponent";
const Main = () => {


    useEffect(() => {


    }, []);

    return (
<PageComponent>

        <Row>
            <Col>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/200/300" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/200/300" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/200/300" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This card has even longer
                                content than the first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Col>
        </Row>



</PageComponent>







    );
};

export default Main;
