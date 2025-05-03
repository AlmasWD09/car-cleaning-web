import { Link, useNavigate } from "react-router-dom"
import CustomContainer from "../../components/shared/CustomContainer"
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";




const ServiceAviablity = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(new Date());
  const [selectDate, setSelectDate] = useState(false)
  const [clickable, setClickable] = useState(false)








  const handleData = (dateValue) => {
    setSelectDate(true)
  }
  return (
    <section className="pt-[70px] md:pt-[100px] lg:pt-[57px] pb-[52px] bg-[#f6f6f6]">
      <CustomContainer>
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 pt-10 lg:pt-0">
          <div>
            <span onClick={() => navigate(-1)} className="cursor-pointer">
              <svg
                className="w-[30px] md:w-[40px] lg:w-[60px] h-auto"
                viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="30" fill="#0063E6" />
                <path d="M37.707 31.0001H26.121L30.621 35.5001L29.207 36.9141L22.293 30.0001L29.207 23.0861L30.621 24.5001L26.121 29.0001H37.707V31.0001Z" fill="white" />
              </svg>
            </span>
          </div>

          <div className="flex justify-center w-full">
            <h2 className='text-[20px] md:text-[50px] font-medium font-degular'>Select your preferred time</h2>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row justify-between  pt-10 lg:pt-0">
          <div className="w-full lg:w-[40%]">
            {/* date picker conponent */}
            <p className='text-[20px]  font-medium font-degular'>Select Date</p>
            <DatePicker
              style={{
                height: "60px",
                width: "280px",
                fontSize: "18px",
                padding: "10px"
              }}
              value={value}
              onChange={setValue}
              multiple
            />
            <div className="flex flex-col md:flex-row justify-between gap-3 lg:gap-0 rounded-lg p-4 font-degular mt-6">
              <div>
                <p className='text-[28px]  font-bold font-degular'>Today is March 26, 2025. </p>
                <p className='text-[20px]  font-degular'>No availability until 27 March</p>

              </div>
        <div className="">
                  <button onClick={() => handleData(value)} className="bg-primary text-[#ffff] text-[20px] py-2 md:py-4 px-[40px] md:px-[57px] rounded-full flex items-center gap-2">
                    Go to next date
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.29425e-05 6L11.5861 6L7.08606 1.5L8.50006 0.0859985L15.4141 7L8.50006 13.914L7.08606 12.5L11.5861 8L6.29425e-05 8V6Z" fill="white" />
                    </svg>

                  </button>

                </div>
            
            </div>
          </div>


          <div className="w-full lg:w-[40%] p-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <p className='text-[20px]  font-medium font-degular'>Appointment Summery</p>
              <button onClick={() => navigate(-1)} className="flex items-center gap-2 border border-primary px-4 py-2 rounded text-[16px] font-semibold text-primary font-degular"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.71 4.04125C18.1 3.65125 18.1 3.00125 17.71 2.63125L15.37 0.291249C15 -0.0987512 14.35 -0.0987512 13.96 0.291249L12.12 2.12125L15.87 5.87125M0 14.2512V18.0012H3.75L14.81 6.93125L11.06 3.18125L0 14.2512Z" fill="#0063E6" />
              </svg>
                Change</button>
            </div>
            <div className="flex flex-col md:flex-row justify-between border border-[#ccc] rounded-lg p-4 font-degular mt-6">
              <p className='text-[28px]  font-degular'>Compact</p>
              <div>
                <p className='text-[20px]  font-degular'>Both</p>
                <p className='text-[28px]  font-bold text-primary font-degular'>$180.00</p>
              </div>
            </div>
          </div>
        </div>



        {
          selectDate && <div className="lg:w-[50%] mt-8">
            <h3 className='text-[20px] md:text-[50px] font-medium font-degular'>Wednesday March 27, 2025. </h3>

            <p className='text-[20px]  font-medium font-degular py-4'>Select Time</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-baseline gap-y-4">
              <div className="bg-gray-300 w-fit px-[80px] py-2 hover:bg-primary hover:text-[#ffff] text-[20px] cursor-pointer rounded-lg">10.00Am</div>
              <div className="bg-gray-300 w-fit px-[80px] py-2 hover:bg-primary hover:text-[#ffff] text-[20px] cursor-pointer rounded-lg">11.00Am</div>
              <div className="bg-gray-300 w-fit px-[80px] py-2 hover:bg-primary hover:text-[#ffff] text-[20px] cursor-pointer rounded-lg">12.00Am</div>
              <div className="bg-gray-300 w-fit px-[80px] py-2 hover:bg-primary hover:text-[#ffff] text-[20px] cursor-pointer rounded-lg">01.00Pm</div>
              <div className="bg-gray-300 w-fit px-[80px] py-2 hover:bg-primary hover:text-[#ffff] text-[20px] cursor-pointer rounded-lg">02.00Pm</div>
              <div className="bg-gray-300 w-fit px-[80px] py-2 hover:bg-primary hover:text-[#ffff] text-[20px] cursor-pointer rounded-lg">03.00Pm</div>
            </div>
            <div>
              <button onClick={() => handleData(value)} className="w-full flex justify-center items-center bg-gray-300 text-[#ffff] text-[20px] py-2 md:py-4  rounded-full gap-2 my-8">
                Go to next date
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.29425e-05 6L11.5861 6L7.08606 1.5L8.50006 0.0859985L15.4141 7L8.50006 13.914L7.08606 12.5L11.5861 8L6.29425e-05 8V6Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        }

      </CustomContainer>
    </section>
  )
}

export default ServiceAviablity