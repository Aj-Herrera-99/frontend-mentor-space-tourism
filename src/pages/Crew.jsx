import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Main from '../components/Main';

function Crew() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("anoushehansari");
    }, [navigate]);
    return (
        <>
            <Main classes="font-light tracking-widest uppercase xl:!pb-0 xl:h-[86vh]">
                <div className="flex justify-center gap-3 sm:justify-start sm:pl-12 xl:!w-full">
                    <span className="font-bold">02</span>
                    <span>meet your crew</span>
                </div>
                <Outlet />
            </Main>
        </>
    );
}

export default Crew