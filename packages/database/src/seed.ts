import prisma from '@/index'

import { AuthSeed } from '@/users/auth'
import { UserSeed } from '@/users/user'
import { PostSeed } from '@/engineer-post/post'

export async function handleSeed() {
  try {
    await AuthSeed()
    await UserSeed()
    await PostSeed()
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}

handleSeed()
