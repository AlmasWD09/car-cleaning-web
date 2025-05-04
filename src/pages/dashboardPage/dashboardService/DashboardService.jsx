import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadCloud } from "lucide-react";
import { useEffect, useState } from "react"


const DashboardService = () => {
  const [formOne] = Form.useForm();
  const [formTwo] = Form.useForm();
  const [ImageFileList, setImageFileList] = useState([]);
  const [mondalOne, setModalOne] = useState(false);
  const [mondalTwo, setModalTwo] = useState(false);
  const [mondalThree, setModalThree] = useState(false);


  const showModalOne = () => {
    setModalOne(true)
  }

  const handleModalOneOk = () => {

  }

  const handleCancelModalOne = () => {
    setModalOne(false)
  }



  useEffect(() => {
    if (mondalOne) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup function
    };
  }, [mondalOne]);


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

  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {
          serviceData.map((item, index) => {
            return (
              <div key={index} className="col-span-4 bg-[#ffff]  border border-[#ccc] rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[30px] font-degular font-semibold text-[#000000]">{item.service_name}</p>
                  <button className="flex items-center gap-3 py-2 px-4 border border-primary rounded-md text-primary">
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
                  <button className="flex items-center gap-2 py-2 px-4 border border-primary rounded-md text-primary">
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




      {/* modal component */}
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
                      <span className="">Upload logo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>

              {/* car type */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Car Type</p>
                <Form.Item name="car_type" className="mb-0">
                  <Input placeholder="car name" style={{ height: "50px", borderRadius: "20px" }} style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Interior */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Interior</p>
                <Form.Item name="interior_price" className="mb-0">
                  <Input placeholder="interior price" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Exterior */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Exterior</p>
                <Form.Item name="exterior_price" className="mb-0">
                  <Input placeholder="exterior price" style={{ height: "50px", borderRadius: "20px" }} />
                </Form.Item>
              </div>

              {/* Both */}
              <div className="grid grid-cols-2 items-center gap-4">
                <p className="text-[20px] font-medium font-degular">Both</p>
                <Form.Item name="both_price" className="mb-0">
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
    </div>
  )
}

export default DashboardService