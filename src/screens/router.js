import {createBrowserRouter} from "react-router-dom";
import { LoginForm } from "../components/loginForm/Form";
import { Main } from "../components/mainPage/MainPage";
import Layoud from "../components/Layout/Layout";
import Home from "./Home";



export const router = createBrowserRouter([
  {
    path: "/",
     element: <Home />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/layoud",
     element: <Layoud />,
  },
]);

