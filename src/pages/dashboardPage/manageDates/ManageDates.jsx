

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const ManageDates = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='flex justify-evenly'>

      <div className='w-[40%]'>
        <h2 className='text-[28px] font-degular font-medium'>Date Blocked</h2>
        <Calendar onChange={onChange} value={value} />
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
  );
}

export default ManageDates;