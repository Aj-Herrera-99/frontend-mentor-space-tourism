import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Header({ setIsUrlChanged }) {
    const asideRef = useRef(null);
    const toggleDropdown = () => {
        asideRef.current.classList.toggle("!translate-x-0");
    };
    const goToAnotherPage = () => {
        setIsUrlChanged((curr) => !curr);
        asideRef.current.classList.toggle("!translate-x-0");
    };
    return (
        <HeaderComp>
            <div className="h-[6vh] pl-4 mt-4">
                <img
                    src="assets/shared/logo.svg"
                    alt="logo"
                    className="h-full transition-all scale-90 cursor-pointer hover:scale-100"
                />
            </div>

            <aside
                ref={asideRef}
                className=" bg-[#151724dd] font-light tracking-widest pt-6 backdrop-blur-md hidden sm:flex rounded-md"
            >
                <NavLink
                    to="/"
                    onClick={goToAnotherPage}
                    className={({ isActive }) =>
                        "flex gap-3 m-4 mb-0 pb-10  uppercase" +
                        (isActive ? " border-b-4" : "")
                    }
                >
                    <span>home</span>
                </NavLink>
                <NavLink
                    to="/destination/moon"
                    onClick={goToAnotherPage}
                    className={({ isActive }) =>
                        "flex gap-3 m-4 mb-0 pb-10 uppercase" +
                        (isActive ? " border-b-4" : "")
                    }
                >
                    <span>destination</span>
                </NavLink>
                <NavLink
                    to="/crew/anoushehansari"
                    onClick={goToAnotherPage}
                    className={({ isActive }) =>
                        "flex gap-3 m-4 mb-0 pb-10 uppercase" +
                        (isActive ? " border-b-4" : "")
                    }
                >
                    <span>crew</span>
                </NavLink>
                <NavLink
                    to="/technology/launchvehicle"
                    onClick={goToAnotherPage}
                    className={({ isActive }) =>
                        "flex gap-3 m-4 mb-0 pb-10 uppercase" +
                        (isActive ? " border-b-4" : "")
                    }
                >
                    <span>technology</span>
                </NavLink>
            </aside>

            <div className="pr-4 mt-4 sm:hidden">
                <div className="h-[6vh] flex items-center">
                    <img
                        src="assets/shared/icon-hamburger.svg"
                        alt="icon-hamburger"
                        className="transition-all scale-90 cursor-pointer h-3/5 hover:scale-100"
                        onClick={toggleDropdown}
                    />
                </div>
                <aside
                    ref={asideRef}
                    className="absolute top-[8vh] right-0 w-3/5 bg-[#151724dd] rounded-l-lg font-light tracking-widest py-4 translate-x-[60vw] transition-all z-10 backdrop-blur-md"
                >
                    <NavLink
                        to="/"
                        onClick={goToAnotherPage}
                        className={({ isActive }) =>
                            "flex gap-3 py-4 ml-4 mr-16 uppercase" +
                            (isActive ? " border-b-2" : "")
                        }
                    >
                        <span className="font-bold">00</span>
                        <span>home</span>
                    </NavLink>
                    <NavLink
                        to="/destination/moon"
                        onClick={goToAnotherPage}
                        className={({ isActive }) =>
                            "flex gap-3 py-4 ml-4 mr-16 uppercase" +
                            (isActive ? " border-b-2" : "")
                        }
                    >
                        <span className="font-bold">01</span>
                        <span>destination</span>
                    </NavLink>
                    <NavLink
                        to="/crew/anoushehansari"
                        onClick={goToAnotherPage}
                        className={({ isActive }) =>
                            "flex gap-3 py-4 ml-4 mr-16 uppercase" +
                            (isActive ? " border-b-2" : "")
                        }
                    >
                        <span className="font-bold">03</span>
                        <span>crew</span>
                    </NavLink>
                    <NavLink
                        to="/technology/launchvehicle"
                        onClick={goToAnotherPage}
                        className={({ isActive }) =>
                            "flex gap-3 py-4 ml-4 mr-16 uppercase" +
                            (isActive ? " border-b-2" : "")
                        }
                    >
                        <span className="font-bold">04</span>
                        <span>technology</span>
                    </NavLink>
                </aside>
            </div>
        </HeaderComp>
    );
}

export default Header;
