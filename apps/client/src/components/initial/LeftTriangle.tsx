import React from 'react'

function LeftTriangle() {
  return (
    <div className='absolute -top-20 left-0 z-0'>
      <div>
        <div className='relative h-[80vh] w-[50vw] bg-gradient-initial-left-triangle'>
          <div className='absolute border-r-[50vw] border-r-[#0B0B0B] border-b-[40vh] border-b-transparent'></div>
          <div className='absolute bottom-0 border-r-[50vw] border-r-[#0B0B0B] border-t-[40vh] border-t-transparent'></div>
        </div>
      </div>
    </div>
  )
}

export default LeftTriangle
