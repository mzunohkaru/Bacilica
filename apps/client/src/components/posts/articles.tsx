'use client'

import React from 'react'
import ArticlePost, { ArticlePostPropsType } from '@/components/posts/articlePost'
import { madimiOne } from '@/app/fonts/googleFonts';

export type ArticlePropType = {
  categoryList: string[];
  articlePostList: ArticlePostPropsType[];
}

const Article = (props: ArticlePropType) => {
  const trends: string[] = [
    "new",
    "popular",
    "hot"
  ];

  // TODO Get the specific posts which related to the trend
  const handleTrendClick = (trend: string) => {
    console.log(trend);
  };

  // TODO Get the specific posts which related to the trend
  const handleCategoryClick = (category: string) => {
    console.log(category);
  };

  return (
    <div className='px-[3vw] py-[3vh]'>
      <section className={`header-section w-full h-full flex flex-row justify-between items-end py-[1vw] ${madimiOne.className}`}>
        <div className='flex flex-row items-end'>
          <h1 className='underline'>articles</h1>
          <div className='text-xl space-x-3 mx-3'>
            {props.categoryList.map((category, index) => (
              <button key={index} className={`px-3 text-3xl cursor-pointer group ${madimiOne.className}`} onClick={() => handleCategoryClick(category)}>
                {category}
                <div className='bg-[#A60000] w-0 h-[2px] group-hover:w-full transition-all duration-500'></div>
              </button>
            ))}
          </div>
        </div>
        <div>
          {
            trends.map((trend, index) => (
              <button key={index} className={`px-3 text-xl group ${madimiOne.className}`} onClick={() => handleTrendClick(trend)}>
                {trend}
                <div className='bg-[#A60000] w-0 h-[2px] group-hover:w-full transition-all duration-500'></div>
              </button>
            ))
          }            
        </div>
      </section>
      <section className='posts-section grid grid-cols-2 gap-x-8 gap-y-2'>
        {props.articlePostList.map((post, index) => (
          <ArticlePost key={index} {...post} />
        ))}
      </section>
    </div>
  )
}

export default Article
