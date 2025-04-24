import { key } from "localforage";
import CommonTitle from "../../shared/CommonTitle";
import CustomContainer from "../../shared/CustomContainer";

const Pricing = () => {
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
  return (
    <section className="w-full overflow-x-auto pt-10">
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
                      <button className="bg-primary text-[#ffffff] px-[74px] py-[14px] text-[24px] rounded-full my-2">
                        Select
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Pricing;
