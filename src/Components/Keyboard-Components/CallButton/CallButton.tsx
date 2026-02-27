import React from "react";
import { MdCall } from "react-icons/md";

const CallButton = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="hover:bg-[#1D9766] cursor-pointer px-5 py-4 bg-[#29BC6C] text-black text-sm flex gap-3 items-center justify-center rounded-4xl">
        <MdCall className="text-2xl" />
        Call
      </div>
    </div>
  );
};

export default CallButton;
