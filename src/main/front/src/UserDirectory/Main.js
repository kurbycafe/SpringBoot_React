import React, {useEffect, useRef, useState} from 'react';
import {Card, CardGroup, Carousel, Col, Container, Image, Row} from 'react-bootstrap';
import {motion} from "framer-motion";
import PageComponent from "../PageComponent";

function ExampleCarouselImage(props: { text: string }) {
    return null;
}

const Main = () => {
    function FadeInWhenVisible({ children }) {
        return (
            <motion.div
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{
                    ease: "easeInOut",
                    duration: 2,
                    y: {duration: 1},
                }}
            >
                {children}
            </motion.div>
        );
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const imageUrls = [
        '/img/main1.jpg',
        '/img/main2.jpg',
        '/img/main3.jpg',

    ];
const serviceList = [
   "Rooms", "Restaurants", "Massage", "Swimming Pool", "Gym", "Sauna", "Conference Room", "Parking", "Free Wi-Fi", "24/7 Reception", "Room Service", "Laundry Service", "Airport Shuttle",


]
    return (
        <Container>
            <div className="">
                <FadeInWhenVisible>
                    <h1 className="text-center mt-5">Welcome to our hotel</h1>
                    <p className="text-center">
                        We are a modern hotel located in the heart of the city. Book your room now!

                    </p>
                </FadeInWhenVisible>
            </div>
            <Carousel fade>

                {
                    imageUrls.map((url, index) => (

                        <Carousel.Item key={index}>
                            <Image src={url} fluid className=" w-100" style={{height : "650px"}}/>
                            <Carousel.Caption>
                                <h1>Your Dream Holiday Place</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )


                    )
                }

            </Carousel>
            <div className="mt-1" style={{background : "#534E4B"}} >
                <FadeInWhenVisible>
                    <h1 style={{color:"#D9D9D9"}}>Our Services</h1>
                    <p style={{color:"#D9D9D9"}}>We offer a wide range of services to make your stay as comfortable as possible</p>

                    {serviceList.reduce((rows, serviceName, index) => {
                        if (index % 2 === 0) rows.push([]);
                        rows[rows.length - 1].push(serviceName);
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <Row key={rowIndex}>
                            {row.map((service, colIndex) => (
                                <Col className="ms-3" key={colIndex} style={{color:"#D9D9D9"}}>{service}</Col>
                            ))}
                        </Row>
                    ))}



                </FadeInWhenVisible>
            </div>


        </Container>


    );
};

export default Main;
