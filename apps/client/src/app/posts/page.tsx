import Layout from '@/components/layout/layout'
import Post from '@/components/posts/post'
import React from 'react'
import { madimiOne } from '../fonts/googleFonts'

const Posts = () => {
  const categoryList: string[] = [
    "React",
    "Next.js",
    "Go"
  ]
  return (
    <Layout>
      <div className='whole-layout w-full h-full p-[3vw]'>
        {/* Delete h-[20vh] */}
        <section className='topics-section h-[20vh]'>Topics</section>
        <section className={`header-section w-full h-full flex flex-row justify-between items-start py-[1vw] ${madimiOne.className}`}>
          <div className='flex flex-row items-end'>
            <h1 className='underline'>articles</h1>
            <div className='text-xl'>
              {categoryList.map((category, index) => (
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
        {/* Delete h-[200vh] */}
        <section className='posts-section h-[200vh] grid grid-cols-2'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </div>
    </Layout>
  )
}

export default Posts
