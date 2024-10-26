import { UserRequest } from '@repo/schema/server'

import prisma from '@/index'
import { TEST_USER_DATA, USER_TYPE } from '@/utils/contains'

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

  const userRequestData: UserRequest = {
    uid: testUid.uid,
    userName: '山田太郎',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1234567890?v=4',
    userTypeId: USER_TYPE.SENIOR,
    invitedTicket: 3,
    invitedToken: 'abcdefg',
    githubUrl: 'https://github.com/yamada-taro',
  }

  await prisma.users.upsert({
    where: {
      uid: testUid.uid,
    },
    update: userRequestData,
    create: userRequestData,
  })
}
