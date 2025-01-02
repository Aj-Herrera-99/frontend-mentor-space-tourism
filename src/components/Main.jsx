import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
    padding-inline: 1rem;
    padding-top: 2rem;
    text-align: center;
`;

function Main({ classes, children }) {
    return <MainWrapper className={classes}>{children}</MainWrapper>;
}

export default Main;
