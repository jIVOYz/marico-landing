const SmallBlueButton = ({ children }) => {
  return (
    // w-24
    // h-10
    <button className='bg-blue-600 text-lg hover:bg-blue-700 transition-all duration-300 text-md  px-4 py-2 rounded-md'>
      {children}
    </button>
  )
}

export default SmallBlueButton
