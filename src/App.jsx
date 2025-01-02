import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    color: white;
    padding-bottom: 3rem;
    background: ${(props) => `url(${props.$bgImage})`};
    height: 100dvh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
`;

function App() {
    const navigate = useNavigate();
    const isFirstRender = useRef(true);
    const [bgImage, setBgImage] = useState(
        "assets/home/background-home-mobile.jpg"
    );
    useEffect(() => {
        if (isFirstRender.current) {
            navigate("/home");
            isFirstRender.current = false;
        }
    }, [navigate]);
    return (
        <Container $bgImage={bgImage}>
            <Header setBgImage={setBgImage}/>
            <Outlet />
        </Container>
    );
}

export default App;
