import { IoMenu } from "react-icons/io5"
import { MdOutlineMicNone } from "react-icons/md"

const Search = () => {
  return (
    <div className="gap-2 px-4 py-3 bg-[#292A2F] rounded-4xl flex  items-center justify-between text-white ">
        <IoMenu className="text-2xl cursor-pointer"/>
        <input type="text"  name="" id="" className="focus:outline-none" placeholder="Search contacts"/>
        <MdOutlineMicNone className="text-2xl cursor-pointer" />
    </div>
  )
}

export default Search