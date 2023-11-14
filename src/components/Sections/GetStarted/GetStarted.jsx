import styles from "../../../styles"
import BlueButton from "../../UI/BlueButton"
import GreenDot from "../../UI/GreenDot"
import LOGO from "../../UI/LOGO"

const GetStarted = () => {
  return (
    <section className='container flex flex-col items-center gap-4'>
      <LOGO big={true} text={false} />
      <h1 className={`${styles.title_1}`}>Get Started Now</h1>
      <h4 className='text-2xl'>Setup is easy and takes under 5 minutes.</h4>
      <BlueButton>Get Started Now</BlueButton>
      <div className='whitespace-nowrap text-neutral-500 mt-4 flex gap-2'>
        <GreenDot />
        <span className='font-bold text-white'>1000+</span>creators have already started
      </div>
    </section>
  )
}

export default GetStarted
