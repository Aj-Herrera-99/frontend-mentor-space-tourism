import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../data/data.json";

function Member() {
    const { member } = useParams();
    const memberCurr = data.crew.find(
        (el) => el.name.replaceAll(" ", "").toLowerCase() === member
    );
    console.log(memberCurr);
    return (
        <>
            <div className="h-[35vh] flex justify-center mt-8 mb-4">
                <img
                    src={`/${memberCurr.images.png}`}
                    alt={memberCurr.name}
                    className="h-full"
                    loading="lazy"
                />
            </div>
            <section className="flex justify-center gap-8 my-8">
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
            <section className="mt-8 mb-16">
                <h1 className="pb-4 tracking-wide uppercase">
                    <span className="text-xl">{memberCurr.role}</span> <br />
                    <span className="text-3xl">{memberCurr.name}</span>
                </h1>
                <p className="normal-case">{memberCurr.bio}</p>
            </section>
        </>
    );
}

export default Member;
