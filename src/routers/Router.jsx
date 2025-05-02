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
import About from "../pages/about/About";
import PhotoGallery from "../pages/photoGallery/PhotoGallery";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/termsConditions/TermsConditions";
import ServiceBook from "../pages/serviceBook/ServiceBook";
import UserProfile from "../pages/profile/UserProfile";
import EditUserProfile from "../pages/profile/EditUserProfile";
import Notification from "../pages/notification/Notification";
import Support from "../pages/support/Support";

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
        path: "/about",
        element: <About />,
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
        path: "/photo-gallery",
        element: <PhotoGallery />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-condition",
        element: <TermsConditions />,
      },
      {
        path: "/service-book",
        element: <ServiceBook />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/edit-user-profile",
        element: <EditUserProfile />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/support",
        element: <Support />,
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
        element: <OtpCode />,
      },
      {
        path: "/create-new-password",
        element: <CreateNewPassword />,
      },
      {
        path: "/password-successfull",
        element: <PasswordSuccessfully />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
