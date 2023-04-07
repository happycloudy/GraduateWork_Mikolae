import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes";
import {useEffect} from "react";
import {useUserStore} from "./stores/user/user.store";
import {Layout} from "antd";


function App() {
    const setUUID = useUserStore(state => state.setUUID)

    useEffect(() => {
        setUUID()
    }, [])
    return (
        <Layout style={{height: "100vh"}}>
            <RouterProvider router={createBrowserRouter(routes)}/>
        </Layout>
    )
}

export default App
