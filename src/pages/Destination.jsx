import React, { useContext, useEffect } from "react";
import Main from "../components/Main";
import { Outlet, useNavigate } from "react-router-dom";
import { MyContext } from "../App";

function Destination() {
    const { isUrlChanged } = useContext(MyContext);

    const navigate = useNavigate();
    useEffect(() => {
        if (window.location.href.includes("destination")) {
            navigate("mars");
        }
    }, [navigate, isUrlChanged]);
    return (
        <>
            <Main classes="font-light tracking-widest uppercase">
                <div className="flex justify-center gap-3 sm:justify-start xl:min-w-[100vw]">
                    <span className="font-bold">01</span>
                    <span>pick your destination</span>
                </div>
                <Outlet />
            </Main>
        </>
    );
}

export default Destination;
