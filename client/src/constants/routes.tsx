import {IRoute} from "../interfaces/IRoute";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";

export const routes: IRoute[] = [
    {
        name: 'Главная',
        path: '/',
        element: <Home/>
    },
    {
        name: 'Админ панель',
        path: '/admin',
        element: <Admin/>
    },
]