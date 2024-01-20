import React, {useEffect, useState} from "react";
import Spinner from 'react-bootstrap/Spinner';

import './App.css';
import axios from "axios";
import NavbarComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

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
      <div className="Container">
          <NavbarComponent/>



          <ul>
              백엔드 데이터 s: {JSON.stringify(message, null, 2)}
          </ul>
          <FooterComponent/>
      </div>
  );
}

export default App;
