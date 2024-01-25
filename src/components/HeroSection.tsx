'use client'
import SplashImage from "@/components/images/SplashImage";
import Image from "next/image";

import { TypeAnimation } from 'react-type-animation';
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { buttonAccountVariants } from "@/helpers/animations";
import { person } from "@/assets/images";
import Link from "next/link";

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: '-100vh',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    }
  },
  hover: {
    scale: 1.1,
    // textShadow: "0px 0px 8px rgba(36, 36, 36, 0.772)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
  }
}

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 500,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    }
  },
}


const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen max-container">
        <div className="flex flex-col md:flex-row mt-10 ">
          <div className="lg:w-1/2 flex items-center">
            <div className="space-y-8 md:space-y-20">
              {/* <AnimatedText text="Pagos desde cualquier parte del mundo" /> */}
              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl 2xl:text-[86px] text-white over">
                {/* <span>Pagos desde</span>
                  <br />
                  <span>cualquier 
                  parte del</span>
                  <br />
                  <span>mundo</span> */}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Pagos desde ',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'cualquier parte ',
                    1000,
                    'del Mundo',
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                  
                  />
                  </h1>
              
              <AnimatedText text="Servicio de pagos y cobros hechos a la medida de tus necesidades." className="text-white xl:text-2xl"/>
              {/* <p className="text-white xl:text-2xl">
                Servicio de pagos y cobros hechos a la medida de tus necesidades.
              </p> */}
              <motion.button 
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white px-4 py-2 2xl:px-8 2xl:py-4 font-semibold 2xl:text-xl text-copter-blue-light rounded-2xl"
              >
                {/* <Link href={"https://copter-655bc.web.app/registrar"} target="_blank" rel="noopener noreferrer">
                  Crear cuenta
                </Link> */}
                <Link href={"#"}>
                  Crear cuenta
                </Link>
              </motion.button>
            </div>
          </div>
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="md:w-1/2"
          >
            <div className="relative">
              <SplashImage />
              <div>
                <Image
                  priority={true}
                  src={person}
                  alt="hero image"
                  width={500}
                  height={500}
                  className="absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2"
                />
              </div>
            </div>
          </motion.div>
        </div>
    </section>
  );
};
export default HeroSection;
