import Image from 'next/image'
import React from 'react'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'

export type ArticlePostPropsType = {
  thumbnailPath: string
  iconPath: string
  title: string
  content: string
  tags: string[]
}

const ArticlePost = (props: ArticlePostPropsType) => {
  return (
    <div className='article-post-container flex flex-row border-none rounded-xl bg-gradient-to-b from-[#D2D2D233] to-[#D0D0D073]'>
      <Image
        src={props.thumbnailPath}
        alt='post image'
        height={300}
        width={300}
        className='m-4 object-cover'
      />
      <section className='content-section w-full flex flex-col justify-start items-center my-4 text-lg'>
        <p className='title text-xl self-start'>{props.title}</p>
        <p className='content flex flex-grow flex-row items-center'>
          AIによる要約
        </p>
        <div className='tag-container flex flex-grow flex-row items-center space-x-2'>
          {props.tags.map((tag, index) => (
            <p key={index}>#{tag}</p>
          ))}
        </div>
        <section className='info-section w-full flex flex-row justify-between'>
          <div className='flex flex-row items-center space-x-2'>
            <Image
              src={props.iconPath}
              alt='icon'
              height={30}
              width={30}
              className='rounded-full object-cover'
            />
            <p>古美門</p>
          </div>
          <div className='flex flex-row items-center space-x-2'>
            <BookmarkIcon className='size-6 stroke-black' />
            <HeartIcon className='size-6 stroke-black' />
          </div>
        </section>
      </section>
    </div>
  )
}

export default ArticlePost
