const BlueButton = ({ children }) => {
  return (
    <button className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-lg px-8 py-2 rounded-md'>
      {children}
    </button>
  )
}

export default BlueButton
