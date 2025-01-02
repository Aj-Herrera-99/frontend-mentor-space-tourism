import React from "react";
import Main from "../components/Main";

function Home() {
    return (
        <Main>
            <p className="uppercase">so, you want to travel to</p>
            <h1 className="py-5 font-light tracking-wide uppercase text-8xl">
                space
            </h1>
            <p>
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience!
            </p>
            <div className="flex items-center justify-between px-12 mx-auto mt-12 text-3xl font-light text-black uppercase bg-white rounded-full aspect-square w-fit">
                explore
            </div>
        </Main>
    );
}

export default Home;
