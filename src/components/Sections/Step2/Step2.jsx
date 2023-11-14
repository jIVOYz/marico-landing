import IMG from "../../../assets/Step2/1.png"
import styles from "../../../styles"
import BlueButton from "../../UI/BlueButton"

const Step2 = () => {
  return (
    <section className='mt-36 container'>
      <div className='text-center flex flex-col items-center justify-center gap-3'>
        <h3 className={`${styles.blueText}`}>Step 2</h3>
        <h1 className={`${styles.title_1}`}>Share Your Homepage</h1>
        <p className={`text-neutral-500 text-xl`}>
          Share your Wavium homepage link with your followers, and <br /> we'll handle the rest.
        </p>
      </div>
      <div className='flex justify-center gap-2 md:gap-6 mt-11 md:mt-44'>
        <div className='bg-stone-950 pl-6 pt-6 w-[815px]'>
          <h3 className='text-green-500 text-3xl mb-4 md:mb-0'>One Link</h3>
          <h1 className={`${styles.title_1}`}>
            <span className='text-neutral-400'>All You Create.</span>
            <br />
            One Link
          </h1>
          <img className='mt-7 md:mt-0' src={IMG} alt='' />
        </div>
        <div className='bg-stone-950 p-6 w-[815px]'>
          <h3 className='text-green-500 text-3xl mb-4 md:mb-0'>Collect Subscribers</h3>
          <h1 className={`${styles.title_1}`}>
            <span className='text-neutral-400'>
              Emails. <br /> Phones.
            </span>
            <br />
            All Yours
          </h1>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <BlueButton>Get Started</BlueButton>
      </div>
    </section>
  )
}

export default Step2
