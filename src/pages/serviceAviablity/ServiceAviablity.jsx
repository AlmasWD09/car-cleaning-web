import { useNavigate } from "react-router-dom"
import CustomContainer from "../../components/shared/CustomContainer"


const ServiceAviablity = () => {
  const navigate = useNavigate();
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


        <div className="flex justify-between">
          <div className="border border-red-500 w-[50%]">left</div>
          <div className="border border-red-500 w-[50%]">right</div>
        </div>
      </CustomContainer>
    </section>
  )
}

export default ServiceAviablity