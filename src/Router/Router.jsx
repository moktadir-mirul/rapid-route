import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage.jsx/ErrorPage";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        children: [
            {
                index: true,
                Component: App
            },
            {
                path:"/dashboard",
                Component: Dashboard
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
])