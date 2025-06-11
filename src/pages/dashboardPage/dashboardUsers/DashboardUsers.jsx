
import React, { useState } from 'react';
import { Input, Modal, Space, Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
const { Search } = Input;



const DashboardUsers = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [searchText, setSearchText] = useState('')
    const [formOne] = useForm()
    const [formTwo] = useForm()

    const [mondalOne, setModalOne] = useState(false);
    const [mondalTwo, setModalTwo] = useState(false);


    // =============  modal one start ===============
    const onFinishOne = () => {
        console.log('click')
    }

    const showModalOne = (record) => {
        setModalOne(true)
    }

    const handleModalOneOk = () => {

    }

    const handleCancelModalOne = () => {
        setModalOne(false)
    }
    // =============  modal one end ===============



    // =============  modal two start ===============
    const onFinishTwo = () => {
        console.log('click two modal')
    }
    const showModalTwo = () => {
        setModalTwo(true)
    }

    const handleModalTwoOk = () => {

    }

    const handleCancelModalTwo = () => {
        setModalTwo(false)
    }
    // =============  modal two end ===============





    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1677ff',
            }}
        />
    );
    const onSearch = (value, _e, info) =>
        console.log(info === null || info === void 0 ? void 0 : info.source, value);

    const handleDelete = () => {
        console.log('click')
    }
    const handleUpdate = () => {
        console.log('click')
    }

    const columns = [
        {
            title: 'Sl.No',
            dataIndex: 'sl_no'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Card brand',
            dataIndex: 'card_band',
        },
        {
            title: <div className="text-right">Action</div>,
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <div className="flex items-center justify-end gap-3">
                    <button
                        onClick={() => showModalOne(record)}
                        className=" p-1 rounded bg-blue"
                    >
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="37" height="37" rx="5" fill="#FFF3EB" />
                            <path d="M18.5 15.3C17.632 15.3 16.7996 15.6371 16.1858 16.2373C15.5721 16.8374 15.2273 17.6513 15.2273 18.5C15.2273 19.3487 15.5721 20.1626 16.1858 20.7627C16.7996 21.3629 17.632 21.7 18.5 21.7C19.368 21.7 20.2004 21.3629 20.8142 20.7627C21.4279 20.1626 21.7727 19.3487 21.7727 18.5C21.7727 17.6513 21.4279 16.8374 20.8142 16.2373C20.2004 15.6371 19.368 15.3 18.5 15.3ZM18.5 23.8333C17.0534 23.8333 15.666 23.2714 14.6431 22.2712C13.6201 21.271 13.0455 19.9145 13.0455 18.5C13.0455 17.0855 13.6201 15.729 14.6431 14.7288C15.666 13.7286 17.0534 13.1667 18.5 13.1667C19.9466 13.1667 21.334 13.7286 22.3569 14.7288C23.3799 15.729 23.9545 17.0855 23.9545 18.5C23.9545 19.9145 23.3799 21.271 22.3569 22.2712C21.334 23.2714 19.9466 23.8333 18.5 23.8333ZM18.5 10.5C13.0455 10.5 8.38727 13.8173 6.5 18.5C8.38727 23.1827 13.0455 26.5 18.5 26.5C23.9545 26.5 28.6127 23.1827 30.5 18.5C28.6127 13.8173 23.9545 10.5 18.5 10.5Z" fill="#F96D10" />
                        </svg>

                    </button>
                    <button
                        onClick={() => showModalTwo(record)}
                        className="bg-secondary px-3 py-1 rounded "
                    >
                        <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="34" height="38" rx="6" fill="#FFE8E8" />
                            <path d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z" fill="#FF5353" />
                        </svg>

                    </button>
                </div>
            ),
        },
    ];


    const data = [
        {
            key: '1',
            sl_no: 1,
            name: 'John Brown',
            email: 'john@example.com',
            card_band: 'Visa',
            action: '1',
        },
        {
            key: '2',
            sl_no: 2,
            name: 'Emma Smith',
            email: 'emma@example.com',
            card_band: 'MasterCard',
            action: '2',
        },
        {
            key: '3',
            sl_no: 3,
            name: 'Liam Johnson',
            email: 'liam@example.com',
            card_band: 'American Express',
            action: '3',
        },
        {
            key: '4',
            sl_no: 4,
            name: 'Olivia Brown',
            email: 'olivia@example.com',
            card_band: 'Discover',
            action: '4',
        },
        {
            key: '5',
            sl_no: 5,
            name: 'Noah Williams',
            email: 'noah@example.com',
            card_band: 'Visa',
            action: '5',
        },
        {
            key: '6',
            sl_no: 6,
            name: 'Ava Jones',
            email: 'ava@example.com',
            card_band: 'MasterCard',
            action: '6',
        },
        {
            key: '7',
            sl_no: 7,
            name: 'William Garcia',
            email: 'william@example.com',
            card_band: 'Visa',
            action: '7',
        },
        {
            key: '8',
            sl_no: 8,
            name: 'Sophia Miller',
            email: 'sophia@example.com',
            card_band: 'Discover',
            action: '8',
        },
    ];



    const carImages = [
        {
            id: 1,
            image: "/profileCar/photo3.png",
        },
        {
            id: 2,
            image: "/profileCar/photo4.png",
        },
        {
            id: 3,
            image: "/profileCar/photo5.png",
        },
        {
            id: 4,
            image: "/profileCar/photo6.png",
        },
        {
            id: 5,
            image: "/profileCar/photo1.png",
        },
        {
            id: 6,
            image: "/profileCar/photo2.png",
        }
    ];



    return (
        <div>
            <Space direction="vertical" style={{ marginBottom: "20px", }}>
                <Search placeholder="enter search email or name" onSearch={onSearch} enterButton
                    className="custom-search-height"
                />
            </Space>

            <Table
                columns={columns}
                dataSource={data}
            />





            {/* modal component */}
            {/* modal one */}
            <Modal
                centered
                title={
                    <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                        User details
                    </div>
                }
                open={mondalOne}
                onOk={handleModalOneOk}
                onCancel={handleCancelModalOne}
                footer={null}
                width={900}
                className='custom-service-modal'
                maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
            >

                <div className="p-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-t-lg ">
                                <span>
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 0C15.2902 0 17.0071 0.711158 18.273 1.97703C19.5388 3.2429 20.25 4.95979 20.25 6.75C20.25 8.54021 19.5388 10.2571 18.273 11.523C17.0071 12.7888 15.2902 13.5 13.5 13.5C11.7098 13.5 9.9929 12.7888 8.72703 11.523C7.46116 10.2571 6.75 8.54021 6.75 6.75C6.75 4.95979 7.46116 3.2429 8.72703 1.97703C9.9929 0.711158 11.7098 0 13.5 0ZM13.5 16.875C20.9587 16.875 27 19.8956 27 23.625V27H0V23.625C0 19.8956 6.04125 16.875 13.5 16.875Z" fill="#888888" />
                                    </svg>

                                </span>
                                <span className="font-medium text-gray-700">User details</span>
                            </div>



                            <div className="flex items-center space-x-2 px-4 py-2 rounded-t-lg ml-4">
                                <span>
                                    <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.8 10.5652H33.18L29.013 1.39402C28.8244 0.979083 28.5169 0.626546 28.1277 0.379122C27.7384 0.131698 27.2842 5.43551e-06 26.82 0H9.18C8.71581 5.43551e-06 8.26158 0.131698 7.87235 0.379122C7.48311 0.626546 7.17558 0.979083 6.987 1.39402L2.82 10.5652H1.2C0.88174 10.5652 0.576515 10.6889 0.351472 10.909C0.126428 11.1292 0 11.4278 0 11.7391C0 12.0505 0.126428 12.3491 0.351472 12.5692C0.576515 12.7894 0.88174 12.913 1.2 12.913H2.4V24.6522C2.4 25.2749 2.65286 25.872 3.10294 26.3123C3.55303 26.7526 4.16348 27 4.8 27H8.4C9.03652 27 9.64697 26.7526 10.0971 26.3123C10.5471 25.872 10.8 25.2749 10.8 24.6522V23.4783H25.2V24.6522C25.2 25.2749 25.4529 25.872 25.9029 26.3123C26.353 26.7526 26.9635 27 27.6 27H31.2C31.8365 27 32.447 26.7526 32.8971 26.3123C33.3471 25.872 33.6 25.2749 33.6 24.6522V12.913H34.8C35.1183 12.913 35.4235 12.7894 35.6485 12.5692C35.8736 12.3491 36 12.0505 36 11.7391C36 11.4278 35.8736 11.1292 35.6485 10.909C35.4235 10.6889 35.1183 10.5652 34.8 10.5652ZM10.8 17.6087H7.2C6.88174 17.6087 6.57652 17.485 6.35147 17.2649C6.12643 17.0447 6 16.7461 6 16.4348C6 16.1234 6.12643 15.8249 6.35147 15.6047C6.57652 15.3845 6.88174 15.2609 7.2 15.2609H10.8C11.1183 15.2609 11.4235 15.3845 11.6485 15.6047C11.8736 15.8249 12 16.1234 12 16.4348C12 16.7461 11.8736 17.0447 11.6485 17.2649C11.4235 17.485 11.1183 17.6087 10.8 17.6087ZM28.8 17.6087H25.2C24.8817 17.6087 24.5765 17.485 24.3515 17.2649C24.1264 17.0447 24 16.7461 24 16.4348C24 16.1234 24.1264 15.8249 24.3515 15.6047C24.5765 15.3845 24.8817 15.2609 25.2 15.2609H28.8C29.1183 15.2609 29.4235 15.3845 29.6485 15.6047C29.8736 15.8249 30 16.1234 30 16.4348C30 16.7461 29.8736 17.0447 29.6485 17.2649C29.4235 17.485 29.1183 17.6087 28.8 17.6087ZM5.4465 10.5652L9.18 2.34783H26.82L30.5535 10.5652H5.4465Z" fill="#888888" />
                                    </svg>

                                </span>
                                <span className="font-medium text-gray-600">Car details</span>
                            </div>
                            {/* User Details Section */}
                            <div className="bg-white rounded-lg  p-6">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 mx-auto mb-4">
                                        <img
                                            src="/profileCar/photo3.png"
                                            alt="Profile"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">Md. Abid Hasan</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-3 border border-gray-200 bg-gray-50 rounded-lg">
                                        <span>
                                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z" fill="#535353" />
                                            </svg>

                                        </span>
                                        <span className="text-gray-700">example@gmail.com</span>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 border border-gray-200 bg-gray-50 rounded-lg">
                                        <span>
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clipRule="evenodd" d="M7.262 19.7281C7.262 19.7281 0 13.7354 0 7.83872C0 5.75976 0.842855 3.76595 2.34315 2.29591C3.84344 0.825863 5.87827 0 8 0C10.1217 0 12.1566 0.825863 13.6569 2.29591C15.1571 3.76595 16 5.75976 16 7.83872C16 13.7354 8.738 19.7281 8.738 19.7281C8.334 20.0926 7.669 20.0887 7.262 19.7281ZM8 11.2682C8.45963 11.2682 8.91475 11.1795 9.33939 11.0071C9.76403 10.8348 10.1499 10.5821 10.4749 10.2637C10.7999 9.94524 11.0577 9.56719 11.2336 9.15111C11.4095 8.73503 11.5 8.28908 11.5 7.83872C11.5 7.38836 11.4095 6.94241 11.2336 6.52633C11.0577 6.11025 10.7999 5.73219 10.4749 5.41374C10.1499 5.09529 9.76403 4.84267 9.33939 4.67033C8.91475 4.49798 8.45963 4.40928 8 4.40928C7.07174 4.40928 6.1815 4.77059 5.52513 5.41374C4.86875 6.05688 4.5 6.92917 4.5 7.83872C4.5 8.74826 4.86875 9.62055 5.52513 10.2637C6.1815 10.9068 7.07174 11.2682 8 11.2682Z" fill="#535353" />
                                            </svg>

                                        </span>
                                        <span className="text-gray-700">Dhaka, Bangladesh</span>
                                    </div>

                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700 font-medium">Service ordered:</span>
                                            <span className="text-xl font-bold text-gray-800">10 Times</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Car Details Section */}
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="mb-6">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-600 mb-1">Brand Name</h4>
                                            <p className="text-2xl font-bold text-gray-800">BMW</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-600 mb-1">Car Model</h4>
                                            <p className="text-2xl font-bold text-gray-800">M5 CS</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Pictures</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {carImages.map((item, index) => (
                                                <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={`BMW `}
                                                        className="w-full h-full object-cover "
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>


            {/* modal two */}
            <Modal
                centered
                open={mondalTwo}
                onOk={handleModalTwoOk}
                onCancel={handleCancelModalTwo}
                footer={null}
                width={500}

            >

                <div className="p-8">
                    <div className='flex items-center gap-2'>
                        <span>
                            <svg width="20" height="25" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1712_1263)">
                                    <rect width="14" height="14" transform="translate(0 0.0710449)" fill="white" fill-opacity="0.01" />
                                    <g clip-path="url(#clip1_1712_1263)">
                                        <path d="M7 0.946045C3.61758 0.946045 0.875 3.68862 0.875 7.07104C0.875 10.4535 3.61758 13.196 7 13.196C10.3824 13.196 13.125 10.4535 13.125 7.07104C13.125 3.68862 10.3824 0.946045 7 0.946045ZM6.5625 4.11792C6.5625 4.05776 6.61172 4.00854 6.67188 4.00854H7.32812C7.38828 4.00854 7.4375 4.05776 7.4375 4.11792V7.83667C7.4375 7.89683 7.38828 7.94604 7.32812 7.94604H6.67188C6.61172 7.94604 6.5625 7.89683 6.5625 7.83667V4.11792ZM7 10.1335C6.82827 10.13 6.66476 10.0594 6.54455 9.93667C6.42434 9.81398 6.35701 9.64906 6.35701 9.47729C6.35701 9.30553 6.42434 9.14061 6.54455 9.01792C6.66476 8.89523 6.82827 8.82455 7 8.82104C7.17173 8.82455 7.33524 8.89523 7.45545 9.01792C7.57566 9.14061 7.64299 9.30553 7.64299 9.47729C7.64299 9.64906 7.57566 9.81398 7.45545 9.93667C7.33524 10.0594 7.17173 10.13 7 10.1335Z" fill="#FAAD14" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1712_1263">
                                        <rect width="14" height="14" fill="white" transform="translate(0 0.0710449)" />
                                    </clipPath>
                                    <clipPath id="clip1_1712_1263">
                                        <rect width="14" height="14" fill="white" transform="translate(0 0.0710449)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                        <h2 className='font-semibold'>Are you sure to delete this appointment ?</h2>
                    </div>
                    <div className='flex justify-end gap-3'>
                        <button onClick={() => handleCancelModalTwo()} className='border px-4 py-1 font-semibold'>No</button>
                        <button onClick={() => handleModalTwoOk()} className='border px-4 py-1 font-semibold bg-[#FF1818] text-[#fff]'>Yes</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default DashboardUsers