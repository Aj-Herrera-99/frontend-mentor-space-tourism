import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";
import CelestialBody from "./pages/firstnesting-pages/CelestialBody.jsx";
import Member from "./pages/firstnesting-pages/Member.jsx";
import Piece from "./pages/firstnesting-pages/Piece.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/destination",
                element: <Destination />,
                children: [
                    {
                        path: ":celestialBody",
                        element: <CelestialBody />,
                    },
                ],
            },

            {
                path: "/crew",
                element: <Crew />,
                children: [
                    {
                        path: ":member",
                        element: <Member />,
                    },
                ],
            },
            {
                path: "/technology",
                element: <Technology />,
                children: [
                    {
                        path: ":piece",
                        element: <Piece />,
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
