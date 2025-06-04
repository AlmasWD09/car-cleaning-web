import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadCloud } from "lucide-react";
import { useEffect, useState } from "react"


const DashboardService = () => {
  const [formOne] = Form.useForm();
  const [formTwo] = Form.useForm();
  const [formThree] = Form.useForm();
  const [ImageFileList, setImageFileList] = useState([]);
  const [mondalOne, setModalOne] = useState(false);
  const [mondalTwo, setModalTwo] = useState(false);
  const [mondalThree, setModalThree] = useState(false);


  // =============  modal one start ===============
  const showModalOne = () => {
    setModalOne(true)
  }

  const handleModalOneOk = () => {

  }

  const handleCancelModalOne = () => {
    setModalOne(false)
  }
  // =============  modal one end ===============



  // =============  modal two start ===============
  const showModalTwo = () => {
    setModalTwo(true)
  }

  const handleModalTwoOk = () => {

  }

  const handleCancelModalTwo = () => {
    setModalTwo(false)
  }
  // =============  modal two end ===============


  // =============  modal three start ===============
  const showModalThree = () => {
    setModalThree(true)
  }

  const handleModalThreeOk = () => {

  }

  const handleCancelModalThree = () => {
    setModalThree(false)
  }
  // =============  modal two end ===============




  useEffect(() => {
    if (mondalOne || mondalTwo || mondalThree) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup function
    };
  }, [mondalOne || mondalTwo || mondalThree]);


  const serviceData = [
    {
      service_name: "Compact",
      title1: "Interior",
      title2: "Exterior",
      title3: "Both",
      price1: "$70.00",
      price2: "$80.00",
      price3: "$130.00",
    },
    {
      service_name: "SUV",
      title1: "Interior",
      title2: "Exterior",
      title3: "Both",
      price1: "$70.00",
      price2: "$80.00",
      price3: "$130.00",
    },
    {
      service_name: "Extra Large",
      title1: "Interior",
      title2: "Exterior",
      title3: "Both",
      price1: "$70.00",
      price2: "$80.00",
      price3: "$130.00",
    },
    {
      service_name: "Truck",
      title1: "Interior",
      title2: "Exterior",
      title3: "Both",
      price1: "$70.00",
      price2: "$80.00",
      price3: "$130.00",
    },
    {
      service_name: "Sports Car",
      title1: "Interior",
      title2: "Exterior",
      title3: "Both",
      price1: "$70.00",
      price2: "$80.00",
      price3: "$130.00",
    },

  ]



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


  const onFinishThree = (values) => {
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

  const timeSlots = [
    { id: 1, time: "10:00 AM" },
    { id: 2, time: "10:00 AM" },
    { id: 3, time: "10:00 AM" },
    { id: 4, time: "10:00 AM" },
    { id: 5, time: "10:00 AM" },
  ]

  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {
          serviceData.map((item, index) => {
            return (
              <div key={index} className="col-span-4 bg-[#ffff]  border border-[#ccc] rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[30px] font-degular font-semibold text-[#000000]">{item.service_name}</p>
                  <button onClick={showModalTwo} className="flex items-center gap-3 py-2 px-4 border border-primary rounded-md text-primary">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.71 4.04125C18.1 3.65125 18.1 3.00125 17.71 2.63125L15.37 0.291249C15 -0.0987512 14.35 -0.0987512 13.96 0.291249L12.12 2.12125L15.87 5.87125M0 14.2512V18.0012H3.75L14.81 6.93125L11.06 3.18125L0 14.2512Z" fill="#0063E6" />
                    </svg>

                    <span className="text-[20px] font-semibold text-primary font-degular">Edit</span>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-between pt-6 space-y-2">
                  <div className="w-full flex justify-between items-center gap-3 py-2 px-4 border border-[#ccc] rounded-[20px] ">
                    <p className="text-[20px] font-degular font-medium">{item.title1}</p>
                    <h2 className="text-[28px] font-degular font-semibold">{item.price1}</h2>
                  </div>
                  <div className="w-full flex justify-between items-center gap-3 py-2 px-4 border border-[#ccc] rounded-[20px] ">
                    <p className="text-[20px] font-degular font-medium">{item.title2}</p>
                    <h2 className="text-[28px] font-degular font-semibold">{item.price2}</h2>
                  </div>
                  <div className="w-full flex justify-between items-center gap-3 py-2 px-4 border border-[#ccc] rounded-[20px] ">
                    <p className="text-[20px] font-degular font-medium">{item.title3}</p>
                    <h2 className="text-[28px] font-degular font-semibold">{item.price3}</h2>
                  </div>
                </div>

                <div className="pt-4">
                  <button onClick={showModalThree} className="flex items-center gap-2 py-2 px-4 border border-primary rounded-md text-primary">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.71 4.04125C18.1 3.65125 18.1 3.00125 17.71 2.63125L15.37 0.291249C15 -0.0987512 14.35 -0.0987512 13.96 0.291249L12.12 2.12125L15.87 5.87125M0 14.2512V18.0012H3.75L14.81 6.93125L11.06 3.18125L0 14.2512Z" fill="#0063E6" />
                    </svg>

                    <span className="text-[20px] font-semibold text-primary font-degular ">Edit time settings</span>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="py-8">
        <button
          onClick={showModalOne}
          type="button" className="w-[274px] h-[64px] bg-primary text-[#ffff] px-8 py-2 rounded-[20px] text-xl">+ Add more</button>
      </div>




      {/*================== modal component ============= */}
      {/* modal one */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
            Add new Service
          </div>
        }
        open={mondalOne}
        onOk={handleModalOneOk}
        onCancel={handleCancelModalOne}
        footer={null}
        width={600}
        className='custom-service-modal'
        maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
      >

        <div className="p-8">
          <Form form={formOne} onFinish={onFinishOne}>
            <div className="space-y-3">
              {/* car image */}
              <div className="w-full flex justify-center items-center border border-[#ccc] p-4 rounded-xl mb-10">
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
                      <UploadCloud className="w-5 h-5 text-gray-400" />
                      <span className="w-full">Upload logo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>

              {/* car type */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Car Type</p>
                <Form.Item name="car_type" className="mb-0"
                  rules={[{ required: true, message: "Car type is required!" }]}
                >
                  <Input placeholder="car name" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Interior */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Interior</p>
                <Form.Item name="interior_price" className="mb-0"
                  rules={[
                    { required: true, message: "Interior price is required!" },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Interior price must be a number!",
                    },
                  ]}
                >
                  <Input placeholder="interior price" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Exterior */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Exterior</p>
                <Form.Item name="exterior_price" className="mb-0"
                  rules={[
                    { required: true, message: "Exterior price is required!" },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Exterior price must be a number!",
                    },
                  ]}
                >
                  <Input placeholder="exterior price" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Both */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Both</p>
                <Form.Item name="both_price" className="mb-0"
                  rules={[
                    { required: true, message: "Both price is required!" },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Both price must be a number!",
                    },
                  ]}
                >
                  <Input placeholder="both price" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

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
            </div>
          </Form>
        </div>
      </Modal>



      {/* modal two */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
            Compact
          </div>
        }
        open={mondalTwo}
        onOk={handleModalTwoOk}
        onCancel={handleCancelModalTwo}
        footer={null}
        width={600}
        className='custom-service-modal'
        maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
      >

        <div className="p-8">
          <Form form={formTwo} onFinish={onFinishTwo}>
            <div className="space-y-3">
              {/* car image */}
              <div className="w-full flex justify-center items-center border border-[#ccc] p-4 rounded-xl mb-10">
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
                      <UploadCloud className="w-5 h-5 text-gray-400" />
                      <span className="">Upload logo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>

              {/* car type */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Car Type</p>
                <Form.Item name="car_type" className="mb-0"
                  rules={[{ required: true, message: "Car type is required!" }]}
                >
                  <Input placeholder="car name" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Interior */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Interior</p>
                <Form.Item name="interior_price" className="mb-0"
                  rules={[
                    { required: true, message: "Interior price is required!" },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Interior price must be a number!",
                    },
                  ]}
                >
                  <Input placeholder="interior price" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Exterior */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Exterior</p>
                <Form.Item name="exterior_price" className="mb-0"
                  rules={[
                    { required: true, message: "Exterior price is required!" },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Exterior price must be a number!",
                    },
                  ]}
                >
                  <Input placeholder="exterior price" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Both */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Both</p>
                <Form.Item name="both_price" className="mb-0"
                  rules={[
                    { required: true, message: "Both price is required!" },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Both price must be a number!",
                    },
                  ]}
                >
                  <Input placeholder="both price" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

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
                Save changes
              </Button>
            </div>
          </Form>
        </div>
      </Modal>




      {/* modal three */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
            Compact Time Settings
          </div>
        }
        open={mondalThree}
        onOk={handleModalThreeOk}
        onCancel={handleCancelModalThree}
        footer={null}
        width={800}
        className='custom-service-modal'
        maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
      >

        <div className="p-8">
          <Form form={formThree} onFinish={onFinishThree}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Existing Time Slots */}
              {timeSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <span className="text-lg font-semibold text-gray-900">{slot.time}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Blue Clock/Edit Icon */}
                    <button>
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="15" fill="#E8F2FF" />
                        <path d="M25 13C18.376 13 13 18.376 13 25C13 31.624 18.376 37 25 37C31.624 37 37 31.624 37 25C37 18.376 31.624 13 25 13ZM25.072 33.4V30.988H25C23.464 30.988 21.928 30.4 20.752 29.236C19.7752 28.2582 19.1655 26.9735 19.0256 25.5986C18.8857 24.2236 19.2242 22.8425 19.984 21.688L21.304 23.008C20.452 24.604 20.668 26.62 22.012 27.964C22.852 28.804 23.956 29.2 25.06 29.176V26.608L28.456 30.004L25.072 33.4ZM30.004 28.312L28.684 26.992C29.536 25.396 29.32 23.38 27.976 22.036C27.5865 21.6431 27.1229 21.3316 26.612 21.1194C26.1011 20.9072 25.5532 20.7986 25 20.8H24.928V23.38L21.532 19.996L24.928 16.6V19.024C26.488 19 28.06 19.564 29.248 20.764C31.288 22.804 31.54 25.984 30.004 28.312Z" fill="#0063E5" />
                      </svg>

                    </button>

                    {/* Red Delete Icon */}
                    <button>
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="15" fill="#FFE2E2" />
                        <path d="M34.5 14.3333H29.75L28.3929 13H21.6071L20.25 14.3333H15.5V17H34.5M16.8571 34.3333C16.8571 35.0406 17.1431 35.7189 17.6521 36.219C18.1612 36.719 18.8516 37 19.5714 37H30.4286C31.1484 37 31.8388 36.719 32.3479 36.219C32.8569 35.7189 33.1429 35.0406 33.1429 34.3333V18.3333H16.8571V34.3333Z" fill="#FF3F3F" />
                      </svg>

                    </button>
                  </div>
                </div>
              ))}

              {/* Add New Slot Button */}
              <button
                className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:bg-gray-50 transition-all group"
              >
                <svg width="241" height="24" viewBox="0 0 241 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M118.786 13.7143H108.5V10.2857H118.786V0H122.214V10.2857H132.5V13.7143H122.214V24H118.786V13.7143Z" fill="black" />
                </svg>

              </button>



            </div>

            <div className="flex justify-center">
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
                Save changes
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default DashboardService