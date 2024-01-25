import CopterImage from "@/assets/images/copterSpinnerImage.png"
import LogoCopter from "@/assets/images/logoCopter.svg"
import LogoSVG from "@/assets/images/Group.svg"
import Image from "next/image"

interface Props {
  isSelected?: boolean;
}

const SpinnerCopter = ({ isSelected }: Props ) => {
  return (
    <>
      <div className={`h-8 w-8 animate-spin ${isSelected ? "" : "text-white" }`}>
        <Image src={LogoSVG} alt="copter spinner" />
      </div>
    </>
  )
}
export default SpinnerCopter