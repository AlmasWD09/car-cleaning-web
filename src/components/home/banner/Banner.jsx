import { useNavigate } from "react-router-dom";
import CustomContainer from "../../shared/CustomContainer";
import GroupAvater from "../../shared/GroupAvater";

const Banner = () => {
  const navigate = useNavigate();

  const handleServiceBookPage = () => {
    navigate("/service-book");
  };
  return (
    <section className="bg-[#f6f6f6] font-degular pt-20 lg:pt-[80px]">
      <CustomContainer>
        <div className="pb-[200px]">
          <div className="py-8 lg:py-16">
            <div className="flex flex-col lg:flex-row justify-between ">
              <div className="max-w-[705px] text-wrap">
                <h1 className="font-semibold text-[34px] lg:text-[68px] ">
                  Keep your car clean always
                </h1>
                <p className="text-[24px] lg:text-[28px]">
                  Car wash is a brand which is latterly going to change the
                  people think about car cleaning.
                </p>
                <div className="pt-[60px] flex items-center gap-2">
                  <button onClick={() => handleServiceBookPage()} className="bg-primary text-[#ffff] text-[20px] py-2 md:py-4 px-[40px] md:px-[57px] rounded-full">
                    Book Now
                  </button>
                  <button className="bg-primary text-[#ffff] p-4 md:p-6 rounded-full">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.843277 10.7425L9.03582 2.55001L2.67186 2.55001L2.67185 0.550313H12.4497L12.4497 10.3282L10.45 10.3282L10.45 3.96422L2.25749 12.1568L0.843277 10.7425Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                {/* group avater component */}
                <div className="pt-[50px] lg:pt-[109px]">
                  <h2 className="font-bold text-[24px] text-[#000000]">
                    200 +
                  </h2>
                  <p className="text-[20px]">Happy Clients</p>
                  <GroupAvater />
                </div>
              </div>


              {/* right side image */}
              <div className="relative top-16">
                <svg
                  className="w-[280px] md:w-[600px] mx-auto"
                  // width="608"
                  // height="126"
                  viewBox="0 0 758 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.7602 77.6H18.9602V123H0.560157V3H46.3602C72.9602 3 87.5602 15.4 87.5602 40.2C87.5602 61.8 72.5602 77.6 46.7602 77.6ZM44.5602 19.4H18.9602V61.2H44.9602C60.7602 61.2 68.7602 54.2 68.7602 40.4C68.7602 25.8 61.5602 19.4 44.5602 19.4ZM153.816 125.4C115.816 125.4 92.6164 98.4 92.6164 62.8C92.6164 27 116.816 0.59999 153.816 0.59999C191.216 0.59999 215.016 27 215.016 62.8C215.016 98.4 191.816 125.4 153.816 125.4ZM153.816 108.8C181.616 108.8 196.616 89.2 196.616 62.6C196.616 37.2 181.016 17.4 153.816 17.4C126.416 17.4 111.016 37.2 111.016 62.6C111.016 89.2 126.016 108.8 153.816 108.8ZM267.746 72.8H244.546V123H226.146V3H276.546C304.546 3 317.146 16.4 317.146 37.2C317.146 56.2 306.546 68.4 287.346 71.8L324.746 122.6V123H302.546L267.746 72.8ZM275.546 19.4H244.546V56.4H274.546C289.946 56.4 298.946 49.8 298.946 37.6C298.946 26.4 292.946 19.4 275.546 19.4ZM377.829 125.4C343.229 125 327.829 106.6 324.629 82.2L342.429 78.6C345.629 97.8 358.029 109.2 378.829 109.2C396.629 109.2 405.629 102 405.629 90.8C405.629 79.6 397.829 74 374.429 70.2C341.229 64.6 330.829 51.8 330.829 34.2C330.829 14 346.229 0.59999 373.629 0.59999C403.829 0.59999 416.629 17.6 421.029 39.8L403.029 43.4C399.029 26 391.829 16.4 372.829 16.4C357.829 16.4 349.229 23.2 349.229 33.8C349.229 43.4 354.629 49.8 381.829 54.6C415.229 60.2 424.229 73.6 424.229 90C424.229 111 409.829 125.4 377.829 125.4ZM488.745 125.4C451.945 125.4 428.945 98.8 428.945 62.8C428.945 26.6 452.945 0.59999 488.945 0.59999C520.545 0.59999 541.345 20.8 545.745 50.6L527.945 53.8C524.545 31.6 511.145 17.4 488.545 17.4C462.145 17.4 447.345 37.2 447.345 62.8C447.345 89.4 461.745 108.8 488.745 108.8C511.745 108.8 524.745 93.6 528.145 71L545.745 74C541.745 104 520.345 125.4 488.745 125.4ZM556.615 123V3H575.015V54.2H639.015V3H657.415V123H639.015V71.6H575.015V123H556.615ZM757.788 123H692.788H674.388V3H757.588V20.4H692.788V53.4H751.388V70.6H692.788V105.6H757.788V123Z"
                    fill="white"
                  />
                </svg>

                {/* medium and large device  */}
                <div className="absolute  md:top-[55px] lg:top-[64px] z-10 hidden md:block">
                  <img src="/bannerCar1.png" alt="car" />
                </div>



                {/* small device  */}
                <div className="absolute top-[25px] z-10 md:hidden">
                  <img src="/bannerCar1.png" alt="car" className=" w-[300px]" />
                </div>


                {/* css.glass morpizom component */}
                <div className="absolute z-10 -bottom-[90px]  md:-bottom-[220px] md:left-[10px] lg:bottom-[190px] lg:-left-[200px]">
                  <div className="flex gap-2 lg:w-[296px] rounded-xl p-2 lg:p-4" style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid #ffffff'
                  }}>
                    <img src="/bannerAvater/prity1.png" alt="photo" className="object-contain " />
                    <div>
                      <h4 className="font-medium lg:text-[20px] text-[#000000]">
                        Jenifer Lopej
                      </h4>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-[25px] md:w-[30px] lg:w-[40px]"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#FFAE00"
                          />
                        </svg>
                        <svg
                          className="w-[25px] md:w-[30px] lg:w-[40px]"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#FFAE00"
                          />
                        </svg>
                        <svg
                          className="w-[25px] md:w-[30px] lg:w-[40px]"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#FFAE00"
                          />
                        </svg>
                        <svg
                          className="w-[25px] md:w-[30px] lg:w-[40px]"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#FFAE00"
                          />
                        </svg>
                        <svg
                          className="w-[25px] md:w-[30px] lg:w-[40px]"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#FFAE00"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>

      {/* service section */}
      <div className="absolute w-full mx-auto -bottom-[180px] hidden lg:block">
        <div className="flex  justify-center items-center gap-4">
          <div className="md:h-[359px] md:w-[439px] flex flex-col justify-center items-center px-[53px] bg-[#FFFFFF] rounded-[37px]">
            <img src="/service/serviceLogo1.svg" alt="" />
            <h3 className="font-degular text-primary text-[30px]">
              Professional Services
            </h3>
            <p className="text-[16px] font-montserrat text-[#000000] text-center">
              Professional car washing ensures thorough cleaning, detailing, and
              protection using advanced techniques, eco-friendly products, and
              expert care for vehicle maintenance.
            </p>
          </div>
          <div className="md:h-[359px] md:w-[439px] flex flex-col justify-center items-center px-[53px] bg-[#FFFFFF] rounded-[37px]">
            <img src="/service/serviceLogo1.svg" alt="" />
            <h3 className="font-degular text-primary text-[30px]">
              Professional Services
            </h3>
            <p className="text-[16px] font-montserrat text-[#000000] text-center">
              Professional car washing ensures thorough cleaning, detailing, and
              protection using advanced techniques, eco-friendly products, and
              expert care for vehicle maintenance.
            </p>
          </div>
          <div className="md:h-[359px] md:w-[439px] flex flex-col justify-center items-center px-[53px] bg-[#FFFFFF] rounded-[37px]">
            <img src="/service/serviceLogo1.svg" alt="" />
            <h3 className="font-degular text-primary text-[30px]">
              Professional Services
            </h3>
            <p className="text-[16px] font-montserrat text-[#000000] text-center">
              Professional car washing ensures thorough cleaning, detailing, and
              protection using advanced techniques, eco-friendly products, and
              expert care for vehicle maintenance.
            </p>
          </div>
        </div>
      </div>




      {/* small / medium device for */}
      <div className="w-full mx-auto -bottom-[180px] lg:hidden px-4 pt-20 pb-10  md:pt-[400px] md:pb-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col  bg-[#FFFFFF] rounded-[37px] py-6 px-3">

            <img src="/service/serviceLogo1.svg" alt="" className="w-[60px] mx-auto" />
            <h3 className="font-degular text-primary text-[20px] text-center pt-4">
              Professional Services
            </h3>

            <p className="text-[16px] font-degular text-gray-700 text-wrap text-center pt-4">
              Professional car washing ensures thorough cleaning, detailing, and
              protection using advanced techniques, eco-friendly products, and
              expert care for vehicle maintenance.
            </p>
          </div>

          <div className="flex flex-col  bg-[#FFFFFF] rounded-[37px] py-6 px-3">
            <img src="/service/serviceLogo2.svg" alt="" className="w-[60px] mx-auto" />
            <h3 className="font-degular text-primary text-[20px] text-center pt-4">
              Professional Equipment
            </h3>

            <p className="text-[16px] font-degular text-gray-700 text-wrap text-center pt-4">
              High-end car washing equipment includes advanced pressure washers, foam cannons, steam cleaners for superior cleaning and protection.
            </p>
          </div>

          <div className="flex flex-col  bg-[#FFFFFF] rounded-[37px] py-6 px-3">
            <img src="/service/serviceLogo3.svg" alt="" className="w-[60px] mx-auto" />
            <h3 className="font-degular text-primary text-[20px] text-center pt-4">
              Best Pricing
            </h3>

            <p className="text-[16px] font-degular text-gray-700 text-wrap text-center pt-4">
              Offering the best pricing in mobile car washing with affordable rates, premium service, customized packages, and great value for top-quality vehicle care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
