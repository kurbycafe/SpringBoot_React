import AdminLogin from "./AdminDirectory/AdminLogin";
import {Route, Routes} from "react-router-dom";
import Main from "./UserDirectory/Main";
import LoginComponent from "./UserDirectory/LoginComponent";
import AdminMain from "./AdminDirectory/AdminMain";


const AdminApp = () => {

    return (
        <Routes>
            <Route exact path='/main'  element={<AdminMain />}  />
            <Route path='/login' element={<AdminLogin />}  />

        </Routes>
    )
}

export default AdminApp;