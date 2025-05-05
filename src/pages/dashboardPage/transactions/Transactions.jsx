



import React, { useState } from 'react';
import { Input, Table, Avatar, Pagination, Select } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';


const { Option } = Select;

const data = [
  {
    key: '1',
    name: 'Md. Abid',
    email: 'example@gmail.com',
    service: 'SUV',
    type: 'Exterior',
    cost: 80,
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    key: '2',
    name: 'Md. Abid',
    email: 'example@gmail.com',
    service: 'Sports Car',
    type: 'Both',
    cost: 80,
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    key: '3',
    name: 'Md. Abid',
    email: 'example@gmail.com',
    service: 'Truck',
    type: 'Interior',
    cost: 80,
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
  {
    key: '4',
    name: 'Md. Abid',
    email: 'example@gmail.com',
    service: 'Compact',
    type: 'Both',
    cost: 80,
    avatar: 'https://i.pravatar.cc/40?img=4',
  },
  {
    key: '5',
    name: 'Md. Abid',
    email: 'example@gmail.com',
    service: 'SUV',
    type: 'Interior',
    cost: 80,
    avatar: 'https://i.pravatar.cc/40?img=5',
  },
  {
    key: '6',
    name: 'Md. Abid',
    email: 'example@gmail.com',
    service: 'Extra Large',
    type: 'Interior',
    cost: 80,
    avatar: 'https://i.pravatar.cc/40?img=6',
  },
];

const Transactions = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState(null);

  const pageSize = 5;

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterCategory ? item.service === filterCategory : true;
    return matchesSearch && matchesFilter;
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const columns = [
    {
      title: 'User',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div className="user-cell">
          <Avatar src={record.avatar} />
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Service',
      render: (_, record) => (
        <div>
          <div>{record.service}</div>
          <div className="text-sub">{record.type}</div>
        </div>
      ),
    },
    {
      title: 'Cost',
      render: (_, record) => (
        <span className="text-blue">${record.cost.toFixed(2)}</span>
      ),
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="top-bar">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="search-input"
          suffix={<SearchOutlined />}
        />

        <Select
          placeholder={
            <span>
              <FilterOutlined /> Filter
            </span>
          }
          allowClear
          className="filter-dropdown bg-primary"
          onChange={(value) => {
            setFilterCategory(value);
            setCurrentPage(1);
          }}
        >
          {['Sports Car', 'Truck', 'Extra Large', 'SUV', 'Compact'].map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </div>

      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        rowClassName="table-row"
      />

      <div className="pagination-wrapper">
        <Pagination
          current={currentPage}
          onChange={(page) => setCurrentPage(page)}
          total={filteredData.length}
          pageSize={pageSize}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Transactions;
