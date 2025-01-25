import React from 'react'
import { useState } from 'react'
import ModalPop from './ModalPop'
const ModalTestPop = () => {
    const [isClicked,setisClicked] = useState(false)
    const handleIsClicked = () => {
        setisClicked(!isClicked)
        console.log(isClicked);
        
    }
  return (
    <div className='mx-auto w-full p-3 '>
        <div className='flex justify-center'>
            <button onClick={handleIsClicked} className='px-8 py-3 bg-gray-700 shadow-xl text-white rounded '> Modal Pop Up

         
            </button>
           {
            isClicked && <ModalPop onClick={handleIsClicked} header={"Customized the header"} body={"I changed the content of the body"}/>

           }
        </div>

    </div>
  )
}

export default ModalTestPop