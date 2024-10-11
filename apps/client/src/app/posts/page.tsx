import Layout from '@/components/layout/layout'
import Post, { PostPropsType } from '@/components/posts/post'
import React from 'react'
import { madimiOne } from '../fonts/googleFonts'

const Posts = () => {
  const categoryList: string[] = [
    "React",
    "Next.js",
    "Go"
  ]
  const postList: PostPropsType[] = [
    {
      thumbnailPath: "/images/post-img.jpeg",
      iconPath: "/images/komikado-icon.png",
      title: "美しいアバターの作り方",
      content: "AIによる要約",
      tags:[
        "JavaScript",
        "React",
        "Design"
      ]
    },
    {
      thumbnailPath: "/images/post-img.jpeg",
      iconPath: "/images/komikado-icon.png",
      title: "美しいアバターの作り方",
      content: "AIによる要約",
      tags:[
        "JavaScript",
        "React",
        "Design"
      ]
    },
    {
      thumbnailPath: "/images/post-img.jpeg",
      iconPath: "/images/komikado-icon.png",
      title: "美しいアバターの作り方",
      content: "AIによる要約",
      tags:[
        "JavaScript",
        "React",
        "Design"
      ]
    },
    {
      thumbnailPath: "/images/post-img.jpeg",
      iconPath: "/images/komikado-icon.png",
      title: "美しいアバターの作り方",
      content: "AIによる要約",
      tags:[
        "JavaScript",
        "React",
        "Design"
      ]
    },
    {
      thumbnailPath: "/images/post-img.jpeg",
      iconPath: "/images/komikado-icon.png",
      title: "美しいアバターの作り方",
      content: "AIによる要約",
      tags:[
        "JavaScript",
        "React",
        "Design"
      ]
    },
    {
      thumbnailPath: "/images/post-img.jpeg",
      iconPath: "/images/komikado-icon.png",
      title: "美しいアバターの作り方",
      content: "AIによる要約",
      tags:[
        "JavaScript",
        "React",
        "Design"
      ]
    },
    {
      thumbnailPath: "/images/post-img.jpeg",
      iconPath: "/images/komikado-icon.png",
      title: "美しいアバターの作り方",
      content: "AIによる要約",
      tags:[
        "JavaScript",
        "React",
        "Design"
      ]
    },
    {
      thumbnailPath: "/images/post-img.jpeg",
      iconPath: "/images/komikado-icon.png",
      title: "美しいアバターの作り方",
      content: "AIによる要約",
      tags:[
        "JavaScript",
        "React",
        "Design"
      ]
    },
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
        <section className='posts-section grid grid-cols-2 gap-x-8 gap-y-2'>
          {postList.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default Posts
