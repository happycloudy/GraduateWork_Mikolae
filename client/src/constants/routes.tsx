import {IRoute} from "../interfaces/IRoute";
import Student from "../pages/student/Student";
import Admin from "../pages/admin/Admin";
import Login from "../pages/login/Login";
import {Navigate} from "react-router-dom";
import StudentRegistration from "../pages/studentRegistration/StudentRegistration";

export const routes: IRoute[] = [
    {
        name: 'Отметиться на паре',
        path: '/student',
        element: <Student/>
    },
    {
        name: 'Главная',
        path: '/login',
        element: <Login/>
    },
    {
        name: 'Главная',
        path: '/',
        element: <Navigate to={'/login'}/>
    },
    {
        name: 'Регистрация студента',
        path: '/registration/student',
        element: <StudentRegistration/>
    },
    {
        name: 'Админ панель',
        path: '/admin',
        element: <Admin/>
    },
]