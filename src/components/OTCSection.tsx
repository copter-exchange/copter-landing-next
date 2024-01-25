"use client"
import { otcIcons } from "@/constants"
import Image from "next/image"
import AnimatedText from "./AnimatedText"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const textVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
    }
  },
}

const iconsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 2,
    }
  },
}

const OTCSection = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])
  return (
    <section className="max-container" ref={ref}>
      {
        isInView && 
        <AnimatedText text="¿Cómo operar con nosotros en nuestra mesa OTC?" className="head-text text-center" />
      }
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={mainControls}
        className="flex justify-center mt-10">
        <p className="text-xl text-center">En tres simples pasos ya podrás estar operando</p>
      </motion.div>

      {
        isInView &&
      <motion.div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-around space-y-8 sm:space-y-0" ref={ref}>
          {otcIcons.map((icon, index) => (
            <motion.div 
            key={index} 
            className="flex flex-col justify-center mb-4 sm:mb-0"
            animate={{
              scale: [0, 1, 1, 0, 1],
              // rotate: [0, 0, 180, 180, 0],
              // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            >
              <div className="flex justify-center items-center mb-4">
                <Image src={icon.src} alt={icon.alt} />
              </div>
              <div className="flex-col items-center justify-center">
                <h3 className="font-light">{icon.text}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        }
    </section>
  )
}
export default OTCSection