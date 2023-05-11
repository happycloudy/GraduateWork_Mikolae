import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes";
import {useEffect} from "react";
import {useUserStore} from "./stores/user/user.store";
import {Layout, notification, Row} from "antd";
import {usersService} from "./services/users/users.service";
import {isValidAddress} from "./modules/Geo";


function App() {
    const setUUID = useUserStore(state => state.setUUID)
    const isLocationAccessed = useUserStore(state => state.isLocationAccessed)
    const logout = useUserStore(state => state.logout)
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (title: string = 'Неизвестная ошибка') => api.error({message: title});


    useEffect(() => {
        setUUID()
        usersService.checkAuth().catch(err => {
            openNotificationWithIcon('Авторизация закончилась, авторизуйтесь снова')
            logout()
        })

        isValidAddress().then(validPlace => {
            if (!validPlace) {
                openNotificationWithIcon('Вы находитесь не в университете, вход невозможен')
            }
        })
    }, [])

    return (
        <Layout style={{height: "100vh"}}>
            {contextHolder}
            {
                !!import.meta.env.VITE_IGNORE_LOCATION || isLocationAccessed ?
                    <RouterProvider router={createBrowserRouter(routes)}/> :
                    <Row align={'middle'} justify={'center'} style={{height: '100vh', width: '100vw'}}>
                        Попробуйте зайти на сайт с другого места
                    </Row>
            }
        </Layout>
    )
}

export default App
