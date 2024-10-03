'use client'

import { usePost } from '@/hook/usePost'
import { useUser } from '@/hook/useUser'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { userData, fetchUser, isMutating, error, createUserData, createUser } =
    useUser()
  const handleFetchUser = () => {
    fetchUser()
    console.log('userData', userData)
  }

  const handleCreateUser = () => {
    createUser()
    console.log('createUserData', createUserData)
  }

  const { postData } = usePost()
  console.log('postData', postData)

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div className='text-slate-800 text-xl'>Initial Page</div>
        <div>
          <p>userData: {JSON.stringify(userData)}</p>
          <p>isMutating: {JSON.stringify(isMutating)}</p>
          <p>error: {JSON.stringify(error)}</p>
          <p>postData: {JSON.stringify(postData)}</p>
        </div>

        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <Button onClick={handleFetchUser}>Fetch User！！！</Button>
          <Button onClick={handleCreateUser}>Create User</Button>
        </div>
      </main>
    </div>
  )
}
