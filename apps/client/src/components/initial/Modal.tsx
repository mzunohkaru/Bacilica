import Image from 'next/image';
import React, { forwardRef } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import {Madimi_One} from 'next/font/google'
import { Button, ButtonPropType } from './Button';

type ModalProps = {
  onClose: () => void;
  isLogin: boolean
}

const madimiOne = Madimi_One({weight: '400', subsets: ['latin'] })

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ onClose, isLogin }, ref) => {
  const buttonProps: ButtonPropType[] = [
    {
      imagePath: "/images/google-icon.png",
      alt: "google icon",
      serviceName: "google",
      isLogin: isLogin
    },
    {
      imagePath: '/images/github-icon.png',
      alt: 'github icon',
      serviceName: 'GitHub',
      isLogin: isLogin,
    },
    {
      imagePath: '/images/X-icon.png',
      alt: 'X icon',
      serviceName: 'X',
      isLogin: isLogin,
    },
  ];
  return (
    <div ref={ref} className='absolute inset-0 m-auto flex flex-row flex-grow justify-center items-center w-[70vw] h-[70vh] text-white text-5xl z-20 bg-[#FCEFFFC2]'>
      <button onClick={onClose} className='absolute top-2 right-2 text-white text-xl z-10'>
        <XCircleIcon className='size-8'/>
      </button>
      <section className='w-[50%] flex flex-col justify-center items-center'>
        <XCircleIcon className='size-40' />
        <p className={`text-xl text-black my-8 ${madimiOne.className}`}>Get Started</p>
        {
          buttonProps.map((props, index) => (
            <Button key={index} {...props} />
          ))
        }
        <p className='text-lg text-[#218DC9]'>連携できない場合はこちら</p>
      </section>
      <section className='relative w-[50%] h-full'>
        <Image
          src='/images/login-img.jpg'
          alt='login-image'
          layout='fill'
          objectFit='cover'
        />
      </section>
    </div>
  )
})

export default Modal

