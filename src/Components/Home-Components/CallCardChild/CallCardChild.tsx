import { BsBadgeHd } from 'react-icons/bs'
import { GoArrowDownLeft } from 'react-icons/go'
import { LuDot } from 'react-icons/lu'
import { MdOutlineLocalPhone } from 'react-icons/md'

const CallCardChild = () => {
  return (
    <>
    <div className=' text-white flex justify-between items-center cursor-pointer'>
        <div className='flex items-center'>
    <div className='bg-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-3xl'>{"A"}</div>
        <div className='mx-3 flex flex-col'>
            <div className='flex gap-2 items-center'><p>{"Name"}</p> <BsBadgeHd /></div>
            <div className='flex gap-1 items-center text-sm'>
                <GoArrowDownLeft /><p>Phone</p> <LuDot/> <p>{"11:08 AM"}</p>
            </div>
        </div>
        </div>
        
        <div className='p-2 rounded-4xl hover:bg-[#4C4D51] cursor-pointer'>
        <MdOutlineLocalPhone className='text-2xl' />
        </div>
    

    </div>
        <hr className=' mt-3 mb-3 -mx-3 border-[#1E1F24]  '/>
    </>
  )
}

export default CallCardChild