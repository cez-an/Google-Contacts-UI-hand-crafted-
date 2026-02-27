import CallCard from "../../Home-Components/CallCard/CallCard"
import KeyPad from "../../Keyboard-Components/KeyPad/KeyPad"
import Suggested from "../../Keyboard-Components/Suggested/Suggested"
import BottomCard from "../../Partials/BottomCard/BottomCard"

const Keyboard = () => {
  return (
    <div className='relative w-97.5 min-h-200 bg-[#1E1F24] px-3 py-4'>
        <Suggested/>
        <CallCard/>
        <KeyPad/>
        <BottomCard/>
    </div>
  )
}

export default Keyboard