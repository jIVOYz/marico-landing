import styles from "../../../styles"
import BlueButton from "../../UI/BlueButton"
import GrayButton from "../../UI/GrayButton"
import GreenDot from "../../UI/GreenDot"
import Why from "./Why"

const Hero = () => {
  return (
    <section className='mt-8 p-4'>
      <div className={`container`}>
        <div className='flex flex-col items-center text-center'>
          <h1 className={`${styles.title_1}`}>Own your audience.</h1>
          <h1 className={`${styles.title_1} ${styles.orangeGradient}`}>So you don't lose them.</h1>
        </div>
        <h2 className='text-center text-white text-2xl md:text-4xl font-medium md:leading-[60px] mt-12 md:mt-24'>
          Turn your audience into email and <br /> text message subscribers.
        </h2>
        <div className='flex flex-col items-center mt-10'>
          <div className='flex gap-3'>
            <BlueButton>Get Started Now</BlueButton>
            <GrayButton>View A Demo</GrayButton>
          </div>
          <div className='whitespace-nowrap text-neutral-500 mt-4 flex gap-2'>
            <GreenDot />
            <span className='font-bold text-white'>1000+</span>creators have already started
          </div>
        </div>
        <Why />
      </div>
    </section>
  )
}

export default Hero
