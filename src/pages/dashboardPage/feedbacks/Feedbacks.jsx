import { Button, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDeleteFeedbackMutation, useGetFeedbackApiQuery, useGetHighestFeedbackApiQuery } from "../../../redux/dashboardFeatures/feedback/dashboardFeedbackApi";


const Feedbacks = () => {
  const [formOne] = Form.useForm();
  const [mondalOne, setModalOne] = useState(false);
  const [hightColor, setHightColor] = useState(false)

const {data:feebackData} = useGetFeedbackApiQuery() // get
const {data:hightedFeedbackData} = useGetHighestFeedbackApiQuery() // get highest feedback
const [deleteFeedback] = useDeleteFeedbackMutation()



  // =============  modal one start ===============
  const showModalOne = (complated) => {
    setModalOne(true)
    if (complated) {
      setHightColor(true)
    } else {
      setHightColor(false)
    }

  }

  const handleModalOneOk = () => {

  }

  const handleCancelModalOne = () => {
    setModalOne(false)
  }
  // =============  modal one end ===============



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












  const allTestimonial = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Md. Abid Hasan",
      complated: true,
      icon: [
        <svg
          key={1}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={2}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={3}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={4}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={5}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
      ],
      description: `“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempore quibusdam ducimus libero ad tempora doloribus expedita
        laborum saepe voluptas perferendis delectus assumenda rerum,
        culpa aperiam dolorum, obcaecati corrupti aspernatur a.”`,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Md. Abid Hasan",
      complated: true,
      icon: [
        <svg
          key={1}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={2}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={3}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={4}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
      ],
      description: `“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempore quibusdam ducimus libero ad tempora doloribus expedita
        laborum saepe voluptas perferendis delectus assumenda rerum,
        culpa aperiam dolorum, obcaecati corrupti aspernatur a.”`,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Md. Abid Hasan",
      complated: true,
      icon: [
        <svg
          key={1}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={2}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={3}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={4}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={5}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
      ],
      description: `“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempore quibusdam ducimus libero ad tempora doloribus expedita
        laborum saepe voluptas perferendis delectus assumenda rerum,
        culpa aperiam dolorum, obcaecati corrupti aspernatur a.”`,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Md. Abid Hasan",
      inComplated: true,
      icon: [
        <svg
          key={1}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={2}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,

      ],
      description: `“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempore quibusdam ducimus libero ad tempora doloribus expedita
        laborum saepe voluptas perferendis delectus assumenda rerum,
        culpa aperiam dolorum, obcaecati corrupti aspernatur a.”`,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Md. Abid Hasan",
      inComplated: true,
      icon: [
        <svg
          key={1}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={2}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,
        <svg
          key={3}
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
            fill="#FF9E02"
          />
        </svg>,

      ],
      description: `“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tempore quibusdam ducimus libero ad tempora doloribus expedita
        laborum saepe voluptas perferendis delectus assumenda rerum,
        culpa aperiam dolorum, obcaecati corrupti aspernatur a.”`,
    },
  ];

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
  return (
    <div>
      <div className="space-y-4">
        {
          allTestimonial.map((item, index) => {
            return (
              <div key={index} className={`border ${item.complated ? "border-primary bg-primary bg-opacity-5" : "border-[#ccc]"} rounded-2xl p-4 space-y-2`}>
                <div className="flex justify-between items-center ">
                  <div className="flex items-center gap-2">
                    <img src={item.image} alt="photo" className="w-[50px] h-[50px] rounded-full" />
                    <div>
                      <h3>{item.name}</h3>
                      <p className="flex items-center">{item.icon}</p>
                    </div>
                  </div>
                  <span onClick={() => showModalOne(item.complated, item.inComplated)} className="cursor-pointer">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#F6F6F6" />
                      <path d="M24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M24 34C25.1046 34 26 33.1046 26 32C26 30.8954 25.1046 30 24 30C22.8954 30 22 30.8954 22 32C22 33.1046 22.8954 34 24 34Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </span>
                </div>
                <p>{item.description}</p>
              </div>
            )
          })
        }
      </div>


      {/* modal component */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
            Feedback
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

        <div className="">
          <div className="flex items-center gap-3 bg-red-100 p-4 border-b-2 border-gray-300 cursor-pointer">
            <span>
              <svg width="40" height="40" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z" fill="#FF3F3F" />
              </svg>

            </span>
            <p className="text-4xl font-degular font-bold text-red-500">Delete</p>
          </div>

          {
            hightColor ? <div className="flex items-center gap-3 bg-primary bg-opacity-10 p-4 cursor-pointer">
              <span>
                <svg width="35" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clipRule="evenodd" d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM8.823 12.14L6.058 9.373L5 10.431L8.119 13.552C8.30653 13.7395 8.56084 13.8448 8.826 13.8448C9.09116 13.8448 9.34547 13.7395 9.533 13.552L15.485 7.602L14.423 6.54L8.823 12.14Z" fill="#0063E5" />
                </svg>
              </span>
              <p className="text-4xl font-degular font-bold text-primary">Highlighted</p>
            </div>
              :
              <div className="flex items-center gap-3 bg-[#ffff] bg-opacity-10 p-4 cursor-pointer">
                <span>
                  <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.58 15.25L7.5 11.36L4.5 8.78L8.45 8.41L10 4.8L11.55 8.45L15.5 8.78L12.5 11.36L13.42 15.25L10 13.19L6.58 15.25ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2Z" fill="black" />
                  </svg>

                </span>
                <p className="text-4xl font-degular font-bold ">Highlighted</p>
              </div>
          }
        </div>
      </Modal>
    </div>
  )
}

export default Feedbacks