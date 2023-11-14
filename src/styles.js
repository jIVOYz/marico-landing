const styles = {
  flexColumn: "flex flex-col",
  smooth: "transition-all duration-300",

  // text
  title_1: "text-4xl md:text-5xl md:text-[75px] font-semibold sm:leading-[1] md:leading-[1.5] leading-[2]",
  subTitle: "text-center text-neutral-500 text-3xl font-normal leading-[45px]",
  blueText: "text-blue-500 text-[25px] font-semibold leading-[38px]",
  orangeGradient: "bg-gradient-to-br from-red-600 to-orange-300 bg-clip-text text-transparent",

  buttonsMargin: "gap-6",
  menuLinksGap: "gap-10",
  container: "max-w-screen-xl mx-auto",
  containerLeftMargin: "max-w-screen-xl ml-auto",
}

const navLinks = [
  {
    title: "Use Cases",
    url: "#",
  },
  {
    title: "About",
    url: "#",
  },
  {
    title: "Pricing",
    url: "#",
  },
  {
    title: "Blog",
    url: "#",
  },
]

export { navLinks }
export default styles
