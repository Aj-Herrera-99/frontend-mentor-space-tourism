import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
    padding-inline: 1rem;
    padding-top: 2rem;
    text-align: center;
    @media (min-width: 768px) {
        padding-top: 3rem;
        padding-inline: 3rem;
    }
    @media (min-width: 1280px) {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 3rem;
        padding-inline: 6rem;
        text-align: start;
        & > * {
            width: 50%;
        }
    }
`;

function Main({ classes, children }) {
    return <MainWrapper className={classes}>{children}</MainWrapper>;
}

export default Main;
