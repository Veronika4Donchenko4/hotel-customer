import {createBrowserRouter} from "react-router-dom";
import { LoginForm } from "../components/loginForm/Form";
import { Main } from "../components/mainPage/MainPage";
import Layoud from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
     element: <Main />,
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

