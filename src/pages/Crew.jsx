import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Main from '../components/Main';

function Crew() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("crew/anoushehansari");
    }, [navigate]);
    return (
        <>
            <Main classes="font-light tracking-widest uppercase">
                <div className="flex justify-center gap-3">
                    <span className="font-bold">02</span>
                    <span>meet your crew</span>
                </div>
                <Outlet />
            </Main>
        </>
    );
}

export default Crew