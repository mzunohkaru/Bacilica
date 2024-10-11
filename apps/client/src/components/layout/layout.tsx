import Subject from '@/components/layout/subject'
import React from 'react'
import Image from 'next/image';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <main className='flex flex-col justify-start items-center bg-black'>
      <div className='w-full h-20 flex flex-row justify-start items-center bg-gradient-to-b from-[#D2D2D233] to-[#D0D0D073]'>
      {/* TODO replace with the logo image path #18 */}
      <Image
        src="/images/google-icon.png"
        alt="logo"
        height='50'
        width='50'
        className='mx-4'
      />
        <Subject title='post'/>
        <Subject title='QA'/>
        <Subject title='contacts'/>
        <Subject title='find jobs'/>
      </div>
      <div className='flex justify-start items-start h-full w-full text-5xl text-white'>{children}</div>
    </main>
  )
}

export default Layout
