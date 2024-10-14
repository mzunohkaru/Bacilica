import React from 'react'
import ArticlePost, { ArticlePostPropsType } from '@/components/posts/articlePost'
import { madimiOne } from '@/app/fonts/googleFonts';

export type ArticlePropType = {
  categoryList: string[];
  articlePostList: ArticlePostPropsType[];
}

const Article = (props: ArticlePropType) => {
  return (
    <div className='px-[3vw] py-[3vh]'>
      <section className={`header-section w-full h-full flex flex-row justify-between items-start py-[1vw] ${madimiOne.className}`}>
          <div className='flex flex-row items-end'>
            <h1 className='underline'>articles</h1>
            <div className='text-xl'>
              {props.categoryList.map((category, index) => (
                <a className='px-2' key={index}>{category}</a>
              ))}
            </div>
          </div>
          <div className='flex flex-row text-2xl space-x-2'>
            <div>new</div>
            <div>popular</div>
            <div>hot</div>
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
