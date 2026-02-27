import { IoBackspaceOutline } from 'react-icons/io5';

const NumberDispay = () => {
  return (
    <div className='flex mb-4'>
    <input
  type="tel"
  className="text-white text-3xl w-full outline-none text-center "
  maxLength={10}
  onChange={(e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  }}
/>
<IoBackspaceOutline className='text-3xl text-[#76777C] cursor-pointer'/>

</div>

  )
}

export default NumberDispay