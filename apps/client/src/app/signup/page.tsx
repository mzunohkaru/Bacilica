'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect} from 'react'

function Signup() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO create the validation for form #13
    // TODO Set query function #14
    console.log("Signup button was pushed");
    router.push("/home");
  }

  useEffect(() => {
    document.body.classList.add(`overflow-hidden`);

    return () => {
      document.body.classList.remove(`overflow-hidden`);
    };
  }, []);

  return (
    <div className='flex flex-col justify-around items-center h-screen text-5xl'>
      <h1>サインアップ画面</h1>
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <div className='flex flex-col bg-[#666666] p-4 text-2xl w-[50vw] mb-16'>
          <label htmlFor="email">main address</label>
          <input type='email' id='email' className='h-12 my-4 mx-16 bg-[#D9D9D9]'/>
        </div>
        <div className='flex flex-col bg-[#666666] p-4 text-2xl w-[50vw] mb-24'>
          <label htmlFor="password">password</label>
          <input type='password' id='password' className='h-12 my-4 mx-16 bg-[#D9D9D9]'/>
        </div>
        <button type='submit' className='bg-[#666666] w-[25vw] py-8 text-white rounded-xl'>sign up</button>
      </form>
    </div>
  )
}

export default Signup
