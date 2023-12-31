import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import MainContent from "../Components/MainContent";
import Error from "../Components/Error";
import Chefs from "../Components/Chefs";
import Chef from "../Components/Chef";
import Details from "../Components/Details";
import Blog from "../Components/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <MainContent />,
                loader: () => fetch('https://recipies-mehetaj.vercel.app/chefs')
            },
            {
                path: ':id',
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://recipies-mehetaj.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path : '/blogs',
                element : <Blog/>
            }
        ],

    },
    {

        path: '*',
        element: <Error />

    }
])

export default router;