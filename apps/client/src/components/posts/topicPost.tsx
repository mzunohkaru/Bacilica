import Image from 'next/image'
import React from 'react'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'

export type TopicPostPropsType = {
  thumbnailPath: string
  iconPath: string
  title: string
  content: string
  tags: string[]
  frameStyle: string[]
}

const TopicPost = (props: TopicPostPropsType) => {
  return (
    <div
      className={`topics-post absolute transform ${props.frameStyle.join(' ')} flex flex-col items-center border-none rounded-xl bg-gradient-to-b from-[#D2D2D233] to-[#D0D0D073] text-lg transition-all ease-in-out duration-500`}
    >
      <p className='title text-xl self-start mx-5 mt-5'>{props.title}</p>
      <div className={`relative w-full h-1/2`}>
        <Image
          src={props.thumbnailPath}
          alt='post image'
          layout='fill'
          className='m-2 object-contain'
        />
      </div>
      <p className='content flex flex-grow flex-row items-center'>
        AIによる要約
      </p>
      <div className='tag-container flex flex-grow flex-row items-center space-x-2'>
        {props.tags.map((tag, index) => (
          <p key={index}>#{tag}</p>
        ))}
      </div>
      <section className='info-section w-full flex flex-row justify-between'>
        <div className='flex flex-row items-center space-x-2 m-3'>
          <Image
            src={props.iconPath}
            alt='icon'
            height={30}
            width={30}
            className='rounded-full object-cover'
          />
          <p>古美門</p>
        </div>
        <div className='flex flex-row items-center space-x-2 m-3'>
          <BookmarkIcon className='size-6 stroke-black' />
          <HeartIcon className='size-6 stroke-black' />
        </div>
      </section>
    </div>
  )
}

export default TopicPost
