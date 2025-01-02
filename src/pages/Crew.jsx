import React from 'react'
import { Outlet } from 'react-router-dom';
import Main from '../components/Main';

function Crew() {
    return (
        <>
            <Main classes="font-light tracking-widest uppercase">
                <div className="flex justify-center gap-3 sm:justify-start sm:pl-12">
                    <span className="font-bold">02</span>
                    <span>meet your crew</span>
                </div>
                <Outlet />
            </Main>
        </>
    );
}

export default Crew