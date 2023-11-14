import { useState } from "react"
import styles from "../styles"
import NavLinks from "./NavLinks"
import GrayButton from "./UI/GrayButton"
import LOGO from "./UI/LOGO"
import SmallBlueButton from "./UI/SmallBlueButton"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <header className={`h-28`}>
      <div className={`container flex flex-wrap justify-between h-full items-center px-4`}>
        <LOGO text={true} />
        {/* Desktop menu */}
        <NavLinks
          linkStyle={`text-neutral-500 hover:text-blue-500 ${styles.smooth} text-xl font-medium whitespace-nowrap`}
          className={`hidden md:flex ${styles.menuLinksGap}`}
        />
        <div className='hidden sm:flex items-center gap-2'>
          <button className='text-neutral-500 text-xl w-24 h-8'>Sign In</button>
          <SmallBlueButton>Sign Up</SmallBlueButton>
        </div>
        {/* Mobile */}
        <button className='flex flex-col gap-1 ml-4 z-20 md:hidden' onClick={toggleMenu}>
          <div
            className={` relative h-0.5 w-6 ${styles.smooth} ${isOpen ? "-rotate-45" : ""} bg-white`}
          ></div>
          <div
            className={`relative h-0.5 w-6 ${styles.smooth} ${isOpen ? "rotate-45 -top-1" : ""} bg-white`}
          ></div>
          {!isOpen && <div className='h-0.5 w-6 bg-white'></div>}
        </button>

        {isOpen && (
          <div className='z-10'>
            <nav className='absolute top-0 left-0 h-full w-full bg-gray-600 p-4 pt-11'>
              <h2 className='text-3xl mt-5 text-center font-medium'>Menu</h2>
              <div className='inline-flex gap-3 mb-6'>
                <button className='text-neutral-200 border border-neutral-300 rounded-md  px-4 py-2 text-lg'>
                  Sign In
                </button>
                <SmallBlueButton>Sign Up</SmallBlueButton>
              </div>
              <NavLinks className={`flex gap-5 flex-col items-start justify-start`} linkStyle={`text-2xl`} />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
