import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
        path: "/apps",
        element: <Apps/>
        },
        {
        path: "/installation",
        element: <Installation/>
        },
        {
        path: "/apps/:id",
        element: <AppDetails/>
        },
        {
        path: "*",
        element: <ErrorPage/>
        },
        
    ]
  },


]);
export default router