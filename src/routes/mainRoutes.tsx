import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/block/LayOut"
import HomeScreen from "../pages/HomeScreen"
import Talents from "../pages/Talents"

export const mainRoutes = createBrowserRouter([
    {
     path: "/",
     element: <LayOut />,
     children: [
        {
            index: true,
            element: <HomeScreen />
        },
        {
            path: "/talents",
            element: <Talents />
        }
     ]   
    }
])