import {IRoute} from "../interfaces/IRoute";
import Student from "../pages/student/Student";
import TeacherHome from "../pages/teacherHome/TeacherHome";
import Login from "../pages/login/Login";
import {Navigate} from "react-router-dom";
import StudentRegistration from "../pages/studentRegistration/StudentRegistration";
import TeacherKey from "../pages/teacherKey/TeacherKey";

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
        name: 'Панель преподавателя',
        path: '/teacher/home',
        element: <TeacherHome/>
    },
    {
        name: 'Панель преподавателя',
        path: '/teacher/lessons',
        element: <TeacherKey/>
    },
]