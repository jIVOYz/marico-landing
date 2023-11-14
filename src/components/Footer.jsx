import styles from "../styles"
import NavLinks from "./NavLinks"
import LOGO from "./UI/LOGO"

const Footer = () => {
  return (
    <footer className='md:container p-2 flex flex-col gap-6 md:flex-row justify-between items-center mt-52 mb-6'>
      <div className='flex flex-col items-center gap-2'>
        <LOGO big={false} text={true} />
        <span className='text-neutral-500 text-lg'>info@marico.co</span>
      </div>
      <div>
        <NavLinks
          linkStyle={`text-neutral-500 hover:text-blue-500 ${styles.smooth} text-xl font-medium whitespace-nowrap`}
          className={`flex flex-wrap md:flex-row gap-4 md:${styles.menuLinksGap}`}
        />
      </div>
    </footer>
  )
}

export default Footer
