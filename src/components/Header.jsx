import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

function Header({ setBgImage }) {
    const asideRef = useRef(null);
    const toggleDropdown = () => {
        asideRef.current.classList.toggle("!translate-x-0");
    };
    return (
        <header className="relative flex items-center justify-between p-4">
            <div className="h-[6vh]">
                <img
                    src="assets/shared/logo.svg"
                    alt="logo"
                    className="h-full transition-all scale-90 cursor-pointer hover:scale-100"
                />
            </div>
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
                className="absolute top-[8vh] right-0 w-3/5 bg-[#151724] rounded-l-lg font-light tracking-widest py-4 translate-x-[60vw] transition-all"
            >
                <NavLink
                    to="/home"
                    onClick={() => {
                        setBgImage("assets/home/background-home-mobile.jpg");
                        asideRef.current.classList.toggle("!translate-x-0");
                    }}
                    className={({ isActive }) =>
                        "flex gap-3 py-4 ml-4 mr-20 uppercase" +
                        (isActive ? " border-b-2" : "")
                    }
                >
                    <span className="font-bold">00</span>
                    <span>home</span>
                </NavLink>
                <NavLink
                    to="/destination"
                    onClick={() => {
                        setBgImage(
                            "assets/destination/background-destination-mobile.jpg"
                        );
                        asideRef.current.classList.toggle("!translate-x-0");
                    }}
                    className={({ isActive }) =>
                        "flex gap-3 py-4 ml-4 mr-20 uppercase" +
                        (isActive ? " border-b-2" : "")
                    }
                >
                    <span className="font-bold">01</span>
                    <span>destination</span>
                </NavLink>
                <NavLink
                    to="/crew"
                    onClick={() => {
                        setBgImage("assets/crew/background-crew-mobile.jpg");
                        asideRef.current.classList.toggle("!translate-x-0");
                    }}
                    className={({ isActive }) =>
                        "flex gap-3 py-4 ml-4 mr-20 uppercase" +
                        (isActive ? " border-b-2" : "")
                    }
                >
                    <span className="font-bold">03</span>
                    <span>crew</span>
                </NavLink>
                <NavLink
                    to="/technology"
                    onClick={() => {
                        setBgImage(
                            "assets/technology/background-technology-mobile.jpg"
                        );
                        asideRef.current.classList.toggle("!translate-x-0");
                    }}
                    className={({ isActive }) =>
                        "flex gap-3 py-4 ml-4 mr-20 uppercase" +
                        (isActive ? " border-b-2" : "")
                    }
                >
                    <span className="font-bold">04</span>
                    <span>technology</span>
                </NavLink>
            </aside>
        </header>
    );
}

export default Header;
