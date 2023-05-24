import { IRoute } from '../interfaces/IRoute';
import { Navigate } from 'react-router-dom';
import { WithAuth } from '../modules/Auth';
import { Login, Registration, Student, TeacherHome, CreateVisit } from '../modules/Layout';

export const routes: IRoute[] = [
  {
    name: 'Главная',
    path: '/login',
    element: <Login />,
  },
  {
    name: 'Регистрация студента',
    path: '/registration/student',
    element: <Registration />,
  },
  {
    name: 'Отметиться на паре',
    path: '/student/',
    element: <WithAuth><Student /></WithAuth>,
    children: [
      {
        name: 'Отметиться на паре',
        path: ':key',
        element: <WithAuth><Student /></WithAuth>
      }
    ]
  },
  {
    name: 'Панель преподавателя',
    path: '/teacher/home',
    element: <WithAuth><TeacherHome /></WithAuth>,
  },
  {
    name: 'Панель преподавателя',
    path: '/teacher/lessons',
    element: <WithAuth><CreateVisit /></WithAuth>,
  },
  {
    name: 'Главная',
    path: '/',
    element: <Navigate to={'/login'} />,
  },
];