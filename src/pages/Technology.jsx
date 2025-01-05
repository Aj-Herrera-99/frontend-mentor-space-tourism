import React, { useContext, useEffect } from "react";
import Main from "../components/Main";
import { Outlet, useNavigate } from "react-router-dom";
import { MyContext } from "../App";

function Technology() {
    const { isUrlChanged } = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (window.location.href.includes("technology")) {
            navigate("launchvehicle");
        }
    }, [navigate, isUrlChanged]);
    return (
        <Main classes="font-light tracking-widest uppercase">
            <div className="flex justify-center gap-3 sm:justify-start xl:!w-full">
                <span className="font-bold">03</span>
                <span>space launch 101</span>
            </div>
            <Outlet />
        </Main>
    );
}

export default Technology;
