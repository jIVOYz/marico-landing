import IMG from "../../../assets/Step3/1.png"
import styles from "../../../styles"
import BlueButton from "../../UI/BlueButton"
import GrayButton from "../../UI/GrayButton"

const Step3 = () => {
  return (
    <section className='p-3 mt-40'>
      <div className='text-center flex flex-col items-center justify-center gap-3'>
        <h3 className={`${styles.blueText}`}>Step 3</h3>
        <h1 className={`${styles.title_1}`}>Send Emails & Text Messages</h1>
        <p className={`text-neutral-500 w-1/2 text-xl`}>
          No more going through a social platform. Reach and engage your audience directly over email and text
          massage.
        </p>
      </div>
      <section className='xl:flex mt-10 md:mt-40'>
        <div className='flex-100'>
          <div className={`lg:container flex justify-center lg:block`}>
            <div className={`lg:w-1/2 p-2 flex flex-col items-start`}>
              <h3 className='text-3xl font-medium'>Create & Share</h3>
              <h1 className={`${styles.title_1} mt-8 lg:mt-20`}>
                Reach Your Audience <span className='text-blue-600'>Directly.</span>
              </h1>
              <div className='flex flex-col gap-2 mt-7'>
                <div className='flex gap-3 items-center'>
                  <span className='bg-zinc-800 rounded-full h-8 w-8 p-3 flex items-center justify-center'>
                    1
                  </span>
                  <span className='text-lg'>Bring all of your content together into one homepage.</span>
                </div>
                <div className='flex gap-3 items-center'>
                  <span className='bg-zinc-800 rounded-full h-8 w-8 p-3 flex items-center justify-center'>
                    2
                  </span>
                  <span className='text-lg'>Your page automatically updates whenever you create.</span>
                </div>
              </div>
              <div className={`flex flex-col md:flex-row mt-8 md:mt-16 gap-2 md:${styles.buttonsMargin}`}>
                <BlueButton>Get Started Now</BlueButton>
                <GrayButton>View A Demo</GrayButton>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:flex-50 max-w-4xl xl:translate-x-minus100'>
          <img className='max-w-full shadow-white/30 shadow-xl' src={IMG} alt='Image' />
        </div>
      </section>
    </section>
  )
}

export default Step3
