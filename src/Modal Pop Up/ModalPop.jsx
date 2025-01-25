import React from 'react'

const ModalPop = ({header,body,footer,onClick}) => {
    const date = new Date().getFullYear()
  return (
    <div className='fixed top-0 left-0  w-full  flex items-center justify-center overflow-auto mt-20 '>
      <div className='bg-gray-200  rounded-lg shadow-xl w-3/4 h-1/2  text-center text-white'>
          <div className='bg-sky-500 p-6 relative rounded-t'>
            {header ?header :"Header Section"}
            <span onClick={onClick} className='absolute top-0 right-0 mr-2 font-bold cursor-pointer text-xl'>&times;</span>
          </div>

          <div className='bg-purple-500 p-24'>
            <div>
              {body ? body : ""}
            </div>
          </div>

          <div className='bg-orange-500 p-6 rounded-b'>
            {footer ?footer :`Footer Section ${date}`}
          </div>
      </div>

    </div>
  )
}

export default ModalPop