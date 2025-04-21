import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home"
import About from "../pages/About";
import Category from "../pages/Category";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: `/`,
                element: <Home />,
            },
            {
                path: `/about`,
                element: <About />,
            },
            {
                path: `/category`,
                element: <Category />,
            },
            {
                path: `/support`,
                element: <h1>Support</h1>,
            },
            {
                path: `*`,
                element: <h1>404</h1>,
            }
        ],
    },
]);

export default routes;