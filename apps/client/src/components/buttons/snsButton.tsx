import React from 'react'
import Image from 'next/image'

export type SNSButtonType = {
  imagePath: string
}

const SNSButton = (props: SNSButtonType) => {
  return (
    <div className='rounded-full p-3 bg-[#D9D9D9]'>
      <Image
        src={props.imagePath}
        alt="icon"
        width={40}
        height={40}
        objectFit='contain'
        className="bg-[#D9D9D9]"
      />
    </div>
  )
}

export default SNSButton
