import Layout from '@/components/layout/layout'
import React from 'react'
import Image from 'next/image';
import StatusBar from '@/components/profile/statusBar';
import UploadPostButton from '@/components/buttons/uploadPostButton';
import Works from '@/components/profile/works';
import { WorkPostPropsType } from '@/components/profile/workPost';

const Profile = () => {
  const workPostList: WorkPostPropsType[] = [
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
      <div className='flex flex-col justify-start items-center w-screen text-5xl'>
        <div className='w-[100vw] h-[25vh] relative'>
          <Image
            src="/images/bg_profile_page.jpeg"
            alt="icon"
            layout='fill'
            objectFit='cover'
            className=''
          />
        </div>
        <section className='w-full flex flex-raw py-4 px-8 space-x-3'>
          <StatusBar />
          <section className='flex-1'>
            <UploadPostButton />
            <Works articlePostList={workPostList} />
          </section>
        </section>
      </div>
    </Layout>
  )
}

export default Profile
