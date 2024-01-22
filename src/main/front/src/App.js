import React, {useEffect, useState} from "react";
import Spinner from 'react-bootstrap/Spinner';

import './App.css';
import axios from "axios";
import NavbarComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import {Route, Routes} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import {Container} from "react-bootstrap";
import FindUserdataComponent from "./FindUserdataComponent";

function Home() {
    return null;
}

function App() {

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get("/api/test")
            .then(response => {
                setMessage(response.data); // JSON 데이터는 response.data에 있습니다.
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spinner animation="border" role="status" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );

    }
  return (
    <div>
        <NavbarComponent/>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginComponent />}/>
            <Route path="/find" element={<FindUserdataComponent />}/>
        </Routes>

        <FooterComponent/>
    </div>


  );
}

export default App;
