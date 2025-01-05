import React, { useEffect, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../../data/data.json";

function Piece() {
    const { piece } = useParams();
    const imgRef = useRef(null);
    const pieceCurr = data.technology.find(
        (el) => el.name.replaceAll(" ", "").toLowerCase() === piece
    );
    useEffect(() => {
        if (imgRef.current) {
            if (document.body.offsetWidth >= 1280) {
                imgRef.current.src = pieceCurr.images.portrait;
            } else {
                imgRef.current.src = pieceCurr.images.landscape;
            }
        }
    });
    return (
        <>
            {pieceCurr && (
                <div className="xl:flex xl:!w-full xl:gap-12 xl:items-center">
                    <div className="h-[27vh] sm:h-[35vh] w-[100vw] -translate-x-[1rem] left-0 flex justify-center mt-8 mb-4 sm:my-12 xl:order-3 xl:h-[60vh] xl:w-fit xl:translate-x-[6rem] xl:justify-self-end xl:grow ">
                        <img
                            ref={imgRef}
                            // src={`${pieceCurr.images.landscape}`}
                            alt={pieceCurr.name}
                            className="object-cover w-full h-full xl:object-contain xl:object-right "
                            loading="eager"
                        />
                    </div>
                    <section className="flex justify-center gap-8 my-8 xl:order-1 xl:flex xl:flex-col">
                        <NavLink
                            to={`/technology/launchvehicle`}
                            className={({ isActive }) =>
                                "w-16  rounded-full aspect-square flex justify-center items-center text-3xl font-normal" +
                                (isActive
                                    ? "  text-black bg-white"
                                    : " text-gray-400")
                            }
                        >
                            1
                        </NavLink>
                        <NavLink
                            to={`/technology/spaceport`}
                            className={({ isActive }) =>
                                "w-16  rounded-full aspect-square flex justify-center items-center text-3xl font-normal" +
                                (isActive
                                    ? "  text-black bg-white"
                                    : " text-gray-400")
                            }
                        >
                            2
                        </NavLink>
                        <NavLink
                            to={`/technology/spacecapsule`}
                            className={({ isActive }) =>
                                "w-16  rounded-full aspect-square flex justify-center items-center text-3xl font-normal" +
                                (isActive
                                    ? "  text-black bg-white"
                                    : " text-gray-400")
                            }
                        >
                            3
                        </NavLink>
                    </section>
                    <section className="mt-8 mb-16 xl:order-2 xl:w-2/5 xl:text-start">
                        <span className="text-gray-400 uppercase">
                            the terminology...
                        </span>
                        <h1 className="pb-4 text-3xl tracking-wide uppercase">
                            {pieceCurr.name}
                        </h1>
                        <p className="normal-case">{pieceCurr.description}</p>
                    </section>
                </div>
            )}
        </>
    );
}

export default Piece;
