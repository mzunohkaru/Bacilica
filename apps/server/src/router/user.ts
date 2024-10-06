import { Hono } from 'hono'

import prisma from '@repo/database'
import { CreateUserRequest, UserResponse } from '@repo/schema/server'

const app = new Hono().post('/create-user', async c => {
  const body = await c.req.json()
  const result = CreateUserRequest.safeParse(body)

  if (!result.success) {
    throw result.error
  }

  const { uid, userName, profile, avatarUrl, userTypeId, githubUrl } =
    result.data

  await prisma.users.create({
    data: {
      uid,
      userName,
      profile,
      avatarUrl,
      userTypeId,
      githubUrl,
    },
  })

  const userResponse: UserResponse = {
    uid,
    userName,
    profile,
    avatarUrl,
    userTypeId,
    githubUrl,
    invitedTicket: 0,
    invitedToken: null,
  }
  return c.json(userResponse, 201)
})

export default app
export type AppType = typeof app
