import BookingChart from "../../../components/dashboard/BookingChart"
import EarningChart from "../../../components/dashboard/EarningChart"
import { useGetDashboardChartApiQuery } from "../../../redux/dashboardFeatures/dashboardChart/dashboardChartApi"


const CommonDashboard = () => {
  const { data: chartData } = useGetDashboardChartApiQuery()
const allChartData = chartData?.data
const earningData = chartData?.data?.earning_statistics
const bookingData = chartData?.data?.booking_statistics



  return (
    <div>

      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-4 h-[149px] bg-[#ffff]  p-[20px]  flex justify-between items-center border rounded-[20px]">
          <div className="w-full flex justify-between ">
            <div>
              <h2 className=" font-degular text-[24px]">Earnings</h2>
              <h2 className="font-semibold font-degular text-[36px] ">${allChartData?.earnings}</h2>
            </div>
            <img src="/dashboardCurdImage/photo1.svg" alt="" className="w-[50px] h-[50px]" />
          </div>
        </div>

        <div className="col-span-4 h-[149px] bg-[#ffff]  p-[20px]  flex justify-between items-center border rounded-[20px]">
          <div className="w-full flex justify-between ">
            <div>
              <h2 className=" font-degular text-[24px]">Appointments</h2>
              <h2 className="font-semibold font-degular text-[36px] ">{allChartData?.appointments}</h2>
            </div>
            <img src="/dashboardCurdImage/photo2.svg" alt="" className="w-[50px] h-[50px]" />
          </div>
        </div>

        <div className="col-span-4 h-[149px] bg-[#ffff]  p-[20px]  flex justify-between items-center border rounded-[20px]">
          <div className="w-full flex justify-between ">
            <div>
              <h2 className=" font-degular text-[24px]">Users</h2>
              <h2 className="font-semibold font-degular text-[36px] ">{allChartData?.users}</h2>
            </div>
            <img src="/dashboardCurdImage/photo3.svg" alt="" className="w-[50px] h-[50px]" />
          </div>
        </div>


      </div>

      {/* chart one/two components */}
      <div className="flex flex-col lg:flex-row justify-between gap-[20px] py-[20px]">



        <div className="bg-[#fff] w-[60%] md:h-[650px] rounded-lg">
          <BookingChart bookingData={bookingData}/>
        </div>
        <div className="bg-[#fff] w-[40%] md:h-[650px] flex justify-center items-center rounded-lg ">
          <EarningChart earningData={earningData}/>
        </div>
      </div>
    </div>
  )
}

export default CommonDashboard