import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home", { replace: true });
    }, [navigate]);
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
