import React from "react";
import Main from "../components/Main";
import { Outlet } from "react-router-dom";

function Destination() {
    return (
        <>
            <Main classes="font-light tracking-widest uppercase">
                <div className="flex justify-center gap-3">
                    <span className="font-bold">01</span>
                    <span>pick your destination</span>
                </div>
                <Outlet />
            </Main>
        </>
    );
}

export default Destination;
