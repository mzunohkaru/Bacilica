'use client'

import { usePost } from '@/hook/usePost'
import { useUser } from '@/hook/useUser'
import { Button } from '@/components/ui/button'
import LeftTriangle from '@/components/initial/LeftTriangle'
import RightTriangle from '@/components/initial/RightTriangle'
import { useEffect, useState } from 'react'

export default function Home() {
  const { userData, fetchUser, isMutating, error, createUserData, createUser } =
    useUser();
  const [isShow, setIsShow] = useState(false);
  const handleFetchUser = () => {
    fetchUser()
    console.log('userData', userData)
  }

  const handleCreateUser = () => {
    createUser()
    console.log('createUserData', createUserData)
  }

  useEffect(() => {
    document.body.classList.add(`overflow-hidden`);

    return () => {
      document.body.classList.remove(`overflow-hidden`);
    };
  }, []);

  const { postData } = usePost()
  console.log('postData', postData)

  return (
      <div className='w-screen h-screen font-[family-name:var(--font-geist-sans)] bg-[#0B0B0B]'>
        <main className='flex flex-col flex-grow w-full h-full justify-between text-white z-10'>
          <LeftTriangle />
          <RightTriangle />
          <div className='flex flex-grow flex-col justify-center items-center z-10 text-[#A68139]'>
            <div className='text-3xl font-leckerli'>Catch Phrase</div>
            <div className='text-8xl font-leckerli'>Title</div>
          </div>
          <div className='flex flex-col items-center z-10'>
          {isShow ?
            <div>
              <div className='text-xl'>Initial Page</div>
                <div className=''>
                  <p>userData: {JSON.stringify(userData)}</p>
                  <p>isMutating: {JSON.stringify(isMutating)}</p>
                  <p>error: {JSON.stringify(error)}</p>
                  <p>postData: {JSON.stringify(postData)}</p>
                </div>

                <div className='flex gap-4 items-center flex-col sm:flex-row '>
                  <Button onClick={handleFetchUser}>Fetch User！！！</Button>
                  <Button onClick={handleCreateUser}>Create User</Button>
                </div>
            </div>
            :
            <></>}
            <button onClick={() => {setIsShow(!isShow)}}>show API function</button>
          </div>
          <section className='flex flex-row justify-around h-[10vh] items-center z-10 text-4xl font-leckerli bg-black'>
          <button>log in</button>
          <div className='h-[70%] border border-white'></div>
            <button>sign up</button>
          </section>
        </main>
      </div>
  )
}
