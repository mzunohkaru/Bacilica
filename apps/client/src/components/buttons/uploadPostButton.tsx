import React from 'react'
import { madimiOne } from "@/app/fonts/googleFonts"
import Triangle from '../pieces/triangle';

const UploadPostButton = () => {
  const triangleLength = 100;
  return (
    <div className={`border-white border-2 rounded-xl h-[20vh] flex flex-row justify-center items-center space-x-4 ${madimiOne.className}`}>
      <div className='self-start relative w-48 inset-0 mt-8'>
        <div className='absolute top-0 pink-triangle'></div>
        <div className='absolute top-12 pink-triangle'></div>
      </div>
      <p>post new article</p>
    </div>
  )
}

export default UploadPostButton
