import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import CustomContainer from "../CustomContainer";
import { TfiClose } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isCreateAccountRoute = location.pathname === "/create-account";

  // Background color change on scroll
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 32) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <nav>
      <div className="font-degular bg-[#f6f6f6]">
        <div
          className={`hidden lg:flex py-2 transition-all duration-700 ${
            navbar ? "fixed top-0 left-0 right-0 z-50 bg-[#f6f6f6]" : "relative"
          }`}
        >
          <CustomContainer>
            {/* large devie */}
            <div className=" lg:flex justify-between items-center  ">
              <div onClick={handleNavigate} className="cursor-pointer">
                <img src="/logo1.png" alt="" />
              </div>
              <div
                className={`flex justify-end items-center rounded-full space-x-20 font-medium text-[20px] pl-6 ${
                  navbar ? "bg-[#f6f6f6]" : "bg-[#ffffff]"
                }`}
              >
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-primary font-bold"
                      : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-primary font-bold"
                      : ""
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/pricing"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-primary font-bold"
                      : ""
                  }
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/photo-gallery"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-primary font-bold"
                      : ""
                  }
                >
                  Photo Gallery
                </NavLink>

                <div className="p-2">
                  <button className="text-[#ffffff] text-[20px] font-semibold bg-primary rounded-full py-4 px-[57px]">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center gap-8">
                <span className="bg-primary rounded-full p-4">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.645 19.4437C5.86103 20.1824 6.30417 20.8302 6.90858 21.2907C7.513 21.7513 8.24645 22 9 22C9.75355 22 10.487 21.7513 11.0914 21.2907C11.6958 20.8302 12.139 20.1824 12.355 19.4437H5.645ZM0 18.4203H18V15.3503L16 12.2802V7.16345C16 6.22273 15.8189 5.29123 15.4672 4.42212C15.1154 3.55301 14.5998 2.76331 13.9497 2.09813C13.2997 1.43294 12.5281 0.905282 11.6788 0.545285C10.8295 0.185288 9.91925 0 9 0C8.08075 0 7.17049 0.185288 6.32122 0.545285C5.47194 0.905282 4.70026 1.43294 4.05025 2.09813C3.40024 2.76331 2.88463 3.55301 2.53284 4.42212C2.18106 5.29123 2 6.22273 2 7.16345V12.2802L0 15.3503V18.4203Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <button
                  className={`${
                    isCreateAccountRoute
                      ? "border border-gray-600 py-4 px-8 rounded-full"
                      : "flex items-center rounded-full gap-2 p-4 bg-primary"
                  }`}
                >
                  {isCreateAccountRoute ? (
                    <p className="text-[20px] font-semibold tracking-wider flex items-center gap-2">
                      Have an account?
                      <Link to="/login">Login</Link>
                    </p>
                  ) : (
                    <>
                      <span
                        onClick={() => handleCreateAccount()}
                        className="flex items-center bg-primary rounded-full gap-2"
                      >
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 0C9.56087 0 10.5783 0.421427 11.3284 1.17157C12.0786 1.92172 12.5 2.93913 12.5 4C12.5 5.06087 12.0786 6.07828 11.3284 6.82843C10.5783 7.57857 9.56087 8 8.5 8C7.43913 8 6.42172 7.57857 5.67157 6.82843C4.92143 6.07828 4.5 5.06087 4.5 4C4.5 2.93913 4.92143 1.92172 5.67157 1.17157C6.42172 0.421427 7.43913 0 8.5 0ZM8.5 10C12.92 10 16.5 11.79 16.5 14V16H0.5V14C0.5 11.79 4.08 10 8.5 10Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-[#ffffff] text-[20px] font-semibold tracking-wider">
                          Create your account
                        </p>
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </CustomContainer>
        </div>

        {/* =============== small and medium device start ==========*/}
        <div className="fixed w-full top-0 inset-0 z-40 lg:hidden">
          <div className="bg-[#f6f6f6] py-4 md:py-2  text-center w-full flex items-center justify-between px-4">
            <div onClick={handleNavigate} className="cursor-pointer">
              {/* small device image */}
              <img
                src="/smallCarLogo.png"
                alt=""
                className="w-full h-full object-cover md:hidden"
              />

              {/* medium device image */}
              <img
                src="/mediumCarLogo.png"
                alt=""
                className="w-full h-full object-cover hidden md:block"
              />
              {/* dfsofks;kfspkf */}
            </div>
            <div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="border border-gray-700 rounded-lg px-3 py-[6px] transition-all ease-in-out duration-300"
              >
                {menuOpen ? (
                  <TfiClose className="text-2xl" />
                ) : (
                  <VscMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Sidebar (Mobile Menu) */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 p-4 bg-[#f6f6f6] shadow-lg z-[200] transition-transform overflow-y-auto ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <TfiClose className="text-2xl" />
            </button>
            <div className="flex flex-col space-y-4 mt-8">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-primary font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-primary font-bold"
                    : ""
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-primary font-bold"
                    : ""
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to="/photo-gallery"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-primary font-bold"
                    : ""
                }
              >
                Photo Gallery
              </NavLink>
              {/* Signup Button */}
              <div className="bg-secondery/50 rounded-md py-3">
                <div className="flex items-center gap-4">
                  <Link to="/create-account">
                    <button className=" bg-primary w-[180px] h-[48px] flex justify-center items-center gap-1 rounded-[4px] text-[16px] text-[#FFFFFF] font-bold">
                      <h2 className="font-roboto font-bold pt-2">
                        Create an Account
                      </h2>
                      <span className="h-[20px]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.666 5C16.666 4.53976 16.2929 4.16667 15.8327 4.16667C15.3724 4.16667 14.9994 4.53976 14.9994 5V8.33333C14.9994 8.79357 15.3724 9.16667 15.8327 9.16667C16.2929 9.16667 16.666 8.79357 16.666 8.33333V5Z"
                            fill="white"
                          />
                          <path
                            d="M17.4994 5.83333H14.166C13.7058 5.83333 13.3327 6.20643 13.3327 6.66667C13.3327 7.1269 13.7058 7.5 14.166 7.5H17.4994C17.9596 7.5 18.3327 7.1269 18.3327 6.66667C18.3327 6.20643 17.9596 5.83333 17.4994 5.83333Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.16602 11.6667C4.16602 10.7458 4.91768 10 5.84018 10H12.4918C13.4169 10 14.166 10.745 14.166 11.6717V15.3717C14.166 18.2092 4.16602 18.2092 4.16602 15.3717V11.6667Z"
                            fill="white"
                          />
                          <path
                            d="M9.16602 9.16667C11.007 9.16667 12.4993 7.67428 12.4993 5.83333C12.4993 3.99238 11.007 2.5 9.16602 2.5C7.32507 2.5 5.83268 3.99238 5.83268 5.83333C5.83268 7.67428 7.32507 9.16667 9.16602 9.16667Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============== small and medium device end ==========*/}
      </div>
    </nav>
  );
};

export default Navbar;
