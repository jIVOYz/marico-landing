const GrayButton = ({ children }) => {
  return (
    // w-44
    // h-12
    <button className='bg-transparent border text-neutral-500 border-neutral-500 text-lg px-8 py-2 rounded-lg font-medium'>
      {children}
    </button>
  )
}

export default GrayButton
