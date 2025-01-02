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
            <div className="h-[35vh] flex justify-center mt-8 mb-4">
                <img
                    src={`/${destination.images.png}`}
                    alt={destination.name}
                    className="h-full"
                    loading="lazy"
                />
            </div>
            <ul className="flex [&>*]:grow">
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
            <section className="mt-8 mb-16">
                <h1 className="pb-4 tracking-wide uppercase text-7xl">
                    {destination.name}
                </h1>
                <p className="normal-case">{destination.description}</p>
            </section>
            <section className="flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <span>avg. distance</span>
                    <span className="text-3xl">{destination.distance}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>est. travel time</span>
                    <span className="text-3xl">{destination.travel}</span>
                </div>
            </section>
        </>
    );
}

export default CelestialBody;
