

import { Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";


const ManageDates = () => {
  const [value, onChange] = useState(new Date());
  const [formOne] = useForm()
  const [formTwo] = useForm()
  const [mondalOne, setModalOne] = useState(false);
  const [selected, setSelected] = useState([]);



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



  return (
    <div>
      <div className='flex justify-evenly'>

        <div className='w-[40%]'>
          <h2 className='text-[28px] font-degular font-medium'>Date Blocked</h2>
          <div className="bg-gray-100 shadow-md p-4">
            <DayPicker
              mode="multiple"
              selected={selected}
              onSelect={setSelected}
              modifiersClassNames={{
                selected: 'my-selected'
              }}
              modifiersStyles={{
                selected: {
                  color: 'red',
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontWeight: 'bold'
                }
              }}
            />
            <div className="mt-2">
              {selected?.length > 0 ? (
                <p>
                  Selected dates:{" "}
                  {selected.map((date) => date.toLocaleDateString()).join(", ")}
                </p>
              ) : (
                <p>Pick one or more days.</p>
              )}
            </div>
          </div>
        </div>

        <div className='w-[30%]'>
          <div>
            <h2 className='text-[28px] font-degular font-medium text-red-500 flex items-center gap-3'>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75017 23.25L23.2502 5.75001M27 14.5C27 21.4036 21.4036 27 14.5 27C7.59644 27 2 21.4036 2 14.5C2 7.59644 7.59644 2 14.5 2C21.4036 2 27 7.59644 27 14.5Z" stroke="#FF3636" stroke-width="3" />
              </svg>

              Block certain dates</h2>
          </div>
          <div className='border border-[#ccc] rounded-[20px] p-4 space-y-4'>
            <div className='flex justify-between items-center'>
              <p className='text-[20px] font-degular font-medium'>20 March, 2025</p>
              <button className='bg-primary py-2 px-10 rounded-[20px] text-[16px] text-[#fff]'>Unlock</button>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[20px] font-degular font-medium'>20 March, 2025</p>
              <button className='bg-primary py-2 px-10 rounded-[20px] text-[16px] text-[#fff]'>Unlock</button>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[20px] font-degular font-medium'>20 March, 2025</p>
              <button className='bg-primary py-2 px-10 rounded-[20px] text-[16px] text-[#fff]'>Unlock</button>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[20px] font-degular font-medium'>20 March, 2025</p>
              <button className='bg-primary py-2 px-10 rounded-[20px] text-[16px] text-[#fff]'>Unlock</button>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[20px] font-degular font-medium'>20 March, 2025</p>
              <button className='bg-primary py-2 px-10 rounded-[20px] text-[16px] text-[#fff]'>Unlock</button>
            </div>
          </div>
        </div>

      </div>


      <div className='my-4  hidden'>
        <button onClick={() => showModalOne()} className='bg-primary text-[#fff] py-2 px-6 rounded-lg'>Click Here</button>
      </div>



      {/* modal components */}
      {/* modal one */}
      <Modal
        centered
        title={
          <div className="text-center bg-red-600 text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
            User details
          </div>
        }
        open={mondalOne}
        onOk={handleModalOneOk}
        onCancel={handleCancelModalOne}
        footer={null}
        width={500}
        className='custom-service-modal bg-custom'
        maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
      >

        <div className="p-8 space-y-4">
          <span className='flex justify-center'>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4004 49.6L49.6004 10.4M58 30C58 45.464 45.464 58 30 58C14.536 58 2 45.464 2 30C2 14.536 14.536 2 30 2C45.464 2 58 14.536 58 30Z" stroke="#FF3636" stroke-width="4" />
            </svg>

          </span>

          <div>
            <p className='font-degular text-center font-semibold text-[28px]'>Are you sure to <span className='text-[#FF3F3F] font-bold'>Block</span>
              <br />
              this date ?</p>
          </div>

          <div className='flex justify-center mt-2'>
            <button className='bg-[#FF3F3F] text-[#fff] text-[16px] font-semibold px-4 py-3 rounded-xl w-[300px]'>Block</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ManageDates;