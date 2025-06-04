import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
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
import ServiceAviablity from "../pages/serviceAviablity/ServiceAviablity";
import Dashboard from "../layout/Dashboard";
import ManageImages from "../pages/dashboardPage/manageImages/ManageImages";
import ManageDates from "../pages/dashboardPage/manageDates/ManageDates";
import Transactions from "../pages/dashboardPage/transactions/Transactions";
import Feedbacks from "../pages/dashboardPage/feedbacks/Feedbacks";
import ChangePassword from "../pages/dashboardPage/settings/changePassword/ChangePassword";
import TermsAndConditions from "../pages/dashboardPage/settings/termsAndConditions/TermsAndConditions";
import CommonDashboard from "../pages/dashboardPage/commonDashboard/CommonDashboard";
import PrivacyAndPolicy from "../pages/dashboardPage/settings/privacyPolicy/PrivacyAndPolicy";
import Service from "../pages/service/Service";
import DashboardService from "../pages/dashboardPage/dashboardService/DashboardService";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import DashboardLogin from "../pages/dashboardPage/dashboardAuthentication/DashboardLogin";
import DashboardForgetPassword from "../pages/dashboardPage/dashboardAuthentication/DashboardForgetPassword";
import DashboardOtpCode from "../pages/dashboardPage/dashboardAuthentication/DashboardOtpCode";
import DashboardCreateNewPassword from "../pages/dashboardPage/dashboardAuthentication/DashboardCreateNewPassword";
import DashboardBookings from "../pages/dashboardPage/dashboardBookings/DashboardBookings";
import DashboardNotification from "../pages/dashboardPage/dashboardNotification/DashboardNotification";
import DashboardUsers from "../pages/dashboardPage/dashboardUsers/DashboardUsers";



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
        path: "/service-aviablity",
        element: <ServiceAviablity />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
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

  // dashboard routers =========================================
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/admin/dashboard",
        element: <CommonDashboard />
      },
      {
        path: "users",
        element: <DashboardUsers />
      },
      {
        path: "bookings",
        element: <DashboardBookings />
      },
      {
        path: "services",
        element: <DashboardService />
      },
      {
        path: "manage-images",
        element: <ManageImages />
      },
      {
        path: "manage-dates",
        element: <ManageDates />
      },
      {
        path: "transactions",
        element: <Transactions />
      },
      {
        path: "feedbacks",
        element: <Feedbacks />
      },
      {
        path: "change-password",
        element: <ChangePassword />
      },
      {
        path: "privacy&policy",
        element: <PrivacyAndPolicy />
      },
      {
        path: "terms-condition",
        element: <TermsAndConditions />
      },
      {
        path: "notifications",
        element: <DashboardNotification />
      },

    ]
  },

  // dashboard authentication routes =====================
  {
    path:"/admin/dashboard/login",
    element:<DashboardLogin />
  },
  {
    path:"/admin/dashboard/forget-password",
    element:<DashboardForgetPassword />
  },
  {
    path:"/admin/dashboard/otp-code",
    element:<DashboardOtpCode />
  },
  {
    path:"/admin/dashboard/create-new-password",
    element:<DashboardCreateNewPassword />
  },
]);

export default router;


