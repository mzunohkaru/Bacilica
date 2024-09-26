'use client'

import { useUser } from '@/hook/useUser'
import { usePost } from '@/hook/usePost'
import { ReloadIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

export function App() {
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
    <div>
      <main>
        <h1 className='text-2xl font-bold text-center'>Client</h1>
        <Button variant='secondary' onClick={() => handleFetchUser()}>
          Fetch User
        </Button>
        <Button variant='default' onClick={() => handleCreateUser()}>
          Create User
        </Button>
        <Button disabled>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Please wait
        </Button>
        <div>
          <p>userData: {JSON.stringify(userData)}</p>
          <p>isMutating: {JSON.stringify(isMutating)}</p>
          <p>error: {JSON.stringify(error)}</p>
        </div>
      </main>
      <footer>
        <div className='bg-red-500 text-white p-2 rounded-md'>
          <p>postData: {JSON.stringify(postData)}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
