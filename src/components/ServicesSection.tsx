'use client'
import { services } from "@/constants"
import ServicesCards from "./ServicesCards"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { titleServicesLeftVariants, titleServicesRightVariants } from "@/helpers/animations"


const headVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    }
  },
}

const cardsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      when: "beforeChildren",
    }
  },
}


const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])
  
  return (
    <div ref={ref} className="max-container">
      <div className="flex justify-center">
        <motion.h2 
          variants={titleServicesLeftVariants}
          initial="hidden"
          animate={mainControls}
          className="md:title-text text-center ml-2 text-4xl font-extrabold"
        >
          Nuestros
        </motion.h2>
        <motion.h2 
          variants={titleServicesRightVariants}
          initial="hidden"
          animate={mainControls}
          className="md:title-text text-center ml-2 text-4xl font-extrabold"
        >
          Servicios
        </motion.h2>
      </div>

      <motion.div 
        variants={cardsVariants}
        initial="hidden"
        animate={mainControls}
        className="grid lg:grid-cols-4 sm:grid-cols-2 md:gap-8">
        {services.map((service) => (
          <motion.div key={service.title} variants={cardsVariants}>
            <ServicesCards {...service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
export default ServicesSection