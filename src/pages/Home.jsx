import React from "react";
import Main from "../components/Main";
import styled from "styled-components";

const ExploreBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 3rem;
    margin-inline: auto;
    margin-top: 3rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 300;
    color: black;
    background-color: white;
    border-radius: 50%;
    aspect-ratio: 1;
    width: fit-content;
    cursor: pointer;
    scale: .97;
    transition: all 1s ease;
    @media (min-width: 768px) {
        margin-top: 6rem;
    }
    &:hover {
        animation: anim 3s infinite linear;
        scale: 1;
    }

    @keyframes anim {
        0% {
            box-shadow: 0 0 0 white;
        }
        50% {
            box-shadow: 0 0 30px white;
        }
        100% {
            box-shadow: 0 0 0 white;
        }
    }
`;

function Home() {
    return (
        <Main classes="uppercase !pt-[10rem]">
            <p className="sm:text-lg">so, you want to travel to</p>
            <h1 className="py-5 font-light tracking-wide text-8xl sm:text-[10rem] sm:py-6">space</h1>
            <p className="normal-case sm:text-lg sm:mx-28">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience!
            </p>
            <ExploreBtn>explore</ExploreBtn>
        </Main>
    );
}

export default Home;
