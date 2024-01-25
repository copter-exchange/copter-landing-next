"use client";
import { currencies } from "@/constants";
import { saldoFormatter } from "@/helpers/priceFormatter";
import { usePrice } from "@/hooks/usePrice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";
import { titleServicesCenterVariants } from "@/helpers/animations";


export const CurrencySection = () => {
  const [itemName, setItemName] = useState("Bitcoin");

  const { price } = usePrice();

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()


  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref}>
      {/* TITLE */}
      
        <motion.div className="flex justify-center mb-8 lg:mb-20"
          variants={titleServicesCenterVariants}
          initial="hidden"
          animate={mainControls}
        >
          <h2 className="md:title-text text-center ml-2 text-4xl font-extrabold">
            Cotizaciones
          </h2>
        </motion.div>
      
      <div className="max-container grid lg:grid-cols-4 sm:grid-cols-2 md:gap-8">
        {/* CARDS */}
        {currencies.map((item, index) => {
          // destructure item
          const { image, name, abbr, description } = item;
          return (
            <div
              onClick={() => setItemName(name)}
              className={`${
                name === itemName
                  ? "bg-gradient-to-r from-copter-blue-dark to-copter-blue-light text-white"
                  : "bg-white"
              } w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
              key={index}
            >
              <div className="flex flex-col justify-center items-center">
                {/* Item image */}
                <Image
                  className="mb-12 h-20 w-20"
                  src={image}
                  alt="item image"
                />
                {/* Item name */}
                <div className="mb-4 flex items-center gap-x-2">
                  <div className="text-[32px] font-bold">{name}</div>
                  <div className=" text-lg text-gray-400 font-medium">
                    {abbr}
                  </div>
                </div>
                {/* Item description */}
                <div className="mb-6 text-center font-bold text-2xl">
                  {price?.result[abbr] ? (
                    `$ ${saldoFormatter({ number: price.result[abbr] })}`
                  ) : (
                    // <SpinnerCopter isSelected={name === itemName}/>
                    "Cargando..."
                  )}
                </div>
                {/* Item button */}
                <button
                  className={`${
                    name === itemName
                      ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3"
                      : "text-blue w-16"
                  }border-2 border-gray-300 rounded-full h-16 flex justify-center items-center`}
                >
                  {name === itemName && (
                    <Link
                      href={"https://forms.gle/rTCtKqcH3jPjZftY6"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium"
                    >
                      Cotizar
                    </Link>
                  )}
                  <IoIosArrowRoundForward
                    className={`${name === itemName ? "text-2xl" : "text-3xl"}`}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
