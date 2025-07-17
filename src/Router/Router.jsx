import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    }
])