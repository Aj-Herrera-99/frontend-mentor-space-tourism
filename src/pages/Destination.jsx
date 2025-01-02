import React, { useEffect } from "react";
import Main from "../components/Main";
import { Outlet, useNavigate } from "react-router-dom";

function Destination() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("moon");
    }, [navigate]);
    return (
        <>
            <Main classes="font-light tracking-widest uppercase">
                <div className="flex justify-center gap-3 sm:justify-start sm:pl-12">
                    <span className="font-bold">01</span>
                    <span>pick your destination</span>
                </div>
                <Outlet />
            </Main>
        </>
    );
}

export default Destination;
