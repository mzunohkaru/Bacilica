import React from 'react'
import Image from 'next/image'
import { madimiOne } from '@/app/fonts/googleFonts'
import GrayButton from '../buttons/grayButton'
import SNSButton from '../buttons/snsButton'

const StatusBar = () => {
  return (
    <div
      className={`bg-gradient-to-b from-[#FFFFFFB8] to-[#A5A5A556] flex flex-col justify-start items-center text-black rounded-3xl w-[20vw] p-5 ${madimiOne.className}`}
    >
      <div className='w-[100px] h-[100px] relative mx-4'>
        <Image
          src='/images/komikado-icon.png'
          alt='icon'
          layout='fill'
          className='rounded-full'
        />
      </div>
      <div className='text-3xl my-3'>engineer Hanako</div>
      <div className='text-2xl'>follow: {23}</div>
      <div className='text-2xl'>following: {23}</div>
      <section className='flex flex-row space-x-2 my-8'>
        <GrayButton />
        <GrayButton />
      </section>
      <div className='bg-gradient-to-b from-[#F54D4D] to-[#593B3B] rounded-full w-32 h-32 p-4'>
        <div className='rounded-full w-full h-full bg-gray-400 text-xl text-white flex flex-col justify-center items-center'>
          <p>score</p>
          <p>60,173</p>
        </div>
      </div>
      <div className='text-2xl flex flex-row justify-center items-center my-4 space-x-2'>
        <SNSButton imagePath='/images/instagram-icon.png' />
        <SNSButton imagePath='/images/youtube-icon.png' />
        <SNSButton imagePath='/images/X-icon.png' />
      </div>
      <p className='text-2xl'>self introduction</p>
    </div>
  )
}

export default StatusBar
