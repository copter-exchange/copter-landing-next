import { buttonNavbarVariants } from "@/helpers/animations"
import { motion } from "framer-motion"
import Link from "next/link"

interface AccountButtonsProps {
  className?: string
  rest?: any
}

export const AccountButtons = ({ className, rest }: AccountButtonsProps ) => {
  return (
    <div className={`flex-1 flex justify-end items-center ${className}`}
      {...rest}
    >
      {/* <motion.div 
        className="text-white xl:text-2xl rounded-full p-2"
        variants={buttonNavbarVariants}
        whileHover="hover"
      >
        <Link href={"https://copter-655bc.web.app/"} target="_blank" rel="noopener noreferrer">
          Acceder
        </Link>
      </motion.div>
      <span className="text-white xl:text-2xl mx-3">|</span>
      <motion.div 
        className="text-white xl:text-2xl rounded-full p-2"
        variants={buttonNavbarVariants}
        whileHover="hover"
      >
        <Link href={"https://copter-655bc.web.app/registrar"} target="_blank" rel="noopener noreferrer">
          Registrarse
        </Link>
      </motion.div> */}
      <motion.div 
        className="text-white xl:text-2xl rounded-full p-2"
        variants={buttonNavbarVariants}
        whileHover="hover"
      >
        <Link href={"#"} rel="noopener noreferrer">
          Acceder
        </Link>
      </motion.div>
      <span className="text-white xl:text-2xl mx-3">|</span>
      <motion.div 
        className="text-white xl:text-2xl rounded-full p-2"
        variants={buttonNavbarVariants}
        whileHover="hover"
      >
        <Link href={"#"} rel="noopener noreferrer">
          Registrarse
        </Link>
      </motion.div>
    </div>
  )
}