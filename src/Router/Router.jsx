import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Error from "../Component/ErrorPage/Error";
import SignIn from "../Component/user/SignIn";
import Register from "../Component/user/Register";
import GardenTips from "../Component/GardenTips/GardenTips";
import BrowseTips from "../Component/BrowserTips/BrowseTips";
import MyTips from "../Component/MyTips/MyTips";
import EXGradenars from "../Component/ExploreGardeners/EXGradenars";
import TipsDetails from "../Component/BrowserTips/TipsDetails";
import BrowseInfo from "../Component/BrowserTips/BrowseInfo";
import PrivateRout from "../Component/PrivteRoute/PrivateRout";
import UpdateTips from "../Component/MyTips/UpdateTips";
import MyTipsHome from "../Component/MyTips/MyTipsHome";


export const router = createBrowserRouter([
    {
        path: '/',
        loader: () => fetch('https://green-gardening-server.vercel.app/active-gardenars'),
        Component: HomeLayout,
        children:[
            {
                path:'/',
                loader: ()=> fetch('https://green-gardening-server.vercel.app/users')
            }
        ]
    },
    {
        path: '/gardenars',
        loader: () => fetch('https://green-gardening-server.vercel.app/gardenars'),
        Component: EXGradenars
    },
    {
        path: '/tips',
        Component: BrowseTips,
        children: [
            {
                index: true,
                path: '/tips',
                loader: () => fetch('https://green-gardening-server.vercel.app/tips'),
                Component: BrowseInfo
            },
            {
                path: '/tips/:id',
                loader: ({ params }) => fetch(`https://green-gardening-server.vercel.app/tips/${params.id}`),
                element: <PrivateRout>
                    <TipsDetails></TipsDetails>
                </PrivateRout>
            }
        ]
    },

    {
        path: '/sharegardeningtips',
        element: <PrivateRout>
            <GardenTips></GardenTips>
        </PrivateRout>
    },
    {
        path: '/mytips',
        element: <PrivateRout>
            <MyTipsHome></MyTipsHome>
        </PrivateRout>,
        children: [
            {
                index: true,
                path:'/mytips',
                loader: () => fetch('https://green-gardening-server.vercel.app/tips'),
                element: <PrivateRout>
                    <MyTips></MyTips>
                </PrivateRout>
            },
            {
                path:'/mytips/:id',
                loader: ({params}) => fetch(`https://green-gardening-server.vercel.app/tips/${params.id}`),
                element: <PrivateRout>
                    <UpdateTips></UpdateTips>
                </PrivateRout>
            }
        ]
    },
    // {
    //     path: '/mytips/details',
    //     element: <PrivateRout>
    //         <UpdateTips></UpdateTips>
    //     </PrivateRout>,
    // },
    {
        path: '/signin',
        Component: SignIn
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/*',
        Component: Error
    }
])