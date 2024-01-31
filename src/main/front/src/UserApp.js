
import {Route, Router, Routes, useLocation} from "react-router-dom";
import Main from "./UserDirectory/Main";
import LoginComponent from "./UserDirectory/LoginComponent";
import HeaderComponent from "./UserDirectory/IncComponent/HeaderComponent";
import FooterComponent from "./UserDirectory/IncComponent/FooterComponent";
import InquiryForm from "./UserDirectory/InquiryForm";
import UserDataFindComponent from "./UserDirectory/UserDataFindComponent";
import SignUpComponent from "./UserDirectory/SignUpComponent";
import {Container, Table} from "react-bootstrap";
import Career from "./UserDirectory/Career/CareerList";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import CareerView from "./UserDirectory/Career/CareerView";
import CareerApply from "./UserDirectory/Career/CareerApply";

import {AnimatePresence} from "framer-motion";
import Impressum from "./UserDirectory/IncComponent/FooterComponents/Impressum";
import Datenschutz from "./UserDirectory/IncComponent/FooterComponents/Datenschutz";



const UserApp = () => {

    return (

        <div className="UserApp">

            <HeaderComponent />
            <Container className="min-vh-100">
                    <Routes >

                            <Route exact path='/'  element={<Main />}  />
                            <Route path='/Impressum'  element={<Impressum />}  />
                            <Route path='/Datenschutz'  element={<Datenschutz />}  />
                            <Route path='/login' element={<LoginComponent />}  />
                            <Route path='/inquiry' element={<InquiryForm />}  />
                            <Route exact path='/find'  element={<UserDataFindComponent />}  />
                            <Route path='/signup' element={<SignUpComponent />}  />
                            <Route path='/Career' element={<Career/>}  />
                            <Route path='/CareerView' element={<CareerView/>}  />
                            <Route path='/CareerApply' element={<CareerApply/>}  />



                    </Routes>
            </Container>



            <FooterComponent />
        </div>
    )
}

export default UserApp;