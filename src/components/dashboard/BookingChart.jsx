import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SelectBox from "../shared/SelectBox";



const BookingChart = ({bookingData}) => {
  const [chartData, setChartData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("weekly");



   useEffect(()=>{
 if (bookingData) {
          // Transform to fit Recharts format
          const formattedData = bookingData.map(item => ({
            name: item.day,
            amt: item.total,
          }));
          setChartData(formattedData);
        }
   },[bookingData])



  // const handleSelectChange = (value) => {
  //   setSelectedValue(value);
  //   console.log("Selected", value);
  // };
  // const selectOptions = [
  //   { value: "weekly", label: "Weekly" },
  //   { value: "monthly", label: "Monthly" },
  //   { value: "yearly", label: "Yearly" },
  // ];


  return (
    <div className=" rounded-2xl mt-2 p-2 text-gray-300 pr-14">
      <div className="flex justify-between items-center">
        <h3 className="mb-5 px-3 text-[24px] font-degular font-semibold text-black">
        Booking Statistics
        </h3>
        {/* <SelectBox
          options={selectOptions}
          value={selectedValue}
          onChange={(value) => setSelectedValue(value)}
        /> */}
      </div>
      <div className="bg-white py-8 px-4">
        <ResponsiveContainer className=" " width="100%" height={400}>
          <AreaChart data={chartData} syncId="anyId">
            <defs>
              <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#00D6FF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />

            <XAxis axisLine={false} dataKey="name" />
            <YAxis
              axisLine={false}
              tickFormatter={(value) => value}
              ticks={[
                0, 20, 40, 60, 80, 100, 200, 500, 1000, 5000, 10000, 15000,
              ]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="url(#colorAmt)"
              fill="url(#colorAmt)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BookingChart