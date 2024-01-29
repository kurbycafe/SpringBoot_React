
import {Route, Router, Routes, useLocation} from "react-router-dom";
import Main from "./UserDirectory/Main";
import LoginComponent from "./UserDirectory/LoginComponent";
import HeaderComponent from "./UserDirectory/IncComponent/HeaderComponent";
import FooterComponent from "./UserDirectory/IncComponent/FooterComponent";
import InquiryForm from "./UserDirectory/InquiryForm";
import UserDataFindComponent from "./UserDirectory/UserDataFindComponent";
import SignUpComponent from "./UserDirectory/SignUpComponent";
import {Table} from "react-bootstrap";
import Career from "./UserDirectory/Career/CareerList";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import CareerView from "./UserDirectory/Career/CareerView";
import CareerApply from "./UserDirectory/Career/CareerApply";

import {AnimatePresence} from "framer-motion";



const UserApp = () => {

    return (

        <div className="UserApp">

            <HeaderComponent />
<AnimatePresence>
            <TransitionGroup>
                <CSSTransition
                    key={useLocation().key}
                    classNames="fade"
                    timeout={300}
                >
                    <Routes >

                        <Route exact path='/'  element={<Main />}  />
                        <Route path='/login' element={<LoginComponent />}  />
                        <Route path='/inquiry' element={<InquiryForm />}  />
                        <Route exact path='/find'  element={<UserDataFindComponent />}  />
                        <Route path='/signup' element={<SignUpComponent />}  />
                        <Route path='/Career' element={<Career/>}  />
                        <Route path='/CareerView' element={<CareerView/>}  />
                        <Route path='/CareerApply' element={<CareerApply/>}  />

                    </Routes>
                </CSSTransition>
            </TransitionGroup>
</AnimatePresence>


            <FooterComponent />
        </div>
    )
}

export default UserApp;