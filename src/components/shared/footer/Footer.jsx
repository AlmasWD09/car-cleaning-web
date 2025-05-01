import CustomContainer from "../CustomContainer";

const Footer = () => {
  return (
    <footer className="relative h-auto lg:h-[406px] flex items-center bg-[#000000] text-[#ffffff] font-degular">
      <div className="absolute inset-0 bg-[#000000]/80 z-0"></div>
      <CustomContainer>
        <div className="grid gap-8 md:gap-0  md:gap-y-28 lg:gap-y-0 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-[54px] lg:pt-10">
          <div className="relative z-10  ">
            <img src="/footerImage/footerlogo.png" alt="" />
            <p className="md:w-[340px] text-wrap pt-[11px]">
              Car wash is a brand which is latterly going to change the people
              think about car cleaning.
            </p>
            <div className="flex items-center gap-6 pt-[23px] pb-[14px]">
              <span>
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 0.5H2.5C1.125 0.5 0.0125 1.625 0.0125 3L0 18C0 19.375 1.125 20.5 2.5 20.5H22.5C23.875 20.5 25 19.375 25 18V3C25 1.625 23.875 0.5 22.5 0.5ZM22.5 5.5L12.5 11.75L2.5 5.5V3L12.5 9.25L22.5 3V5.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>
              <p className="text-[20px]">example@gmail.com</p>
            </div>
            <div className="flex items-center gap-6">
              <span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.02222 9.15556C5.62222 12.3 8.2 14.8667 11.3444 16.4778L13.7889 14.0333C14.0889 13.7333 14.5333 13.6333 14.9222 13.7667C16.1667 14.1778 17.5111 14.4 18.8889 14.4C19.5 14.4 20 14.9 20 15.5111V19.3889C20 20 19.5 20.5 18.8889 20.5C8.45556 20.5 0 12.0444 0 1.61111C0 1 0.5 0.5 1.11111 0.5H5C5.61111 0.5 6.11111 1 6.11111 1.61111C6.11111 3 6.33333 4.33333 6.74444 5.57778C6.86667 5.96667 6.77778 6.4 6.46667 6.71111L4.02222 9.15556Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>
              <p className="text-[20px]">+1254896325</p>
            </div>
          </div>

          <div className="relative z-10 md:place-self-end lg:place-self-start md:flex md:flex-col lg:items-start md:items-end ">
            <h3 className="text-[20px] font-medium underline underline-offset-2">
              Quick Access
            </h3>
            <div className="flex flex-col  space-y-3 pt-4">
              <a href="/" className="text-[18px] font-degular">
                Home
              </a>
              <a href="/about" className="text-[18px] font-degular">
                About us
              </a>
              <a href="/service" className="text-[18px] font-degular">
                Services
              </a>
              <a href="/pricing" className="text-[18px] font-degular">
                Pricing
              </a>
              <a href="/photo-gallery" className="text-[18px] font-degular">
                Photo gallery
              </a>
            </div>
          </div>

          <div className="relative z-10 ">
            <h3 className="text-[20px] font-medium underline underline-offset-2">
              Others
            </h3>
            <div className="flex flex-col  space-y-3 pt-4">
              <a href="/privacy-policy" className="text-[18px] font-degular">
                Privacy policy
              </a>
              <a href="/terms-condition" className="text-[18px] font-degular">
                Terms & Conditions
              </a>
              <a href="/support" className="text-[18px] font-degular">
                Support
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/footerImage/car1.png"
              alt="car"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 ">
          <div className="text-xs md:text-[18px] lg:text-center flex md:items-center md:justify-center md:gap-2">
            Copyright 2025 @ Reserved by LWR Bro’s Car Detailing
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
