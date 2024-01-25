'use client'
import { rounds } from "@/constants"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import AnimatedText from "./AnimatedText"



const titleVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    }
  },
}

const textVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
    }
  },
}

const roundsVariants = {
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

const HelpSection = () => {

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
      {/* <motion.h2 
        variants={titleVariants}
        initial="hidden"
        animate={mainControls}
        className="head-text text-center"
      >
        ¿Cómo empezar a usar Copter CVU?
      </motion.h2> */}
      { 
        isInView && 
        <AnimatedText text="¿Cómo empezar a usar Copter CVU?" className="head-text text-center"/>
      }
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8" ref={ref}>
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate={mainControls}
          className="text-center md:text-xl">
          <p>Nosotros hacemos que usar cripto sea fácil.</p>
          <p>Seguí estos pasos para poder disfrutar de los beneficios de Copter</p>
        </motion.div>
        <motion.div 
        variants={roundsVariants}
        initial="hidden"
        animate={mainControls}
        className="grid grid-rows-2 gap-4 items-center justify-center md:text-xl">
          {rounds.map((round, index) => (
              <motion.div
                variants={roundsVariants}
                key={index} className="flex items-center">
                <Image src={round.imgURL} alt={`icon ${round.text}`} className="w-10 h-10" />
                <div className="mx-4">
                  <h2 className="font-semibold">{round.text}</h2>
                  <p>{round.subtext}</p>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export default HelpSection