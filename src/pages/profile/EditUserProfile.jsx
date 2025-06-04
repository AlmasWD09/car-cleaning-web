import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import CustomContainer from "../../components/shared/CustomContainer";
import { useNavigate } from "react-router-dom";


const EditUserProfile = () => {
  const navigate = useNavigate()
  const [createAccountForm] = Form.useForm();
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [buttonTextChange, setButtonTextChange] = useState(false);

  const handleButtonChange = () => {
    setButtonTextChange(!buttonTextChange);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const createAccountFinish = (values) => {
    console.log(values);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="lg:pt-20 bg-[#f6f6f6] pb-8">
      <CustomContainer>
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 pt-10 lg:pt-0 pb-[24px]">
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
            <h2 className='text-[20px] md:text-[50px] font-medium font-degular'>Edit your Profile</h2>
          </div>
        </div>



        <div className="flex flex-col lg:flex-row items-center justify-between  gap-12">

          {/* left side */}
          <div className=" w-full lg:w-[60%]">
            <div className="rounded-lg flex justify-center items-center w-full mx-auto ">
              <div className="flex flex-col text-center gap-3 md:gap-0 pb-8">
                <div className="">
                  <img
                    src="/profileCar/photo6.png"
                    alt=""
                    className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:h-[140px] lg:w-[140px] object-cover rounded-full "
                  />
                </div>
                <div className="flex justify-center">
                  <button className="flex items-center gap-2 border border-primary px-8 mt-2 py-2 rounded text-[16px] font-semibold text-primary font-degular">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.71 4.04125C18.1 3.65125 18.1 3.00125 17.71 2.63125L15.37 0.291249C15 -0.0987512 14.35 -0.0987512 13.96 0.291249L12.12 2.12125L15.87 5.87125M0 14.2512V18.0012H3.75L14.81 6.93125L11.06 3.18125L0 14.2512Z" fill="#0063E6" />
                    </svg>
                    Change</button>
                </div>
              </div>
            </div>



            <Form form={createAccountForm} onFinish={createAccountFinish}>

              {/* full name */}
              <div>
                <Form.Item
                  name="full_name"
                  rules={[
                    { required: true, message: "Full name is required" },
                  ]}
                >
                  <Input
                    placeholder="Your full name"
                    prefix={
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0.5C11.3261 0.5 12.5979 1.02678 13.5355 1.96447C14.4732 2.90215 15 4.17392 15 5.5C15 6.82608 14.4732 8.09785 13.5355 9.03553C12.5979 9.97322 11.3261 10.5 10 10.5C8.67392 10.5 7.60215 9.97322 6.46447 9.03553C5.52678 8.09785 5 6.82608 5 5.5C5 4.17392 5.52678 2.90215 6.46447 1.96447C7.40215 1.02678 8.67392 0.5 10 0.5ZM10 13C15.525 13 20 15.2375 20 18V20.5H0V18C0 15.2375 4.475 13 10 13Z"
                          fill="#888888"
                        />
                      </svg>
                    }
                    style={{
                      height: "60px",
                      borderRadius: "20px",
                      paddingInline: "20px",
                      border: isFocused ? "1px solid #ccc" : "1px solid #ccc",
                    }}
                  />
                </Form.Item>
              </div>
              {/* email */}
              <div>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    prefix={
                      <svg
                        width="25"
                        height="21"
                        viewBox="0 0 25 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5 0.5H2.5C1.125 0.5 0.0125 1.625 0.0125 3L0 18C0 19.375 1.125 20.5 2.5 20.5H22.5C23.875 20.5 25 19.375 25 18V3C25 1.625 23.875 0.5 22.5 0.5ZM22.5 5.5L12.5 11.75L2.5 5.5V3L12.5 9.25L22.5 3V5.5Z"
                          fill="#888888"
                        />
                      </svg>
                    }
                    style={{
                      height: "60px",
                      borderRadius: "20px",
                      paddingInline: "20px",
                      border: isFocused ? "1px solid #ccc" : "1px solid #ccc",
                      cursor: "pointer",
                      position: "relative", // Ensure correct layering
                      zIndex: isFocused ? 10 : 1,
                    }}
                  />
                </Form.Item>
              </div>

              {/* Phone number */}
              <div>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "phone number is required" },
                  ]}
                >
                  <Input
                    placeholder="Your phone number"
                    prefix={
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.02222 9.15556C5.62222 12.3 8.2 14.8667 11.3444 16.4778L13.7889 14.0333C14.0889 13.7333 14.5333 13.6333 14.9222 13.7667C16.1667 14.1778 17.5111 14.4 18.8889 14.4C19.5 14.4 20 14.9 20 15.5111V19.3889C20 20 19.5 20.5 18.8889 20.5C8.45556 20.5 0 12.0444 0 1.61111C0 1 0.5 0.5 1.11111 0.5H5C5.61111 0.5 6.11111 1 6.11111 1.61111C6.11111 3 6.33333 4.33333 6.74444 5.57778C6.86667 5.96667 6.77778 6.4 6.46667 6.71111L4.02222 9.15556Z" fill="#888888" />
                      </svg>

                    }
                    style={{
                      height: "60px",
                      borderRadius: "20px",
                      paddingInline: "20px",
                      border: isFocused ? "1px solid #ccc" : "1px solid #ccc",
                    }}
                  />
                </Form.Item>
              </div>

              {/*========= skip and fill button component========= */}
              <div className="">


                <div className="flex flex-col md:flex-row md:justify-between items-center md:gap-4 pt-6">
                  {/* brand name */}
                  <div
                    disabled={buttonTextChange}
                    className="w-full md:w-[50%]"
                  >
                    <p className="text-[16px] font-semibold font-degular">Brand Name</p>
                    <Form.Item name="brand_name">
                      <Input
                        placeholder="Brand name"
                        disabled={buttonTextChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={{
                          height: "60px",
                          borderRadius: "20px",
                          paddingInline: "20px",
                          border: isFocused
                            ? "1px solid #ccc"
                            : "1px solid #ccc",
                          position: "relative", // Ensure correct layering
                          zIndex: isFocused ? 10 : 1,
                          cursor: buttonTextChange
                            ? "not-allowed"
                            : "pointer",
                          backgroundColor: buttonTextChange
                            ? "oklch(92.8% 0.006 264.531)"
                            : "",
                        }}
                      />
                    </Form.Item>
                  </div>

                  {/* Car Model*/}
                  <div className="w-full md:w-[50%]">
                    <p className="text-[16px] font-semibold font-degular">Car Model</p>
                    <Form.Item name="car_model">
                      <Input
                        placeholder="Car Model"
                        disabled={buttonTextChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={{
                          height: "60px",
                          borderRadius: "20px",
                          paddingInline: "20px",
                          border: isFocused
                            ? "1px solid #ccc"
                            : "1px solid #ccc",
                          position: "relative", // Ensure correct layering
                          zIndex: isFocused ? 10 : 1,
                          cursor: buttonTextChange
                            ? "not-allowed"
                            : "pointer",
                          backgroundColor: buttonTextChange
                            ? "oklch(92.8% 0.006 264.531)"
                            : "",
                        }}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>




              {/* submit button component */}
              <Button
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#0063E5",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "600",
                  height: "60px",
                  borderRadius: "20px",
                  paddingInline: "20px",
                }}
              >
                Save changes
              </Button>
            </Form>
          </div>

          {/* right side */}
          <div className="w-full lg:w-[40%]">
            <p className="text-[28px] font-medium font-degular text-[#000000 py-2">Pictures</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className=" col-span-1 h-[146px] rounded-2xl">
                <img src="/profileCar/photo1.png" alt="car" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className=" col-span-1 h-[146px] rounded-2xl">
                <img src="/profileCar/photo2.png" alt="car" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className=" col-span-1 h-[146px] rounded-2xl"> <img src="/profileCar/photo3.png" alt="" className="w-full h-full object-cover rounded-2xl" /></div>
              <div className=" col-span-1 h-[146px] rounded-2xl"> <img src="/profileCar/photo4.png" alt="" className="w-full h-full object-cover rounded-2xl" /></div>
              <div className=" col-span-1 h-[146px] rounded-2xl"> <img src="/profileCar/photo5.png" alt="" className="w-full h-full object-cover rounded-2xl" /></div>
              <div className=" col-span-1 h-[146px] rounded-2xl border border-[#ccc] text-7xl flex justify-center items-center">+</div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  )
}

export default EditUserProfile