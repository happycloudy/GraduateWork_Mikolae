import {IRoute} from "../interfaces/IRoute";
import Student from "../pages/student/Student";
import TeacherHome from "../pages/teacherHome/TeacherHome";
import Login from "../pages/login/Login";
import {Navigate} from "react-router-dom";
import StudentRegistration from "../pages/studentRegistration/StudentRegistration";
import TeacherKey from "../pages/teacherKey/TeacherKey";
import {AuthRoute} from "../modules/Auth";

export const routes: IRoute[] = [
    {
        name: 'Главная',
        path: '/login',
        element: <Login/>
    },
    {
        name: 'Регистрация студента',
        path: '/registration/student',
        element: <StudentRegistration/>
    },
    {
        name: 'Отметиться на паре',
        path: '/student',
        element: <AuthRoute><Student/></AuthRoute>
    },
    {
        name: 'Панель преподавателя',
        path: '/teacher/home',
        element: <AuthRoute><TeacherHome/></AuthRoute>
    },
    {
        name: 'Панель преподавателя',
        path: '/teacher/lessons',
        element: <AuthRoute><TeacherKey/></AuthRoute>
    },
    {
        name: 'Главная',
        path: '/',
        element: <Navigate to={'/login'}/>
    },
]