import React from 'react'

function RightTriangle() {
  return (
    <div className='absolute -bottom-20 right-0 z-0'>
      <div>
        <div className='relative h-[80vh] w-[50vw] bg-gradient-initial-right-triangle'>
          <div className='absolute border-l-[50vw] border-l-[#0B0B0B] border-b-[40vh] border-b-transparent'></div>
          <div className='absolute bottom-0 border-l-[50vw] border-l-[#0B0B0B] border-t-[40vh] border-t-transparent'></div>
        </div>
      </div>
    </div>
  )
}

export default RightTriangle
