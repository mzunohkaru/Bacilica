import Layout from '@/components/layout/layout'
import { ArticlePostPropsType } from '@/components/posts/articlePost'
import React from 'react'
import Article from '@/components/posts/articles'
import Topics, { TopicsPropType } from '@/components/posts/topics'

const Posts = () => {
  const categoryList: string[] = [
    "React",
    "Next.js",
    "Go"
  ];

  const topicPostList: TopicsPropType[] = [
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
  ];

  const articlePostList: ArticlePostPropsType[] = [
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
      <div className='whole-layout w-full h-full relative'>
        <Topics posts={topicPostList} />
        <Article categoryList={categoryList} articlePostList={articlePostList} />
      </div>
    </Layout>
  )
}

export default Posts
