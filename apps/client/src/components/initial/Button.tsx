import React from 'react'
import Image from 'next/image';
import { madimiOne } from '@/app/fonts/googleFonts';

export type ButtonPropType = {
  imagePath: string;
  alt: string;
  serviceName: string;
  isLogin: boolean;
  handleAuth: () => void;
}


export const Button = (props: ButtonPropType) => {
  return (
    <button onClick={props.handleAuth} className='flex flex-row justify-start items-center text-black bg-[#B9B9B9] py-2 px-8 w-[60%] rounded-3xl m-1'>
      <Image
        src={props.imagePath}
        alt={props.alt}
        height='50'
        width='50'
      />
      <div className={`ml-8 mr-1 text-lg ${madimiOne.className}`}>{props.serviceName}</div>
      <div className='text-lg'>{props.isLogin ? "でログイン" : "でサインアップ"}</div>
    </button>
  )
}

