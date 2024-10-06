import prisma from '@/index'

import { AuthSeed } from '@/users/auth'
import { UserSeed } from '@/users/user'

export async function handleAuthSeed() {
  try {
    await AuthSeed()
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}

export async function handleUserSeed() {
  try {
    await UserSeed()
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}
