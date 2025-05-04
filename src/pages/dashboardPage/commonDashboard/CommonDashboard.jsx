import BookingChart from "../../../components/dashboard/BookingChart"
import EarningChart from "../../../components/dashboard/EarningChart"


const CommonDashboard = () => {


  return (
    <div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        <div className="max-w-[400px] max-h-[120px] bg-primary text-[#ffffff] p-[20px] rounded-lg">
          <h2 className="text-white font-roboto">Volunteers</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">54,973</h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-primary text-[#ffffff] p-[20px] rounded-lg">
          <h2>Survivors</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">8,846</h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-primary text-[#ffffff] p-[20px] rounded-lg">
          <h2>Donation received</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">
            $4,500.00{" "}
          </h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-primary text-[#ffffff] p-[20px] rounded-lg">
          <h2>Spent on survivors</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">
            $5,999.00
          </h2>
        </div>
      </div>

      {/* chart one/two components */}
      <div className="flex flex-col lg:flex-row justify-between gap-[20px] py-[20px]">


        
        <div className="bg-[#fff] w-[60%] md:h-[650px] rounded-lg">
          <BookingChart />
        </div>
        <div className="bg-[#fff] w-[40%] md:h-[650px] flex justify-center items-center rounded-lg ">
          <EarningChart />
        </div>
      </div>
    </div>
  )
}

export default CommonDashboard