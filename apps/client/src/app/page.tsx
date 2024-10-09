'use client'

import { usePost } from '@/hook/usePost'
import { useUser } from '@/hook/useUser'
import { Button } from '@/components/ui/button'
import LeftTriangle from '@/components/initial/LeftTriangle'
import RightTriangle from '@/components/initial/RightTriangle'
import { useEffect, useRef, useState } from 'react'
import Modal from '@/components/initial/Modal'
import { leckerli } from './fonts/googleFonts'

export default function Home() {
  const { userData, fetchUser, isMutating, error, createUserData, createUser } =
    useUser();
  const [isShow, setIsShow] = useState(false);
  const [isLoginModalShow, setIsLoginModalShow] = useState(false);
  const [isSignUpModalShow, setIsSignUpModalShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleFetchUser = () => {
    fetchUser()
    console.log('userData', userData)
  }

  const handleLoginModal = () => {
    setIsLoginModalShow(!isLoginModalShow);
  }

  const handleSignUpModal = () => {
    setIsSignUpModalShow(!isSignUpModalShow);
  }

  const handleCreateUser = () => {
    createUser()
    console.log('createUserData', createUserData)
  }

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsLoginModalShow(false);
      setIsSignUpModalShow(false);
    }
  };

  useEffect(() => {
    document.body.classList.add(`overflow-hidden`)

    return () => {
      document.body.classList.remove(`overflow-hidden`)
    }
  }, [])

  const { postData } = usePost()
  console.log('postData', postData)

  return (
      <div id="parent" onClick={handleModalClose} className='w-screen h-screen font-[family-name:var(--font-geist-sans)] bg-[#0B0B0B]'>
        <main className='flex flex-col flex-grow w-full h-full justify-between text-white z-10'>
          <LeftTriangle />
          <RightTriangle />
          {
            isLoginModalShow
            ? <Modal ref={modalRef} onClose={() => setIsLoginModalShow(false)} isLogin={true} />
              : <></>
        }
        {
          isSignUpModalShow
          ? <Modal ref={modalRef} onClose={() => setIsSignUpModalShow(false)} isLogin={false} />
            : <></>
        }
          <div className='flex flex-grow flex-col justify-center items-center z-10 text-[#A68139]'>
            <div className={`text-3xl ${leckerli.className}`}>Catch Phrase</div>
            <div className={`text-8xl ${leckerli.className}`}>Title</div>
          </div>
        <div className='flex flex-col items-center z-10'>
          {/* API calling example */}
          {
            isShow
              ? <div>
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
              : <></>
          }
            <button onClick={() => {setIsShow(!isShow)}}>show API function</button>
          </div>
          {/*----------------------*/}
          <section className={`flex flex-row h-[10vh] justify-center w-full items-center z-10 text-4xl font-leckerli bg-black ${leckerli.className}`}>
            <button onClick={handleLoginModal} className='flex-grow'>log in</button>
            <div className='h-[70%] border border-white'></div>
            <button onClick={handleSignUpModal} className='flex-grow'>sign up</button>
          </section>
        </main>
      </div>
  )
}
