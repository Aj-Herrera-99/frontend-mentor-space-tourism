import React, { useEffect } from "react";
import Main from "../components/Main";
import { Outlet, useNavigate } from "react-router-dom";

function Technology() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("launchvehicle");
    }, [navigate]);
    return (
        <Main classes="font-light tracking-widest uppercase">
            <div className="flex justify-center gap-3 sm:justify-start sm:pl-12">
                <span className="font-bold">03</span>
                <span>space launch 101</span>
            </div>
            <Outlet />
        </Main>
    );
}

export default Technology;
