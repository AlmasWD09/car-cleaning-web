
// import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts"

// export default function DonutChart({earningData}) {
// console.log(earningData)



//   const data = [
//     { name: "Fri", value: 1264.2, color: "#9966cc" },
//     { name: "Sat", value: 1343.3, color: "#8a7bff" },
//     { name: "Sun", value: 740.1, color: "#ff8a80" },
//     { name: "Mon", value: 1201.8, color: "#80deea" },
//     { name: "Tue", value: 654.6, color: "#ffb74d" },
//     { name: "Wed", value: 1110.7, color: "#5c7cfa" },
//     { name: "Thu", value: 1308.7, color: "#66bb6a" },
//   ]

//   const total = data.reduce((sum, entry) => sum + entry.value, 0)
//   const formattedTotal = total.toFixed(1)

//   const renderCustomizedLabel = (props) => {
//     const { cx, cy, midAngle, innerRadius, outerRadius, index } = props
//     const radius = outerRadius * 1.35
//     const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180)
//     const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180)

//     const item = data[index]
//     const textAnchor = x > cx ? "start" : "end"

//     return (
//       <g>
//         <text x={x} y={y - 15} fill={item.color} textAnchor={textAnchor} dominantBaseline="central" fontWeight="bold">
//           {item.name}
//         </text>
//         <text x={x} y={y + 15} fill={item.color} textAnchor={textAnchor} dominantBaseline="central">
//           ${item.value}
//         </text>
//         <line
//           x1={cx + (innerRadius + 5) * Math.cos((-midAngle * Math.PI) / 180)}
//           y1={cy + (innerRadius + 5) * Math.sin((-midAngle * Math.PI) / 180)}
//           x2={x - (textAnchor === "start" ? -5 : 5)}
//           y2={y}
//           stroke={item.color}
//           strokeWidth={1}
//         />
//       </g>
//     )







//   }

//   return (
//     <div className="pointer-events-none w-full h-[500px] flex items-center justify-center">
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={150}
//             innerRadius={100}
//             fill="#8884d8"
//             dataKey="value"
//             paddingAngle={0}
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//             <Label
//               content={() => (
//                 <text
//                   x="50%"
//                   y="50%"
//                   textAnchor="middle"
//                   dominantBaseline="middle"
//                   style={{ fontSize: "24px", fontWeight: "bold" }}
//                 >
//                   {formattedTotal}
//                 </text>
//               )}
//               position="center"
//             />
//           </Pie>
//           {/* <g className="legend" transform={`translate(${350}, ${180})`}>
//             {data.map((entry, index) => (
//               <g key={`legend-${index}`} transform={`translate(0, ${index * 25})`}>
//                 <circle cx={10} cy={10} r={8} fill={entry.color} />
//                 <text x={25} y={10} dy={5} style={{ fontSize: "14px" }}>
//                   {entry.name}
//                 </text>
//               </g>
//             ))}
//           </g> */}
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }




import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts"

const COLORS = ["#9966cc", "#8a7bff", "#ff8a80", "#80deea", "#ffb74d", "#5c7cfa", "#66bb6a"]

export default function DonutChart({ earningData }) {
  const earningStats = earningData?.data?.earning_statistics || []

  // Map data and add colors dynamically
  const data = earningStats.map((item, index) => ({
    name: item.day,
    value: item.total,
    color: COLORS[index % COLORS.length],
  }))

  const total = data.reduce((sum, entry) => sum + entry.value, 0)
  const formattedTotal = total.toFixed(1)

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const radius = outerRadius * 1.35
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180)
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180)
    const item = data[index]
    const textAnchor = x > cx ? "start" : "end"

    return (
      <g>
        <text x={x} y={y - 15} fill={item.color} textAnchor={textAnchor} dominantBaseline="central" fontWeight="bold">
          {item.name}
        </text>
        <text x={x} y={y + 15} fill={item.color} textAnchor={textAnchor} dominantBaseline="central">
          ${item.value}
        </text>
        <line
          x1={cx + (innerRadius + 5) * Math.cos((-midAngle * Math.PI) / 180)}
          y1={cy + (innerRadius + 5) * Math.sin((-midAngle * Math.PI) / 180)}
          x2={x - (textAnchor === "start" ? -5 : 5)}
          y2={y}
          stroke={item.color}
          strokeWidth={1}
        />
      </g>
    )
  }

  return (
    <div className="pointer-events-none w-full h-[500px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            innerRadius={100}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <Label
              content={() => (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  {formattedTotal}
                </text>
              )}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
