interface NumberProps {
  number: string;
  letter?:string;
  icon?:any;
}

const DialPadKey = ({number,letter,icon}:NumberProps) => {
  return (
    <div className="bg-[#121318] w-29 rounded-4xl flex items-center justify-center
    hover:bg-[#6F7FA3] cursor-pointer">
      <div className="flex flex-col items-center justify-center px-11 py-1">
        <p className=" text-3xl">{number}</p>
        <p className="text-sm">{letter}</p>
        {icon}
      </div>
    </div>
  );
};

export default DialPadKey;
