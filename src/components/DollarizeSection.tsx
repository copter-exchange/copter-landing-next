'use client'
import { motion } from "framer-motion"
import { buttonDollarizeAnimation } from "@/helpers/animations"
import DollarIcon2 from "./icons/DollarIcon2"
import Link from "next/link"



const DollarizeSection = () => {
  return (
    <div className="max-container flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
          <DollarIcon2 className="w-full h-auto"/>
      </div>
      <div className="md:w-1/2 md:ml-6 text-center">
        <div className="space-y-10">
          <h2 className="head-text">¿Querés dolarizar tu empresa?</h2>
          <p className="font-light">Accedé a nuestro formulario y hacete parte del cambio</p>
          <motion.button 
            variants={buttonDollarizeAnimation}
            whileHover="hover"
            className="w-full max-w-screen-md lg:max-w-xs mx-auto bg-copter-blue-shine text-white px-4 py-2.5 rounded-2xl image-dollar font-bold">
            <Link href={"https://forms.gle/rTCtKqcH3jPjZftY6"} target="_blank" rel="noopener noreferrer">
              Formulario
            </Link>
          </motion.button>
        </div>
      </div> 
    </div>
  )
}
export default DollarizeSection