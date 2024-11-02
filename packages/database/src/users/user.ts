import { UserRequest } from '@repo/schema/src/server'
import { USER_TYPE } from '@repo/schema/src/utils'

import prisma from '@/index'
import { TEST_USER_DATA } from '@/contains'

export async function UserSeed() {
  const testUid = await prisma.auth.findUnique({
    where: {
      email: TEST_USER_DATA.email,
    },
    select: {
      uid: true,
    },
  })

  if (!testUid) {
    throw new Error('Test user not found')
  }

  const userReqBody: UserRequest = {
    uid: testUid.uid,
    userName: '山田太郎',
    userType: USER_TYPE.SENIOR,
    avatarUrl: 'https://avatars.githubusercontent.com/u/1234567890?v=4',
    invitedTicket: 3,
    invitedToken: 'abcdefg',
    githubUrl: 'https://github.com/yamada-taro',
  }

  await prisma.users.upsert({
    where: {
      uid: testUid.uid,
    },
    update: userReqBody,
    create: userReqBody,
  })
}
