import IMG_1 from "../../../assets/Testimonials/1.png"
import IMG_2 from "../../../assets/Testimonials/2.png"
import styles from "../../../styles"

const Testimonials = () => {
  return (
    <section className={`mt-52`}>
      <div className='container flex flex-col items-center gap-6'>
        <h1 className={`${styles.title_1}`}>Experts Agree</h1>
        <img className='opacity-40' src={IMG_1} alt='' />
      </div>
      <div className='relative'>
        <h1
          className={`font-semibold text-xl md:text-3xl lg:text-5xl md:w-3/4 text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          We've helped over 1,000 creatorsre claim control of their audience.
        </h1>
        <img src={IMG_2} alt='' />
      </div>
    </section>
  )
}

export default Testimonials
