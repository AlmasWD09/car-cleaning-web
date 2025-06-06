import { Link, useNavigate } from "react-router-dom";
import CustomContainer from "../../components/shared/CustomContainer"
import { Button, Checkbox, Form, Input, Modal, Select, Upload } from "antd";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { UploadCloud } from "lucide-react";

const CheckoutPage = () => {
  const [formOne] = Form.useForm();
  const [formTwo] = Form.useForm();
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [ImageFileList, setImageFileList] = useState([]);







  const initialOptions = {
    clientId: "YOUR_CLIENT_ID",
  };

  const styles = {
    shape: "rect",
    layout: "vertical",
  };








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





  const onFinishOne = (values) => {
    console.log(values)
    const formData = new FormData();
    if (ImageFileList[0]?.originFileObj) {
      formData.append("image", ImageFileList[0].originFileObj);
    }

    //   try {
    //     const res = ""

    //     if (res?.data) {
    //         setImageFileList([]);
    //         formOne.resetFields()
    //         dispatch(closeTeamModalOpenOne());
    //     }
    // } catch (errors) {
    // }


  }
  const onFinishTwo = (values) => {
    console.log(values)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" pt-20 lg:pt-[120px] pb-[52px] bg-[#f6f6f6]">
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
            <h2 className='text-[20px] md:text-[50px] font-medium font-degular'>Checkout</h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between pt-8">
          {/* left  */}
          <div className="w-full lg:w-[50%]">
            <Form form={formOne} onFinish={onFinishOne}>


              {/* phone number */}
              <div>
                <Form.Item
                  name="phone_number"
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


              <div className="flex flex-col md:flex-row justify-between md:gap-3">
                {/* brand name */}
                <div className="w-full md:w-[50%]">
                  <p className="text-[20px] font-degular">Brand Name</p>
                  <Form.Item name="brand_name">
                    <Input
                      placeholder="Brand name"
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
                      }}
                    />
                  </Form.Item>
                </div>


                {/* car modal */}
                <div className="w-full md:w-[50%]">
                  <p className="text-[20px] font-degular">Car Model</p>
                  <Form.Item name="car_model">
                    <Input
                      placeholder="Car Model"
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
                      }}
                    />
                  </Form.Item>
                </div>
              </div>


              <div>
                <p className="text-[20px] font-degular">picture</p>
                <Form.Item
                  className="md:col-span-2"
                  name="image"
                  rules={[
                    {
                      required: ImageFileList.length === 0,
                      message: "Image required!",
                    },
                  ]}
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileList}
                    onChange={({ fileList }) => setImageFileList(fileList)}
                    listType="picture-card"
                    className="w-full"
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex justify-center items-center">
                      {/* <UploadCloud className="w-5 h-5 text-gray-400" /> */}
                      <span className="text-4xl">+</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>


              <div className="border border-[#ccc] flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-0 p-4 rounded-lg">
                <p className="text-[28px] font-degular font-semibold text-[#000000]">Appointment Note</p>
                <button
                  onClick={showModal}
                  type="button" className="bg-primary text-[#ffff] px-8 py-2 rounded text-xl">+ Add</button>
              </div>
              <div className="pt-4 pb-2 pr-1 font-degular">
                <Checkbox className=" font-semibold font-degular">
                  <div className="flex gap-3">
                    <span>I  agree with the </span>
                    <span className="text-primary">Privacy Policy</span>
                    And
                    <span className="text-primary">Terms & Conditions</span>
                  </div>
                </Checkbox>
              </div>

              {/* submit button component */}
              {/* <Button
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
                Create account
              </Button> */}
            </Form>


            {/* node modal component */}
            <Modal
              centered
              title={
                <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                  Add note
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

              <div className='p-4'>
                <Form form={formTwo} onFinish={onFinishTwo}>
                  <Form.Item name="description">
                    <TextArea placeholder="Type here" style={{ height: "300px", resize: "none" }} />
                  </Form.Item>

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
                      marginTop: "20px"
                    }}
                  >
                    Add
                  </Button>
                </Form>
              </div>
            </Modal>
          </div>

          {/* right  */}
          <div className=" w-full lg:w-[40%]">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <p className='text-[20px]  font-medium font-degular'>Appointment Summery</p>
              <button onClick={() => navigate(-1)} className="flex items-center gap-2 border border-primary px-4 py-2 rounded text-[16px] font-semibold text-primary font-degular"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.71 4.04125C18.1 3.65125 18.1 3.00125 17.71 2.63125L15.37 0.291249C15 -0.0987512 14.35 -0.0987512 13.96 0.291249L12.12 2.12125L15.87 5.87125M0 14.2512V18.0012H3.75L14.81 6.93125L11.06 3.18125L0 14.2512Z" fill="#0063E6" />
              </svg>
                Change</button>
            </div>
            <div className="flex flex-col md:flex-row justify-between border border-[#ccc] rounded-lg p-4 font-degular mt-6">


              <div className="flex items-center gap-3">
                <img src="/checkoutLogo.svg" alt="logo" />
                <div>
                  <p className='text-[20px]  font-degular'>Thursday, March 27, 2025</p>
                  <p className='text-[20px] text-gray-300 font-degular'>10:00 PM</p>
                </div>
              </div>

              <button onClick={() => navigate(-1)} className="border border-primary px-6 py-4 rounded-lg w-[100px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.7071 4.04125C18.0971 3.65125 18.0971 3.00125 17.7071 2.63125L15.3671 0.291249C14.9971 -0.0987512 14.3471 -0.0987512 13.9571 0.291249L12.1171 2.12125L15.8671 5.87125M-0.00292969 14.2512V18.0012H3.74707L14.8071 6.93125L11.0571 3.18125L-0.00292969 14.2512Z" fill="#0063E6" />
                </svg>

              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between border border-[#ccc] rounded-lg p-4 font-degular mt-6">
              <p className='text-[28px]  font-degular text-primary'>Compact</p>
              <div>
                <p className='text-[20px]  font-degular'>Both</p>
                <p className='text-[28px]  font-bold text-primary font-degular'>$180.00</p>
              </div>
            </div>


            {/* paypal account component */}
            <div className=" rounded-lg p-8 bg-[#ffff] space-y-4 mt-8">
              <div className="flex justify-between items-center">
                <p className='text-[20px]  font-degular'>Pay with </p>
                <img src="/paypal.svg" alt="" />
              </div>

              <div>
                <p className="font-degular text-[#30313D]">Card number</p>
                <div className="flex justify-between items-center border border-[#ccc] rounded-lg px-2 py-3 cursor-pointer">
                  <p> 1234 1234 1234 1234</p>
                  <img src="/creditCardBrands.svg" alt="photo" />
                </div>
              </div>

              <div className="">

                <div className="flex flex-col md:flex-row justify-between gap-3">



                  <div className="w-full md:w-[50%] ">
                    <p className="font-degular text-[#30313D]">Expiration</p>
                    <div className="flex justify-between border border-[#ccc] rounded-lg px-2 py-3 cursor-pointer">
                      MM / YY
                    </div>
                  </div>
                  <div className="w-full md:w-[50%] ">
                    <p className="font-degular text-[#30313D]">CVC</p>
                    <div className="flex justify-between border border-[#ccc] rounded-lg px-2 py-3 cursor-pointer">
                      CVC
                      <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M14.337 1.5C13.6146 2.00713 13.025 2.68088 12.6182 3.4642C12.2114 4.24753 11.9993 5.11734 12 6C12 7.33 12.472 8.55 13.257 9.5H3C2.73478 9.5 2.48043 9.60536 2.29289 9.79289C2.10536 9.98043 2 10.2348 2 10.5V11.5C2 11.7652 2.10536 12.0196 2.29289 12.2071C2.48043 12.3946 2.73478 12.5 3 12.5H19C19.2652 12.5 19.5196 12.3946 19.7071 12.2071C19.8946 12.0196 20 11.7652 20 11.5V10.9C20.7976 10.4917 21.484 9.89559 22 9.163V15.5C22 16.0304 21.7893 16.5391 21.4142 16.9142C21.0391 17.2893 20.5304 17.5 20 17.5H2C1.46957 17.5 0.960859 17.2893 0.585786 16.9142C0.210714 16.5391 0 16.0304 0 15.5V3.5C0 2.96957 0.210714 2.46086 0.585786 2.08579C0.960859 1.71071 1.46957 1.5 2 1.5H14.337ZM21.044 1.793C21.283 1.995 21.504 2.217 21.706 2.456C21.5406 2.18594 21.3138 1.95877 21.044 1.793Z" fill="#77787D" />
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M12.6 3.5C12.1267 4.42493 11.9262 5.46542 12.022 6.5H0V3.5H12.6Z" fill="#77787D" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.5C16.0413 11.5 14.6424 10.9205 13.6109 9.88909C12.5795 8.85764 12 7.45869 12 6C12 4.54131 12.5795 3.14236 13.6109 2.11091C14.6424 1.07946 16.0413 0.5 17.5 0.5C18.9587 0.5 20.3576 1.07946 21.3891 2.11091C22.4205 3.14236 23 4.54131 23 6C23 7.45869 22.4205 8.85764 21.3891 9.88909C20.3576 10.9205 18.9587 11.5 17.5 11.5ZM15.316 3.721H14.695L13.179 4.491V5.277L14.381 4.649V8.279H15.324V3.72H15.316V3.721ZM17.123 4.35C17.571 4.35 17.885 4.601 17.885 4.963C17.885 5.356 17.515 5.631 16.981 5.631H16.746V6.299H17.029C17.594 6.299 17.979 6.581 17.979 6.99C17.979 7.383 17.602 7.65 17.068 7.65C16.675 7.65 16.282 7.524 15.874 7.28V8.066C16.314 8.255 16.754 8.357 17.186 8.357C18.215 8.357 18.922 7.831 18.922 7.069C18.922 6.534 18.592 6.102 18.042 5.929C18.514 5.772 18.82 5.356 18.82 4.884C18.82 4.146 18.168 3.643 17.225 3.643C16.7998 3.64762 16.38 3.73845 15.991 3.91V4.68C16.369 4.468 16.754 4.35 17.123 4.35ZM20.517 6.063C21.091 6.063 21.491 6.401 21.491 6.841C21.491 7.304 21.091 7.626 20.517 7.626C20.171 7.626 19.81 7.516 19.441 7.289V8.098C19.826 8.271 20.219 8.358 20.604 8.358C20.808 8.358 20.996 8.326 21.177 8.278C21.5971 7.59822 21.82 6.8151 21.821 6.016L21.806 5.686C21.5138 5.51277 21.1786 5.42543 20.839 5.434C20.6891 5.43346 20.5393 5.44415 20.391 5.466V4.444H21.523C21.4247 4.19245 21.3035 3.95044 21.161 3.721H19.574V6.196C19.8817 6.11331 20.1984 6.06864 20.517 6.063Z" fill="#77787D" />
                      </svg>

                    </div>
                  </div>
                </div>



              </div>


              <div>
                <p className="font-degular text-[#30313D]">Country</p>
                <div className="border border-[#ccc] rounded-lg px-2 py-3 cursor-pointer flex justify-between items-center">
                  <p>Select</p>
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1933 0.719947C10.3342 0.579117 10.5252 0.5 10.7243 0.5C10.9235 0.5 11.1145 0.579117 11.2553 0.719947C11.3962 0.860777 11.4753 1.05178 11.4753 1.25095C11.4753 1.45011 11.3962 1.64112 11.2553 1.78195L6.53034 6.50595C6.38971 6.6464 6.19909 6.72529 6.00034 6.72529C5.80159 6.72529 5.61096 6.6464 5.47034 6.50595L0.745338 1.78195C0.604508 1.64112 0.525391 1.45011 0.525391 1.25095C0.525391 1.05178 0.604508 0.860777 0.745338 0.719947C0.886168 0.579117 1.07717 0.5 1.27634 0.5C1.4755 0.5 1.66651 0.579117 1.80734 0.719947L6.00034 4.91295L10.1933 0.719947Z" fill="#6D6E78" />
                  </svg>

                </div>
              </div>

              <div className="">
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
                  Book Appointment <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.293032 6L11.879 6L7.37903 1.5L8.79303 0.0859985L15.707 7L8.79303 13.914L7.37903 12.5L11.879 8L0.293032 8V6Z" fill="white" />
                  </svg>

                </Button>
              </div>
            </div>

          </div>
        </div>
      </CustomContainer>
    </section>
  )
}

export default CheckoutPage