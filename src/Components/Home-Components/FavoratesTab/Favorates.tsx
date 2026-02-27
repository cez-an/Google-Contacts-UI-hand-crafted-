import { FaAngleDown } from "react-icons/fa";

const Favorites = () => {
  return (
    <div
      className="flex items-center justify-between 
                    text-white text-sm"
    >
      <div className="flex mx-5 gap-1 items-center cursor-pointer">
        <p>Favorites</p> <FaAngleDown />
      </div>
      <div className="px-5 py-1 rounded-4xl bg-[#2D2E33] cursor-pointer">View contacts</div>
    </div>
  );
};

export default Favorites;
