import GetStarted from "./Sections/GetStarted/GetStarted"
import Hero from "./Sections/Hero/Hero"
import Step1 from "./Sections/Step1/Step1"
import Step2 from "./Sections/Step2/Step2"
import Step3 from "./Sections/Step3/Step3"
import Testimonials from "./Sections/Testimonials/Testimonials"

const Main = () => {
  return (
    <main className='z-0'>
      <Hero />
      <Step1 />
      <Step2 />
      <Step3 />
      <Testimonials />
      <GetStarted />
    </main>
  )
}

export default Main
