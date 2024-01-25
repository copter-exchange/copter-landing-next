import { navLinks } from '@/constants'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

interface NavMobileProps {
  setToggle: (toggle: boolean) => void
  toggle: boolean
}

export const NavMobile = ({ toggle,  setToggle }: NavMobileProps ) => {

  const handleClick = () => {
    console.log('click')
    setToggle(false)
  }

  return (
    <nav className={`lg:hidden bg-white h-full top-0 bottom-0 w-80 flex justify-center items-center ${toggle ? 'block' : 'hidden'}`}>
      <button onClick={handleClick} className='absolute top-4 left-4 cursor-pointer'>
        <CgClose className='text-copter-blue-dark text-2xl'/>
      </button>

      <ul className="text-xl flex flex-col gap-y-8">
          {navLinks.map((item => (
            <li key={item.label}>
              <Link href={item.href} className="text-copter-blue-dark ml-4 xl:ml-8 xl:text-2xl link-underline relative after:bg-copter-blue-dark after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">{item.label}</Link>
            </li>
          )))}
          {/* <div>
            <Link href={"https://copter-655bc.web.app/"} target="_blank" rel="noopener noreferrer" className="text-copter-blue-dark ml-4 xl:ml-8 xl:text-2xl link-underline relative after:bg-copter-blue-dark after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Acceder
            </Link>
          </div>
          <div>
            <Link href={"https://copter-655bc.web.app/registrar"} target="_blank" rel="noopener noreferrer" className="text-copter-blue-dark ml-4 xl:ml-8 xl:text-2xl link-underline relative after:bg-copter-blue-dark after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Registrarse
            </Link>
          </div> */}
          <div>
            <Link href={"/"} className="text-copter-blue-dark ml-4 xl:ml-8 xl:text-2xl link-underline relative after:bg-copter-blue-dark after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Acceder
            </Link>
          </div>
          <div>
            <Link href={"/"} className="text-copter-blue-dark ml-4 xl:ml-8 xl:text-2xl link-underline relative after:bg-copter-blue-dark after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Registrarse
            </Link>
          </div>
      </ul>
    </nav>
  )
}