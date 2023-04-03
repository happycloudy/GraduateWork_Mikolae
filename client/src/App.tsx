import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes";
import {useEffect} from "react";
import {useUsersStore} from "./stores/students/students.store";


function App() {
    const setUUID = useUsersStore(state => state.setUUID)
    useEffect(() => {
        setUUID()
    }, [])
    return <RouterProvider router={createBrowserRouter(routes)}/>
}

export default App
