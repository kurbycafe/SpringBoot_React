import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavLink} from "react-bootstrap";
import LoginComponent from "./UserDirectory/LoginComponent";
import Main from "./UserDirectory/Main";
import HeaderComponent from "./UserDirectory/IncComponent/HeaderComponent";
import UserApp from "./UserApp";
import AdminApp from "./AdminApp";




export default function App() {
    return (

        <BrowserRouter>

            <Routes>
                <Route path="/*" element={<UserApp />} />
                <Route path="/admin/*" element={<AdminApp />} />
            </Routes>
        </BrowserRouter>
    );
}