import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Main from "../components/Main";
import { MyContext } from "../App";

function Crew() {
    const { isUrlChanged } = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (window.location.href.includes("crew")) {
            navigate("anoushehansari");
        }
    }, [navigate, isUrlChanged]);
    return (
        <>
            <Main classes="font-light tracking-widest uppercase xl:!pb-0 xl:h-[86vh]">
                <div className="flex justify-center gap-3 sm:justify-start  xl:!w-full">
                    <span className="font-bold">02</span>
                    <span>meet your crew</span>
                </div>
                <Outlet />
            </Main>
        </>
    );
}

export default Crew;
