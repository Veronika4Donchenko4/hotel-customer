import {createBrowserRouter} from "react-router-dom";
import { LoginForm } from "../components/loginForm/Form";
import Rooms from "./Rooms/Rooms";
import RoomDetail from "./RoomDescrip";


// We have only 3 pages

export const router = createBrowserRouter([
  {
    path: "/login",
     element: <LoginForm/>,
  },
  {
    path: "/",
    element: <Rooms/>,
  },
  {
    path: "/room/:id",
     element: <RoomDetail />,
  },
]);

