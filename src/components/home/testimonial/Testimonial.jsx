import CommonTitle from "../../shared/CommonTitle";
import CustomContainer from "../../shared/CustomContainer";

const Testimonial = () => {
  const allTestimonial = [
    {
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Md. Abid Hasan",
      icon: [
        <svg
          key={1}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={2}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={3}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={4}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={5}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
      ],
      description: `“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempore quibusdam ducimus libero ad tempora doloribus expedita
        laborum saepe voluptas perferendis delectus assumenda rerum,
        culpa aperiam dolorum, obcaecati corrupti aspernatur a.”`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Md. Abid Hasan",
      icon: [
        <svg
          key={1}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={2}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={3}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={4}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
      ],
      description: `“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempore quibusdam ducimus libero ad tempora doloribus expedita
        laborum saepe voluptas perferendis delectus assumenda rerum,
        culpa aperiam dolorum, obcaecati corrupti aspernatur a.”`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Md. Abid Hasan",
      icon: [
        <svg
          key={1}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={2}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={3}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={4}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={5}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
      ],
      description: `“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempore quibusdam ducimus libero ad tempora doloribus expedita
        laborum saepe voluptas perferendis delectus assumenda rerum,
        culpa aperiam dolorum, obcaecati corrupti aspernatur a.”`,
    },
  ];

  return (
    <>
      <section className="bg-[#f6f6f6] font-degular pb-10 pt-20 lg:pt-32">
        <CustomContainer>
          <div className="">
            <div className="mt-6 md:flex md:items-center md:justify-between">
              <div>
                <CommonTitle
                  text={"See what our client says"}
                  customIcon={<div className="bg-primary h-0.5 w-6"></div>}
                />
              </div>

              {/* navigation button component */}
              {/* <div className="flex justify-between mt-8 md:mt-0">
                <button
                  title="left arrow"
                  className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div> */}
            </div>

            <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
              {allTestimonial.map((item, index) => {
                return (
                  <div className="p-4 md:p-8 border border-[#00000033] rounded-[20px]">
                    <div className="flex items-center  -mx-2">
                      <img
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 "
                        src={item.image}
                        alt="Robert"
                      />
                      <div className="mx-4">
                        <h1 className="font-semibold text-[24px] text-[#000000]">
                          {item.name}
                        </h1>
                        <div className="flex items-center">{item.icon}</div>
                      </div>
                    </div>
                    <p className="text-[#000000] text-[20px] font-degular pt-[18px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </section>
          </div>
        </CustomContainer>
      </section>
    </>
  );
};

export default Testimonial;
