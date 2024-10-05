import prisma from '@/index'

import { AuthSeed } from '@/users/auth'
import { UserSeed } from '@/users/user'

AuthSeed()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


UserSeed()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
