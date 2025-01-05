import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../../data/data.json";

function CelestialBody() {
    const { celestialBody } = useParams();
    const destination = data.destinations.find(
        (destination) => destination.name.toLowerCase() === celestialBody
    );

    return (
        <>
            {destination && (
                <>
                    <div className="h-[35vh] flex justify-center mt-8 mb-4 xl:h-[60vh] xl:mt-12">
                        <img
                            src={`${destination.images.png}`}
                            alt={destination.name}
                            className="h-full"
                            loading="eager"
                        />
                    </div>
                    <div className="xl:px-16 xl:[&>*]:text-start">
                        <ul className="flex [&>*]:grow sm:justify-center sm:[&>*]:grow-0 sm:gap-12 mt-6 xl:justify-start">
                            <li>
                                <NavLink
                                    to={`/destination/moon`}
                                    className={({ isActive }) =>
                                        "py-1" + (isActive ? " border-b-2" : "")
                                    }
                                >
                                    moon
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/destination/mars`}
                                    className={({ isActive }) =>
                                        "py-1" + (isActive ? " border-b-2" : "")
                                    }
                                >
                                    mars
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/destination/europa`}
                                    className={({ isActive }) =>
                                        "py-1" + (isActive ? " border-b-2" : "")
                                    }
                                >
                                    europa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/destination/titan`}
                                    className={({ isActive }) =>
                                        "py-1" + (isActive ? " border-b-2" : "")
                                    }
                                >
                                    titan
                                </NavLink>
                            </li>
                        </ul>
                        <section className="mt-8 mb-16 xl:mb-0">
                            <h1 className="pb-4 tracking-wide uppercase text-7xl">
                                {destination.name}
                            </h1>
                            <p className="normal-case sm:mx-28 sm:text-lg xl:mx-0">
                                {destination.description}
                            </p>
                        </section>
                        <div className="hidden h-1 mt-12 mb-4 bg-white xl:block opacity-10"></div>
                        <section className="flex flex-col gap-12 mb-8 xl:flex-row">
                            <div className="flex flex-col gap-2">
                                <span>avg. distance</span>
                                <span className="text-3xl">
                                    {destination.distance}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span>est. travel time</span>
                                <span className="text-3xl">
                                    {destination.travel}
                                </span>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </>
    );
}

export default CelestialBody;
