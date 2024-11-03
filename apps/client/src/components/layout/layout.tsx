'use client'

import Subject, { SubjectPropType } from '@/components/layout/subject'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  const subjectList: SubjectPropType[] = [
    {
      title: 'Posts',
      navPath: '/posts',
    },
    {
      title: 'QA',
      navPath: '/questions',
    },
    {
      title: 'Contacts',
      navPath: '/contacts',
    },
    {
      title: 'Find Jobs',
      navPath: '/companies',
    },
  ]
  return (
    <main className='flex flex-col justify-start items-center bg-black'>
      <div className='w-full h-20 flex flex-row justify-between items-center bg-gradient-to-b from-[#D2D2D233] to-[#D0D0D073]'>
        <div className='flex flex-row items-center'>
          {/* TODO replace with the logo image path #18 */}
          <div className='w-[50px] h-[50px] relative mx-4'>
            <Image
              src='/images/google-icon.png'
              alt='icon'
              layout='fill'
              className='rounded-full'
            />
          </div>
          {subjectList.map((subject, index) => (
            <Subject key={index} {...subject} />
          ))}
        </div>
        <button className='w-[70px] h-[70px] relative mx-4'>
          <Image
            src='/images/komikado.webp'
            alt='icon'
            layout='fill'
            className='rounded-full cursor-pointer'
            onClick={() => {
              router.push('/profile')
            }}
          />
        </button>
      </div>
      <div className='flex justify-start items-start h-full w-full text-5xl text-white'>
        {children}
      </div>
    </main>
  )
}

export default Layout
