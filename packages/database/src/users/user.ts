import { UserRequest } from '@repo/schema'

import prisma from '@/index'
import { TEST_USER_DATA, UserType } from '@/utils/contains'

export async function UserSeed() {
  const testUserUid = await prisma.auth.findUnique({
    where: {
      email: TEST_USER_DATA.email,
    },
    select: {
      uid: true,
    },
  })

  if (!testUserUid) {
    throw new Error('Test user not found')
  }

  const userType = 'SENIOR'
  const userTypeId = UserType[userType as keyof typeof UserType]

  const userData: UserRequest = {
    uid: testUserUid.uid,
    userName: '山田太郎',
    profile: '山田です！よろしくお願いいたします。',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1234567890?v=4',
    userTypeId: userTypeId,
    invitedTicket: 3,
    invitedToken: 'abcdefg',
    githubUrl: 'https://github.com/yamada-taro',
  }

  await prisma.users.upsert({
    where: {
      uid: testUserUid.uid,
    },
    update: userData,
    create: userData,
  })
}
