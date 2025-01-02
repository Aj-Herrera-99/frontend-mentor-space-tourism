import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createHashRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";
import CelestialBody from "./pages/CelestialBody.jsx";
import Member from "./pages/Member.jsx";
import Piece from "./pages/Piece.jsx";

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
                        element: <Member/>
                    }
                ]
            },
            {
                path: "/technology",
                element: <Technology />,
                children: [
                    {
                        path:":piece",
                        element: <Piece/>
                    }
                ]
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    // <StrictMode>
        <RouterProvider router={router} />
    // </StrictMode>
);
