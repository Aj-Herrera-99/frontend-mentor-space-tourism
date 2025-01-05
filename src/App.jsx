import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createContext, useState } from "react";
import styled from "styled-components";

export const MyContext = createContext();

const Container = styled.div`
    color: white;
    /* padding-bottom: 3rem; */
    background: ${(props) => `url(${props.$bgImage})`};
    height: 100dvh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
    overflow-y: auto;
`;

function App() {
    let bgImage;
    const [isUrlChanged, setIsUrlChanged] = useState(false);

    if (window.location.href.includes("destination")) {
        console.log("destination");
        if (document.body.offsetWidth > 1024) {
            bgImage = "assets/destination/background-destination-desktop.jpg";
        } else if (document.body.offsetWidth > 640) {
            bgImage = "assets/destination/background-destination-tablet.jpg";
        } else {
            bgImage = "assets/destination/background-destination-mobile.jpg";
        }
    } else if (window.location.href.includes("crew")) {
        console.log("crew");
        if (document.body.offsetWidth >= 1280) {
            bgImage = "assets/crew/background-crew-desktop.jpg";
        } else if (document.body.offsetWidth >= 640) {
            bgImage = "assets/crew/background-crew-tablet.jpg";
        } else {
            bgImage = "assets/crew/background-crew-mobile.jpg";
        }
    } else if (window.location.href.includes("technology")) {
        console.log("technology");
        if (document.body.offsetWidth >= 1280) {
            bgImage = "assets/technology/background-technology-desktop.jpg";
        } else if (document.body.offsetWidth >= 640) {
            bgImage = "assets/technology/background-technology-tablet.jpg";
        } else {
            bgImage = "assets/technology/background-technology-mobile.jpg";
        }
    } else {
        console.log("home");
        if (document.body.offsetWidth >= 1280) {
            bgImage = "assets/home/background-home-desktop.jpg";
        } else if (document.body.offsetWidth >= 640) {
            bgImage = "assets/home/background-home-tablet.jpg";
        } else {
            bgImage = "assets/home/background-home-mobile.jpg";
        }
    }
    return (
        <Container $bgImage={bgImage}>
            <Header setIsUrlChanged={setIsUrlChanged} />
            <MyContext.Provider value={{ setIsUrlChanged, isUrlChanged }}>
                <Outlet />
            </MyContext.Provider>
        </Container>
    );
}

export default App;
