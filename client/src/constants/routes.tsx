import {IRoute} from "../interfaces/IRoute";
import Home from "../pages/Home";

export const routes: IRoute[] = [
    {
        name: 'Главная',
        path: '/',
        element: <Home/>
    }
]