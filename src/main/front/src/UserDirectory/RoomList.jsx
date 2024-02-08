import {motion} from "framer-motion";
import {Button, FigureCaption, Image, Tab, Tabs} from "react-bootstrap";
import {FadeInWhenVisible} from "../MotionFrameEffects";



const RoomList = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="roomOne"
                className="mb-3  border-2"
                fill={true}
                justify={true}
                variant="pills"


            >
                <Tab eventKey="roomOne" title="Normal Room">
                    <h2>Room 1</h2>
                    <FigureCaption>

                        <p>Room 1 is a standard room with a queen size bed, a private bathroom, and a balcony. It is perfect for a couple or a single person.</p>
                    </FigureCaption>
                    <FadeInWhenVisible>
                        <Image src="/img/normalroom_1.jpg" className="w-75 h-75"/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                        <Image src="/img/normalroom_2.jpg" className="w-75 h-75 pt-5"/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>

                        <Image src="/img/normalroom_3.jpg" className="w-75 h-75 pt-5"/>
                    </FadeInWhenVisible>
                    <div className="justify-content-center d-flex">

                    <Button variant="outline-dark" className="mt-5" size="lg">Book!</Button>
                    </div>
                </Tab>
                <Tab eventKey="roomTwo" title="Bigger Room">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="roomThree" title="Suits" >
                    Tab content for Contact
                </Tab>
            </Tabs>

        </div>


    );
}

export default RoomList;