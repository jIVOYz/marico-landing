const LOGO = ({ text, big }) => {
  return (
    <div className='flex flex-auto md:flex-none gap-3 items-center'>
      <svg
        width={`${big ? "164" : "46"}`}
        height={`${big ? "154" : "43"}`}
        viewBox='0 0 46 43'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 24.0481V42.8481H16.424V40.1881L0 24.0481Z'
          fill='#326CF9'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28.691 42.852H45.1131V24.052L28.6951 40.193L28.691 42.852Z'
          fill='#326CF9'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M45.115 0.844002L22.605 22.971L0 0.75V19.87L22.605 42.091L45.111 19.968L45.115 0.844002Z'
          fill='#326CF9'
        />
      </svg>
      {text && <span className='hidden md:block font-bold text-[28px]'>Marico</span>}
    </div>
  )
}

export default LOGO
