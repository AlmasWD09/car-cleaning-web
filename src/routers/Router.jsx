import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";
import Pricing from "../pages/pricing/Pricing";
import CreateAccount from "../pages/authentication/createAccount/CreateAccount";
import Login from "../pages/authentication/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
