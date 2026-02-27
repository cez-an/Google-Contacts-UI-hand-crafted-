import DialPadKey from "../NumbetKey/NumbetKey";
import CallButton from "../CallButton/CallButton";
import { FaVoicemail } from "react-icons/fa";
const NumberPad = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <DialPadKey number={"1"} letter=""  icon={<FaVoicemail />}/>
      <DialPadKey number={"2"} letter="ABC" />
      <DialPadKey number={"3"} letter="EFG" />
      <DialPadKey number={"4"} letter="GHI" />
      <DialPadKey number={"5"} letter="JKL"  />
      <DialPadKey number={"6"} letter="MNO"  />
      <DialPadKey number={"7"} letter="PQRS"  />
      <DialPadKey number={"8"} letter="TUV"  />
      <DialPadKey number={"9"} letter="TUV"  />
      <DialPadKey number={"*"} letter=""  />
      <DialPadKey number={"0"} letter="+"/>
      <DialPadKey number={"#"} letter=""  />
      <CallButton/>
    
    
    </div>
  );
};

export default NumberPad;
