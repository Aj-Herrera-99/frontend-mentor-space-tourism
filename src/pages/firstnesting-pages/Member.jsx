import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../../data/data.json";

function Member() {
    const { member } = useParams();
    const memberCurr = data.crew.find(
        (el) => el.name.replaceAll(" ", "").toLowerCase() === member
    );
    return (
        <>
            <div className="flex flex-col sm:flex-col-reverse xl:flex-row-reverse xl:[&>*]:w-1/2 xl:!w-full xl:grow xl:items-stretch">
                <div className="h-[35vh] sm:h-[47vh] flex justify-center mt-8 mb-4 sm:mb-0 xl:m-0 xl:h-auto  ">
                    <img
                        src={`${memberCurr.images.png}`}
                        alt={memberCurr.name}
                        className="object-bottom h-full xl:w-4/5 xl:object-contain"
                        loading="eager"
                    />
                </div>
                <div className="sm:flex-col-reverse sm:flex xl:justify-center">
                    <section className="flex justify-center gap-8 my-8 sm:my-4">
                        <NavLink
                            to={`/crew/douglashurley`}
                            className={({ isActive }) =>
                                "w-4 bg-white rounded-full opacity-40 aspect-square" +
                                (isActive ? " !opacity-100" : "")
                            }
                        ></NavLink>
                        <NavLink
                            to={`/crew/markshuttleworth`}
                            className={({ isActive }) =>
                                "w-4 bg-white rounded-full opacity-40 aspect-square" +
                                (isActive ? " !opacity-100" : "")
                            }
                        ></NavLink>
                        <NavLink
                            to={`/crew/victorglover`}
                            className={({ isActive }) =>
                                "w-4 bg-white rounded-full opacity-40 aspect-square" +
                                (isActive ? " !opacity-100" : "")
                            }
                        ></NavLink>
                        <NavLink
                            to={`/crew/anoushehansari`}
                            className={({ isActive }) =>
                                "w-4 bg-white rounded-full opacity-40 aspect-square" +
                                (isActive ? " !opacity-100" : "")
                            }
                        ></NavLink>
                    </section>
                    <section className="mt-8 mb-16 sm:mb-8">
                        <h1 className="pb-4 tracking-wide uppercase">
                            <span className="text-xl sm:text-3xl">{memberCurr.role}</span>{" "}
                            <br />
                            <span className="block text-3xl sm:text-6xl sm:py-4">{memberCurr.name}</span>
                        </h1>
                        <p className="normal-case sm:mx-28 sm:text-lg xl:mx-0">
                            {memberCurr.bio}
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Member;
