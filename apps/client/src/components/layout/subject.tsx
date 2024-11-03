'use client'

import React from 'react'
import { inknutAntique } from '@/app/fonts/googleFonts'
import { useRouter } from 'next/navigation'

export type SubjectPropType = {
  title: string
  navPath: string
}

const Subject = (props: SubjectPropType) => {
  const router = useRouter()
  return (
    <h1
      className={`px-3 text-xl cursor-pointer group ${inknutAntique.className}`}
      onClick={() => router.push(props.navPath)}
    >
      {props.title}
      <div className='bg-[#A60000] w-0 h-[2px] group-hover:w-full transition-all duration-500'></div>
    </h1>
  )
}

export default Subject
