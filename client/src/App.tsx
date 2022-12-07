import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes";
import "./styles/global.css"

function App() {
    return <RouterProvider router={createBrowserRouter(routes)}/>
}

export default App
