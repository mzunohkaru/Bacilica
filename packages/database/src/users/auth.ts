import { AuthRequest } from '@repo/schema'

import prisma from '@/index'
import { TEST_USER_DATA } from '@/utils/contains'

export async function AuthSeed() {
  const userData: AuthRequest = {
    email: TEST_USER_DATA.email,
    password: TEST_USER_DATA.password,
    provider: 'email',
    lastSignInAt: new Date(),
  }

  await prisma.auth.create({
    data: userData,
  })
}
