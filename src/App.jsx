import { Outlet } from "react-router-dom";
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
    let bgImage;
    const [isUrlChanged, setIsUrlChanged] = useState(false);
    if (window.location.href.includes("destination")) {
        console.log("destination");
        bgImage = "assets/destination/background-destination-mobile.jpg";
    } else if (window.location.href.includes("crew")) {
        console.log("crew");
        bgImage = "assets/crew/background-crew-mobile.jpg";
    } else if (window.location.href.includes("technology")) {
        console.log("technology");
        bgImage = "assets/technology/background-technology-mobile.jpg";
    } else {
        console.log("home");
        bgImage = "assets/home/background-home-mobile.jpg";
    }
    return (
        <Container $bgImage={bgImage}>
            <Header setIsUrlChanged={setIsUrlChanged} />
            <Outlet />
        </Container>
    );
}

export default App;
