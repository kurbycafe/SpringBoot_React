import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {NavLink} from "react-bootstrap";
import LoginComponent from "./UserDirectory/LoginComponent";
import Main from "./UserDirectory/Main";
import HeaderComponent from "./UserDirectory/IncComponent/HeaderComponent";
import UserApp from "./UserApp";
import AdminApp from "./AdminApp";
import {AnimatePresence} from "framer-motion";




export default function App() {

    return (

        <BrowserRouter>

    <AnimatePresence>
        <Routes >
            <Route path="/*" element={<UserApp />} />

            <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
    </AnimatePresence>


        </BrowserRouter>
    );
}