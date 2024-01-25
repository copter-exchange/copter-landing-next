'use client'
import Link from "next/link"
import LogoTopBar from "@/components/icons/LogoTopBar";
import { navLinks } from "@/constants";
import { useState } from "react";
import { AccountButtons } from "./AccountButtons";
import { NavMobile } from "./NavMobile";
import { CgMenuRight } from "react-icons/cg";



const Navbar = () => {
  
  const [toggle, setToggle] = useState(false)
 
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className="flex lg:justify-between items-center max-container">
        <Link href="/">
          <LogoTopBar className="fill-white w-10 h-10 xl:h-16 xl:w-16 hover:animate-spin-slow" />
        </Link>
        <ul className="flex-1 flex ml-4 gap-10 max-lg:hidden">
          {navLinks.map((item => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-white ml-4 xl:ml-8 xl:text-2xl link-underline relative after:bg-white after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {item.label}
                </Link>
            </li>
          )))}
        </ul>
        <div className={`${toggle ? "right-0" : "-right-full"} fixed z-10 top-0 h-full transition-all duration-300 right-0`}>
          <NavMobile setToggle={setToggle} toggle={toggle}/>
        </div>
        {/* <div className="max-lg:hidden">
        </div> */}
        <div className="flex-1 flex justify-end">
            <AccountButtons className="max-lg:hidden"/>
          <CgMenuRight onClick={() => setToggle(!toggle)} className="text-white text-2xl lg:hidden cursor-pointer" />
        </div>
      </nav>
    </header>
  )
}
export default Navbar