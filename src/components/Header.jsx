import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1280px) {
        margin-left: 1.5rem;
        margin-top: 1.5rem;
    }
`;

function Header({ setIsUrlChanged }) {
    const asideRef = useRef(null);
    const imgRef = useRef(null);
    const toggleDropdown = () => {
        asideRef.current.classList.toggle("!translate-x-0");
        if (imgRef) {
            if (imgRef.current.src.includes("hamburger")) {
                imgRef.current.src = "assets/shared/icon-close.svg";
            } else {
                imgRef.current.src = "assets/shared/icon-hamburger.svg";
            }
        }
    };
    const goToAnotherPage = () => {
        setIsUrlChanged((curr) => !curr);
        asideRef.current.classList.toggle("!translate-x-0");
        imgRef.current.src = "assets/shared/icon-hamburger.svg";
    };
    return (
        <HeaderComp>
            <div className="h-[6vh] pl-4">
                <img
                    src="assets/shared/logo.svg"
                    alt="logo"
                    className="h-full transition-all scale-90 cursor-pointer hover:scale-100"
                />
            </div>

            <div className="relative z-10 hidden w-2/5 h-1 bg-white opacity-10 xl:block left-8"></div>

            <aside
                ref={asideRef}
                className=" bg-[#15172470] font-light tracking-widest pt-6 backdrop-blur-md hidden sm:flex rounded-md xl:pt-3 xl:grow xl:pl-16"
            >
                <NavLink
                    to="/"
                    onClick={goToAnotherPage}
                    className={({ isActive }) =>
                        "flex gap-3 m-4 mb-0 pb-10 xl:pb-6   uppercase" +
                        (isActive ? " border-b-4" : "")
                    }
                >
                    <span className="font-bold">00</span>
                    <span>home</span>
                </NavLink>
                <NavLink
                    to="/destination"
                    onClick={goToAnotherPage}
                    className={({ isActive }) =>
                        "flex gap-3 m-4 mb-0 pb-10 xl:pb-6 uppercase" +
                        (isActive ? " border-b-4" : "")
                    }
                >
                    <span className="font-bold">01</span>
                    <span>destination</span>
                </NavLink>
                <NavLink
                    to="/crew"
                    onClick={goToAnotherPage}
                    className={({ isActive }) =>
                        "flex gap-3 m-4 mb-0 pb-10 xl:pb-6 uppercase" +
                        (isActive ? " border-b-4" : "")
                    }
                >
                    <span className="font-bold">02</span>
                    <span>crew</span>
                </NavLink>
                <NavLink
                    to="/technology"
                    onClick={goToAnotherPage}
                    className={({ isActive }) =>
                        "flex gap-3 m-4 mb-0 pb-10 xl:pb-6 uppercase" +
                        (isActive ? " border-b-4" : "")
                    }
                >
                    <span className="font-bold">03</span>
                    <span>technology</span>
                </NavLink>
            </aside>

            <div className="pr-4 mt-4 sm:hidden">
                <div className="h-[6vh] flex items-center">
                    <img
                        ref={imgRef}
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
                        to="/destination"
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
                        to="/crew"
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
                        to="/technology"
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
