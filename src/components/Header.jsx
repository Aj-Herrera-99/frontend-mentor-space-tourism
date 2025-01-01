import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="relative flex items-center justify-between p-4">
            <div className="h-[6vh]">
                <img
                    src="assets/shared/logo.svg"
                    alt="logo"
                    className="h-full"
                />
            </div>
            <div className="h-[6vh] flex items-center">
                <img
                    src="assets/shared/icon-hamburger.svg"
                    alt="icon-hamburger"
                    className="h-3/5"
                />
            </div>
            <aside className="absolute top-[10vh] right-0 w-3/5 bg-[#151724] rounded-l-lg font-light tracking-widest py-4">
                <NavLink
                    to="/home"
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
