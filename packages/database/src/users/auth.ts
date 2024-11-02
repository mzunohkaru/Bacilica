import { AuthRequest } from '@repo/schema/src/server'

import prisma from '@/index'
import { TEST_USER_DATA } from '@/contains'

export async function AuthSeed() {
  const authReqBody: AuthRequest = {
    email: TEST_USER_DATA.email,
    password: TEST_USER_DATA.password,
    provider: 'email',
  }

  await prisma.auth.create({
    data: authReqBody,
  })
}
