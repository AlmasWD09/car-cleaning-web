
import { Modal } from "antd";
import CommonTitle from "../../shared/CommonTitle";
import CustomContainer from "../../shared/CustomContainer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Pricing = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const priceAllData = [
    {
      name: "Compact",
      price_one_name: "Interior",
      price_one: "654",
      price_two_name: "Exterior",
      price_two: "58764",
      bothPrice_name: " Both",
      bothPrice: " 84654",
    },
    {
      name: "SUV",
      price_one_name: "Interior",
      price_one: "654",
      price_two_name: "Exterior",
      price_two: "5876",
      bothPrice_name: " Both",
      bothPrice: " 84654",
    },
    {
      name: "Extra large",
      price_one_name: "Interior",
      price_one: "654",
      price_two_name: "Exterior ",
      price_two: "58764",
      bothPrice_name: " Both",
      bothPrice: " 84654",
    },
    {
      name: "Truck",
      price_one_name: "Interior",
      price_one: "654",
      price_two_name: "Exterior ",
      price_two: "58764",
      bothPrice_name: " Both",
      bothPrice: " 84654",
    },
    {
      name: "Sports Car",
      price_one_name: "Interior",
      price_one: "654",
      price_two_name: "Exterior ",
      price_two: "58764",
      bothPrice_name: " Both",
      bothPrice: " 84654",
    },
  ];

  const serviceBookAllData = [
    {
      title: "Interior",
      price: "70.00"
    },
    {
      title: "Interior",
      price: "80.00"
    },
    {
      title: "Interior",
      price: "60.00"
    },
  ];

  const showModal = () => {
    setModalOpen(true)
  }
  const handleModalOkPenOk = () => {

  }
  const handleModalCancel = () => {
    setModalOpen(false)
  }




  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup function
    };
  }, [modalOpen]);
  return (
    <section className="bg-[#f6f6f6] w-full overflow-x-auto pt-20 lg:pt-32">
      <CustomContainer>
        <div>
          <CommonTitle text={"Pricing"} />
          <div className="overflow-x-auto whitespace-nowrap">
            <div className="min-w-[1000px]">
              {priceAllData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center border rounded-xl mb-4 p-4 font-degular"
                  >
                    <div className="lg:w-[300px]  ">
                      <h1 className="text-[30px]">{item.name}</h1>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className=" lg:w-[300px]">
                        <p className="text-[24px]">{item.price_one_name}</p>
                        <p className="text-[48px] font-semibold text-primary">
                          ${item.price_one}
                        </p>
                      </div>
                      <div className=" lg:w-[300px]">
                        <p className="text-[24px] ">{item.price_two_name}</p>
                        <p className="text-[48px] font-semibold text-primary ">
                          ${item.price_two}
                        </p>
                      </div>
                      <div className=" lg:w-[300px]">
                        <p className="text-[24px]">{item.bothPrice_name}</p>
                        <p className="text-[48px] font-semibold text-primary">
                          ${item.bothPrice}
                        </p>
                      </div>
                    </div>

                    <div className="lg:w-[200px] flex justify-end ">
                      <button onClick={showModal} className="bg-primary text-[#ffffff] px-[74px] py-[14px] text-[24px] rounded-full my-2">
                        Select
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* modal component  */}
        <Modal
          centered
          title={
            <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
              Compact
            </div>
          }
          open={modalOpen}
          onOk={handleModalOkPenOk}
          onCancel={handleModalCancel}
          footer={null}
          width={600}
          className='custom-service-modal'
          maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
        >
          <p className='text-[24px] font-degular font-medium text-center'>Which service you wants to book ?</p>

          {
            serviceBookAllData.map((item, index) => {
              return (
                <div key={index} className='p-4'>
                  <div className='flex justify-between items-center border border-[#ccc] rounded-xl p-4 mb-4 hover:bg-primary hover:bg-opacity-15'>
                    <div>
                      <p className='text-[24px] font-degular'>{item.title}</p>
                      <p className='text-[24px] font-degular font-semibold text-primary'>$ {item.price}</p>
                    </div>
                    <Link to="/service-aviablity">
                      <span className="cursor-pointer">
                        <svg
                          className="w-[30px] md:w-[40px] lg:w-[60px] h-auto"
                          viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="60" height="60" rx="30" fill="#0063E6" />
                          <path d="M23.8433 34.7425L32.0358 26.55L25.6719 26.55L25.6719 24.5503H35.4497L35.4497 34.3282L33.45 34.3282L33.45 27.9642L25.2575 36.1568L23.8433 34.7425Z" fill="white" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              )
            })
          }


        </Modal>
      </CustomContainer>
    </section>
  );
};

export default Pricing;
