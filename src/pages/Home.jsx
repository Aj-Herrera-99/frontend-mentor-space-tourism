import React, { useContext } from "react";
import Main from "../components/Main";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

const ExploreBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 3rem;
    margin-inline: auto;
    margin-block: 3rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 300;
    color: black;
    background-color: white;
    border-radius: 50%;
    aspect-ratio: 1;
    width: fit-content;
    cursor: pointer;
    scale: 0.97;
    transition: all 1s ease;
    animation: anim 4s infinite linear;
    letter-spacing: 3px;
    @media (min-width: 768px) {
        margin-top: 6rem;
    }
    &:hover {
        scale: 1;
    }

    @keyframes anim {
        0% {
            box-shadow: 0 0 0 white;
        }
        50% {
            box-shadow: 0 0 40px white;
        }
        100% {
            box-shadow: 0 0 0 white;
        }
    }
`;

function Home() {
    const { setIsUrlChanged } = useContext(MyContext);
    return (
        <Main classes="uppercase !pt-[10rem]">
            <section>
                <p className="font-light tracking-wider sm:text-lg xl:text-2xl">
                    so, you want to travel to
                </p>
                <h1 className="py-5 font-light tracking-wide text-8xl sm:text-[10rem] sm:py-6">
                    space
                </h1>
                <p className="normal-case sm:text-lg sm:mx-28">
                    Let's face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you
                    a truly out of this world experience!
                </p>
            </section>
            <Link
                to="/destination/mars"
                onClick={() => setIsUrlChanged((curr) => !curr)}
            >
                <ExploreBtn>explore</ExploreBtn>
            </Link>
        </Main>
    );
}

export default Home;
