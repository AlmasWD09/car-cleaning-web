import React, { useState } from 'react';
import { Input, Space, Table } from 'antd';
const { Search } = Input;

import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

const DashboardBookings = () => {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(!open)
  }
  const handleMenuItemClick = (item) => {

    setOpen(false);
  };


  const handleDelete = () => {
    console.log('click')
  }
  const handleUpdate = () => {
    console.log('click')
  }


  const columns = [
    {
      title: 'User', dataIndex: 'user', key: 'user',
      dataIndex: 'image',
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img src={record.image} alt="User" className="w-10 h-10 rounded-full" />
          <span>{record.user}</span>
        </div>
      ),
    },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Time', dataIndex: 'time', key: 'time',
      render: (_, record) => (
        <div>
          <div>{record.date}</div>
          <div className='text-[#888888]'>{record.time}</div>
        </div>
      ),
    },
    { title: 'Service', dataIndex: 'Service', key: 'Service' },

    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, record) => (
        <div className="flex items-center  gap-3">
          <button
            onClick={() => handleUpdate(record.action)}
            className=" p-1 rounded bg-blue"
          >
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="37" height="37" rx="5" fill="#FFF3EB" />
              <path d="M18.5 15.3C17.632 15.3 16.7996 15.6371 16.1858 16.2373C15.5721 16.8374 15.2273 17.6513 15.2273 18.5C15.2273 19.3487 15.5721 20.1626 16.1858 20.7627C16.7996 21.3629 17.632 21.7 18.5 21.7C19.368 21.7 20.2004 21.3629 20.8142 20.7627C21.4279 20.1626 21.7727 19.3487 21.7727 18.5C21.7727 17.6513 21.4279 16.8374 20.8142 16.2373C20.2004 15.6371 19.368 15.3 18.5 15.3ZM18.5 23.8333C17.0534 23.8333 15.666 23.2714 14.6431 22.2712C13.6201 21.271 13.0455 19.9145 13.0455 18.5C13.0455 17.0855 13.6201 15.729 14.6431 14.7288C15.666 13.7286 17.0534 13.1667 18.5 13.1667C19.9466 13.1667 21.334 13.7286 22.3569 14.7288C23.3799 15.729 23.9545 17.0855 23.9545 18.5C23.9545 19.9145 23.3799 21.271 22.3569 22.2712C21.334 23.2714 19.9466 23.8333 18.5 23.8333ZM18.5 10.5C13.0455 10.5 8.38727 13.8173 6.5 18.5C8.38727 23.1827 13.0455 26.5 18.5 26.5C23.9545 26.5 28.6127 23.1827 30.5 18.5C28.6127 13.8173 23.9545 10.5 18.5 10.5Z" fill="#F96D10" />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(record.action)}
            className="bg-secondary px-3 py-1 rounded "
          >
            <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="34" height="38" rx="6" fill="#FFE8E8" />
              <path d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z" fill="#FF5353" />
            </svg>

          </button>
          <button>
            {record.verify === "Ongoing" ? (
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="6" r="5.5" fill="#8C63DA" />
              </svg>
            ) : (
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="6" r="5.5" fill="#009138" />
              </svg>
            )}
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      user: 'John Doe',
      email: 'john@example.com',
      date: 'Thursday, March 27, 2025',
      time: '10:00PM',
      Service: 'Consultation',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      verify: "Ongoing",
    },
    {
      key: 2,
      user: 'Jane Smith',
      email: 'jane@example.com',
      date: 'Thursday, March 27, 2025',
      time: '10:00PM',
      Service: 'Therapy',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      verify: "Ongoing",
    },
    {
      key: 3,
      user: 'Robert Johnson',
      email: 'robert@example.com',
      date: 'Thursday, March 27, 2025',
      time: '10:00PM',
      Service: 'Coaching',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      verify: "Ongoing",
    },
    {
      key: 4,
      user: 'Emily Brown',
      email: 'emily@example.com',
      date: 'Thursday, March 27, 2025',
      time: '10:00PM',
      Service: 'Yoga Session',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      verify: "Ongoing",
    },
    {
      key: 5,
      user: 'Michael Davis',
      email: 'michael@example.com',
      date: 'Thursday, March 27, 2025',
      time: '10:00PM',
      Service: 'Mentorship',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      verify: "Complete_order",
    },
    {
      key: 6,
      user: 'Sarah Wilson',
      email: 'sarah@example.com',
      date: 'Thursday, March 27, 2025',
      time: '10:00PM',
      Service: 'Nutrition Plan',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      verify: "Complete_order",
    },
    {
      key: 7,
      user: 'David Lee',
      email: 'david@example.com',
      date: 'Thursday, March 27, 2025',
      time: '10:00PM',
      Service: 'Fitness Training',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      verify: "Complete_order",
    },
    {
      key: 8,
      user: 'Olivia Martin',
      email: 'olivia@example.com',
      date: 'Thursday, March 27, 2025',
      time: '10:00PM',
      Service: 'Career Advice',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      verify: "Complete_order",
    },
  ];



  const items = [
    {
      label: 'Compact',
      key: '1',
    },
    {
      label: 'Extra Large',
      key: '2',
    },
    {
      label: 'Truck',
      key: '3',
    },
    {
      label: 'Sports Car',
      key: '4',
    },
  ];

  const onSearch = (value, _e, info) =>
    console.log(info === null || info === void 0 ? void 0 : info.source, value);

  const menuProps = {
    items,
    onClick: handleMenuItemClick,
  };


  return (
    <>
      <div>
        <div className='flex justify-between items-center'>
          <Space direction="vertical" style={{ marginBottom: "20px", }}>
            <Search placeholder="enter search email or name" onSearch={onSearch} enterButton
              className="custom-search-height"
            />
          </Space>


          <div onClick={handleClick} className='cursor-pointer bg-primary px-4 py-3 text-[#fff] flex justify-center items-center gap-3 rounded-lg'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5929 1H2.00086C1.80861 0.999836 1.6204 1.05509 1.45875 1.15914C1.2971 1.26319 1.16886 1.41164 1.08941 1.58669C1.00995 1.76175 0.98264 1.956 1.01074 2.14618C1.03884 2.33636 1.12117 2.51441 1.24786 2.659L6.54986 8.717C6.70932 8.89948 6.7971 9.13366 6.79686 9.376V14.25C6.79686 14.3276 6.81493 14.4042 6.84964 14.4736C6.88436 14.543 6.93476 14.6034 6.99686 14.65L9.99686 16.9C10.0711 16.9557 10.1595 16.9896 10.252 16.998C10.3444 17.0063 10.4374 16.9887 10.5205 16.9472C10.6035 16.9057 10.6734 16.8419 10.7222 16.7629C10.771 16.6839 10.7969 16.5929 10.7969 16.5V9.376C10.7966 9.13366 10.8844 8.89948 11.0439 8.717L16.3459 2.658C16.9119 2.012 16.4519 1 15.5929 1Z" stroke="white" stroke-width="2" stroke-linecap="round" />
            </svg>

            <p className='font-semibold text-2xl'>Filter</p>

            <Dropdown
              menu={menuProps}
              open={open}
            >
            </Dropdown>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  )
};
export default DashboardBookings;