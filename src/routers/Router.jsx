import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";
import Pricing from "../pages/pricing/Pricing";
import CreateAccount from "../pages/authentication/createAccount/CreateAccount";
import Login from "../pages/authentication/login/Login";
import ForgetPassword from "../pages/authentication/forgetPassword/ForgetPassword";
import OtpCode from "../pages/authentication/otpCode/OtpCode";
import CreateNewPassword from "../pages/authentication/createNewPassword/CreateNewPassword";
import PasswordSuccessfully from "../pages/authentication/passwordSuccessfully/PasswordSuccessfully";

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
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/otp-code",
        element: <OtpCode/>,
      },
      {
        path: "/create-new-password",
        element: <CreateNewPassword/>,
      },
      {
        path: "/password-successfull",
        element: <PasswordSuccessfully/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
