import React from "react";
import Main from "../components/Main";
import { NavLink, Outlet, useParams } from "react-router-dom";
import data from "../data/data.json"

function Piece() {
    const { piece } = useParams();
    const pieceCurr = data.technology.find(
        (el) => el.name.replaceAll(" ", "").toLowerCase() === piece
    );
    // console.log(pieceCurr);
    return (
        <>
            <div className="h-[27vh] w-[100vw] -translate-x-[1rem] left-0 flex justify-center mt-8 mb-4">
                <img
                    src={`/${pieceCurr.images.landscape}`}
                    alt={pieceCurr.name}
                    className="object-cover w-full h-full "
                    loading="lazy"
                />
            </div>
            <section className="flex justify-center gap-8 my-8">
                <NavLink
                    to={`/technology/launchvehicle`}
                    className={({ isActive }) =>
                        "w-16  rounded-full aspect-square flex justify-center items-center text-3xl font-normal" +
                        (isActive ? "  text-black bg-white" : " text-gray-400")
                    }
                >
                    1
                </NavLink>
                <NavLink
                    to={`/technology/spaceport`}
                    className={({ isActive }) =>
                        "w-16  rounded-full aspect-square flex justify-center items-center text-3xl font-normal" +
                        (isActive ? "  text-black bg-white" : " text-gray-400")
                    }
                >
                    2
                </NavLink>
                <NavLink
                    to={`/technology/spacecapsule`}
                    className={({ isActive }) =>
                        "w-16  rounded-full aspect-square flex justify-center items-center text-3xl font-normal" +
                        (isActive ? "  text-black bg-white" : " text-gray-400")
                    }
                >
                    3
                </NavLink>
            </section>
            <section className="mt-8 mb-16">
                <span className="text-gray-400 uppercase">the terminology...</span>
                <h1 className="pb-4 text-3xl tracking-wide uppercase">
                    {pieceCurr.name}
                </h1>
                <p className="normal-case">{pieceCurr.description}</p>
            </section>
        </>
    );
}

export default Piece;
