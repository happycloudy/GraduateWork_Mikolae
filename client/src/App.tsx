import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes";
import {useEffect} from "react";
import {useUserStore} from "./stores/user/user.store";
import {Layout, notification} from "antd";
import {usersService} from "./services/users/users.service";


function App() {
    const setUUID = useUserStore(state => state.setUUID)
    const logout = useUserStore(state => state.logout)
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (title: string = 'Неизвестная ошибка') => api.error({message: title});

    useEffect(() => {
        setUUID()
        usersService.checkAuth().catch(err => {
            console.dir(err)
            openNotificationWithIcon('Авторизация закончилась, авторизуйтесь снова')
            logout()
        })
    }, [])

    return (
        <Layout style={{height: "100vh"}}>
            {contextHolder}
            <RouterProvider router={createBrowserRouter(routes)}/>
        </Layout>
    )
}

export default App
