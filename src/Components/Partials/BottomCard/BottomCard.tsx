import { IoKeypad } from 'react-icons/io5'
import { MdHomeFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BottomCard = () => {
  return (
    <div className='absolute bottom-7 left-0 w-full'>
      <div className='flex items-center justify-between px-20 mt-3'>
        <Link to={'/'}>
        <div className='flex flex-col items-center justify-center cursor-pointer'>
            <div  className='px-4 py-1 rounded-2xl bg-[#8991A8]'><MdHomeFilled className='text-2xl'/>  </div>
            <p className='text-white text-sm mt-1'>Home</p>
        </div></Link>
        
         <Link to={'/keypad'}><div className='flex flex-col items-center justify-center cursor-pointer'>
            <div  className={`px-4 py-1 rounded-2xl hover:bg-[#8991A8]`}><IoKeypad className='text-2xl text-[#BBBBC3]'/>  </div>
            <p className='text-white text-sm mt-1'>Keypad</p>
        </div></Link>
       
    </div>
    </div>
    
  )
}

export default BottomCard