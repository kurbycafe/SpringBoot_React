import React, {useEffect, useRef, useState} from 'react';
import {Card, CardGroup, Carousel, Col, Container, FloatingLabel, Image, Row} from 'react-bootstrap';
import {Form} from "react-bootstrap";
import {FadeInWhenVisible, FramerHoverButton, FramerHoverZoomIn} from "../MotionFrameEffects";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";





const Main = () => {


    const [index, setIndex] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [people, setPeople] = useState(1);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const imageUrls = [
        '/img/main1.jpg',
        '/img/main2.jpg',
        '/img/main3.jpg',

    ];
const serviceList = [
   "Rooms", "Restaurants", "Massage", "Swimming Pool", "Gym", "Sauna", "Conference Room",
    "Parking", "Free Wi-Fi", "24/7 Reception", "Room Service", "Laundry Service", "Airport Shuttle",
]

    const restaurantList = [
        "Japanese",
        "Chinese" ,
        "Italian",
        "Buffet"
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
                                <Image src={url} fluid className=" w-100" style={{height: "650px"}}/>
                                <Carousel.Caption>
                                    <h1>Your Dream Holiday Place</h1>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    )
                }

            </Carousel>
            <FadeInWhenVisible>
            <div className="mt-5" style={{background: "#534E4B"}}>

                    <h1 style={{color: "#D9D9D9"}}>Our Services</h1>
                    <p style={{color: "#D9D9D9"}}>We offer a wide range of services to make your stay as comfortable as
                        possible</p>

                    {serviceList.reduce((rows, serviceName, index) => {
                        if (index % 2 === 0) rows.push([]);
                        rows[rows.length - 1].push(serviceName);
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <Row key={rowIndex}>
                            {row.map((service, colIndex) => (
                                <Col className="ms-3" key={colIndex} style={{color: "#D9D9D9"}}>{service}</Col>
                            ))}
                        </Row>
                    ))}



            </div>

                <div className="mt-5 " style={{background: "#534E4B"}}>

                    <h1 style={{color: "#D9D9D9"}}>Book your room</h1>
                    <p style={{color: "#D9D9D9"}}>Choose the date of your stay</p>


                    < div className="d-flex">
                        <div className="m-3">
                            <h5 style={{color: "#D9D9D9"}}>Check-in</h5>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </div>

                        <div className="m-3">
                            <h5 style={{color: "#D9D9D9"}}>Check-out</h5>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                        </div>


                        <div className="m-3">
                            <h5 style={{color: "#D9D9D9"}}>People</h5>
                            <div className="d-flex">


                                <button className="btn btn-outline-light btn-secondary "
                                        onClick={() => setPeople(people - 1)}>-
                                </button>
                                <p className="m-3" style={{color: "#D9D9D9"}}>{people}</p>
                                <button className="btn btn-outline-light btn-secondary"
                                        onClick={() => setPeople(people + 1)}>+
                                </button>
                            </div>
                        </div>

                        <div className="m-3  w-100 d-flex align-content-center justify-content-center text-center">
                            <button className="btn btn-outline-light btn-secondary h-50 text-center mt-3">Book</button>
                        </div>


                    </div>

                </div>



            <div className="mt-5   " style={{background: "#534E4B"}}>

                    <h1 style={{color: "#D9D9D9"}}>Restaurant</h1>
                    <p style={{color: "#D9D9D9"}}>Our restaurant offers a wide range of dishes from all over the
                        world.
                        Enjoy your meal in a cozy atmosphere</p>

                    <CardGroup>


                        {(restaurantList).map((key, index) => (
                            <Card key={index} style={{background: "#534E4B"}}>


                                <Card.Body>
                                    <FramerHoverZoomIn>


                                    </FramerHoverZoomIn>
                                    <Card.Title style={{color: "#D9D9D9"}} className="h-100">{key}</Card.Title>
                                </Card.Body>

                            </Card>
                        ))}


                    </CardGroup>
                    <div className="d-flex justify-content-center">
                        <FramerHoverButton>
                            <button className="m-2 p-3 text-white  bg-transparent" style={{
                                border: "2px solid white",
                                borderRadius: "10px",
                            }}> View Menu
                                <Image
                                    src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-right.png"
                                    alt="long-arrow-right"
                                    className="ms-2"
                                />
                            </button>
                        </FramerHoverButton>
                    </div>



            </div>
            </FadeInWhenVisible>
        </Container>


    );
};

export default Main;
