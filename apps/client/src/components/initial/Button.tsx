import React from 'react'
import Image from 'next/image';
import { Madimi_One } from 'next/font/google'

export type ButtonPropType = {
  imagePath: string,
  alt: string,
  serviceName: string,
  isLogin: boolean
}

const madimiOne = Madimi_One({weight: '400', subsets: ['latin'] })

export const Button = (props: ButtonPropType) => {
  return (
    <div className='flex flex-row justify-start items-center text-black bg-[#B9B9B9] py-2 px-8 w-[60%] rounded-3xl m-1'>
      <Image
        src={props.imagePath}
        alt={props.alt}
        height='50'
        width='50'
      />
      <div className={`ml-8 mr-1 text-lg ${madimiOne.className}`}>{props.serviceName}</div>
      <div className='text-lg'>{props.isLogin ? "でログイン" : "でサインアップ"}</div>
    </div>
  )
}

