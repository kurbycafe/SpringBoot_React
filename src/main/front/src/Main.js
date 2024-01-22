import React, {useEffect, useRef} from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';

const Main = () => {
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (div1Ref.current && div2Ref.current) {
                const div1Top = div1Ref.current.offsetTop;
                const div2Top = div2Ref.current.offsetTop;

                const fadeStart = div1Top;
                const opacity = (scrollTop - fadeStart) / (div2Top - fadeStart);

                if (opacity >= 0 && opacity <= 1) {
                    div2Ref.current.style.opacity = opacity;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container className="mt-5">
            {/*max 3*/}
            <h2> Notice </h2>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160"/>
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
