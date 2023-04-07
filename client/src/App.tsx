import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes";
import {useEffect} from "react";
import {useUserStore} from "./stores/user/user.store";
import {Layout} from "antd";
import {Sidebar} from "./modules/Sidebar";


function App() {
    const setUUID = useUserStore(state => state.setUUID)
    const isAuth = useUserStore(state => state.isAuth)
    useEffect(() => {
        setUUID()
    }, [])
    return (
        <Layout style={{height: "100vh"}}>
            {isAuth && <Sidebar/>}
            <RouterProvider router={createBrowserRouter(routes)}/>
        </Layout>
    )
}

export default App
