import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Coverage from "../Pages/Coverage/Coverage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("./serviceCenter.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router
