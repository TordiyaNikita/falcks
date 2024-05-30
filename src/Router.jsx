import { AboutUs } from './AboutUs.jsx';
import { Login } from './Login.jsx';
import { Leading } from './Leading.jsx';
import {
    createBrowserRouter,
} from "react-router-dom";
import { Reg } from './Reg.jsx';
import { Kurs } from './Kurs.jsx';
import { KursJs } from './components/Blocks/Kurs/Vvod/KursJs.jsx';
import { KursHtml } from './components/Blocks/Kurs/Vvod/KursHtml.jsx';
import { KursCSS } from './components/Blocks/Kurs/Vvod/KursCSS.jsx';

export function Route() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <Leading />,
        },
        {
            path: "/about-us",
            element: <AboutUs />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/registation",
            element: <Reg />,
        },
        {
            path: "/kurs",
            element: <Kurs />,
        },
        {
            path: "/kurs/js",
            element: <KursJs />,
        },
        {
            path: "/kurs/css",
            element: <KursCSS />,
        },
        {
            path: "/kurs/html",
            element: <KursHtml />,
        },

    ]);
    return route
}