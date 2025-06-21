import { useEffect, useState } from "react";
import CustomContainer from "../../components/shared/CustomContainer"
import { Modal } from "antd";
import ReactStarsRating from 'react-awesome-stars-rating';



const Notification = () => {
    const [modalOpenOne, setModalOpenOne] = useState(false);
    const [rating, setRating] = useState(0);



    
    const notificationData = [
        {
            name: "Booking Successful",
            title1: "Thursday, March 27, 2025",
            title2: "10:00 PM",
            rating1: "SUV",
            rating2: "Exterior",
        },
        {
            name: "Booking Successful",
            title1: "Thursday, March 27, 2025",
            title2: "10:00 PM",
            rating1: "SUV",
            rating2: "Exterior",
        },
        {
            name: "Order Completed",
            title1: "SUV",
            title2: "Exterior",
            rating1: "",
            rating2: "",
            rating3: "Leave a review",
        },
        {
            name: "Order Completed",
            title1: "SUV",
            title2: "Exterior",
            rating1: "",
            rating2: "",
            rating3: "Leave a review",
        },
        {
            name: "Order Completed",
            title1: "SUV",
            title2: "Exterior",
            rating1: "",
            rating2: "",
            rating3: "Leave a review",
        },

    ];

    const showmodalOne = () => {
        setModalOpenOne(true)
        console.log('click------> ')
    }

    const handleModalOneOk = () => {
        setModalOpenOne(false)
    }

    const handleCancelModalOne = () => {
        setModalOpenOne(false)
    }



    const onChange = (newRating) => {
        setRating(newRating);
    };



    useEffect(() => {
        if (modalOpenOne) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modalOpenOne]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className=" pb-[52px] bg-[#f6f6f6] pt-20 lg:pt-[120px]">
            <CustomContainer>
                <p className="text-[36px] font-degular font-medium text-[#000000] pb-[32px]">Notifications</p>

                <div className="overflow-x-auto whitespace-nowrap">
                    <div className="min-w-[1000px]">
                        {notificationData.map((item, index) => {
                            return (
                                <div key={index} className="flex justify-between border border-[#ccc] mb-6 rounded-xl p-4">
                                    <div className="lg:w-[35%]">
                                        <h1 className={`${item.name === "Booking Successful" ? "text-primary text-[30px]" : "text-[#319F43] text-[30px]"}`}>{item.name}</h1>
                                    </div>

                                    <div className="flex flex-col lg:w-[40%]">
                                        <p className="text-[24px]">{item.title1}</p>
                                        <p className="">
                                            {item.title2}
                                        </p>
                                    </div>
                                    <div className="lg:w-[30%] flex justify-evenly items-center ">
                                        <div className="flex flex-col">
                                            <p className="text-[24px]">{item.rating1}</p>
                                            <div className={` ${item.rating3 ? "bg-[#F27712]  w-fit py-2 px-4 rounded text-xl text-white " : ""}`}>
                                                {item.rating2}
                                                {
                                                    item.rating3 && (
                                                        <span onClick={() => showmodalOne()} className="cursor-pointer flex items-center">
                                                            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15 0.5L18.3677 10.8647H29.2658L20.4491 17.2705L23.8168 27.6353L15 21.2295L6.18322 27.6353L9.55093 17.2705L0.734152 10.8647H11.6323L15 0.5Z" fill="white" />
                                                            </svg>
                                                            {item.rating3}
                                                        </span>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </CustomContainer>

            {/* modal components */}
            {/* modal one */}
            <Modal
                centered

                open={modalOpenOne}
                onOk={handleModalOneOk}
                onCancel={handleCancelModalOne}
                footer={null}
                width={600}
                className='custom-service-modal'
                maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
            >

                <div className="p-8">
                    <h1 className="text-[20px] font-semibold text-center">Add your rating and review</h1>


                    {/* <div className=" w-full" >
                        <Rating
                            value={rating}
                            onChange={setRating}
                            style={{ fontSize: "10px", display: 'flex', alignItems: 'center', justifyContent: "center", margin: '10px 0' }}
                            // className="custom-rating"
                        />

                        <div className="flex items-center justify-center gap-3">
                            <h2 className="text-[20px] font-semibold font-degular">Tap to add your rating</h2>
                            <button className="bg-red-500 text-[16px] text-[#fff] px-4 rounded-md" type="button" onClick={() => setRating(0)}>
                                Reset
                            </button>
                        </div>
                    </div> */}



                    <div className="">
                        <ReactStarsRating
                            onChange={onChange}
                            value={rating}
                            size={50}
                            className="flex justify-center py-3"
                        />
                        <h2 className="text-[20px]  font-degular text-center">Tap to add your rating</h2>
                    </div>


                    <div>
                        <textarea name="" id=""
                            placeholder="Add your review"
                            className="border border-gray-200 w-full h-[200px] rounded-xl  focus:outline-none  mt-4 p-4 resize-none"
                        ></textarea>
                    </div>




                    <div className="flex items-center justify-end gap-4 mt-6">
                        <button onClick={handleCancelModalOne} className="border px-4 py-1 rounded-md">Cancel</button>
                        <button type="submit" className="border px-4 py-1 rounded-md bg-primary text-[#fff]">Submit</button>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default Notification