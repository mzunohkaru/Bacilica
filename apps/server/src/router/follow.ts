import { Hono } from 'hono'

import prisma from '@repo/database'
import { FollowRequest, UnFollowRequest } from '@repo/schema/server'

const app = new Hono()
  .post('/user-follow', async c => {
    const body = await c.req.json()
    const result = FollowRequest.safeParse(body)

    if (!result.success) {
      throw result.error
    }

    const { uid, followingUid } = result.data

    await prisma.follows.create({
      data: {
        followerUid: uid,
        followingUid,
      },
    })
    return c.json({ message: 'Follow registered' }, 201)
  })
  .post('/user-un-follow', async c => {
    const body = await c.req.json()
    const result = UnFollowRequest.safeParse(body)

    if (!result.success) {
      throw result.error
    }

    const { uid, followingUid } = result.data

    await prisma.follows.delete({
      where: {
        followerUid_followingUid: {
          followerUid: uid,
          followingUid,
        },
      },
    })
    return c.json({ message: 'UnFollow registered' }, 204)
  })

export default app
export type AppType = typeof app
