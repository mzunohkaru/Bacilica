'use client'

import React from 'react'
import { madimiOne } from '@/app/fonts/googleFonts'
import WorkPost, { WorkPostPropsType } from './workPost'

export type WorkPropType = {
  articlePostList: WorkPostPropsType[]
}

const Works = (props: WorkPropType) => {
  // TODO Get the specific posts which related to the trend
  const handleTrendClick = (trend: string) => {
    console.log(trend)
  }

  // TODO Get the specific posts which related to the trend
  const handleCategoryClick = (category: string) => {
    console.log(category)
  }

  return (
    <div className='px-[3px] py-[3px]'>
      <section
        className={`header-section w-full h-full flex flex-row justify-between items-end py-[1vw] ${madimiOne.className}`}
      >
        <div className='flex flex-row items-end'>
          <h1 className='underline'>works</h1>
        </div>
      </section>
      <section className='posts-section grid grid-cols-2 gap-x-8 gap-y-2'>
        {props.articlePostList.map((post, index) => (
          <WorkPost key={index} {...post} />
        ))}
      </section>
    </div>
  )
}

export default Works
