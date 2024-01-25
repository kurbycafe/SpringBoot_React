
import {Route, Routes} from "react-router-dom";
import Main from "./UserDirectory/Main";
import LoginComponent from "./UserDirectory/LoginComponent";


const UserApp = () => {

    return (
        <Routes>
            <Route exact path='/'  element={<Main />}  />
            <Route path='/login' element={<LoginComponent />}  />

        </Routes>
    )
}

export default UserApp;