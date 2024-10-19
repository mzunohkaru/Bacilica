import prisma from '@/index'

import { AuthSeed } from '@/users/auth'
import { UserSeed } from '@/users/user'
import { EngineerPostSeed } from '@/post/engineer-post'

export async function handleSeed() {
  try {
    // await AuthSeed()
    // await UserSeed()
    await EngineerPostSeed()
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}

handleSeed()
