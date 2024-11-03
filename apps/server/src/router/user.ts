import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

import prisma from '@repo/database'
import { UserRequest } from '@repo/schema/src/server'
import { UserDTO } from '@repo/schema/src/DTO/user/user-DTO'
import {
  HttpStatusCode,
  INVITATION_TICKETS_BY_USER_TYPE,
  USER_TYPE,
} from '@repo/schema/src/utils'

import { generateInvitationToken } from '@/utils/token'

const app = new Hono()
  .post(
    '/create-user',
    zValidator('json', UserRequest, (result, c) => {
      if (!result.success) {
        console.log(result.error)
        return c.json({ message: result.error }, HttpStatusCode.BAD_REQUEST)
      }
      return
    }),
    async c => {
      const { uid, userName, avatarUrl, userType, githubUrl } =
        c.req.valid('json')

      await prisma.auth.findUniqueOrThrow({
        where: {
          uid,
        },
      })

      await prisma.users.create({
        data: {
          uid,
          userName,
          avatarUrl,
          userType,
          githubUrl,
        },
      })

      const res: UserDTO = {
        // TODO: セッションIDを生成する
        session: uid,
        userName,
        avatarUrl,
        userType,
        githubUrl,
        invitedTicket: 0,
        invitedToken: null,
      }
      return c.json(res, HttpStatusCode.CREATED)
    },
  )
  .put(
    '/update-user-type',
    zValidator('json', UserRequest, (result, c) => {
      if (!result.success) {
        return c.json({ message: result.error }, HttpStatusCode.BAD_REQUEST)
      }
      return
    }),
    async c => {
      const { uid, userType } = c.req.valid('json')

      const invitedTicket =
        INVITATION_TICKETS_BY_USER_TYPE[
          userType as unknown as keyof typeof INVITATION_TICKETS_BY_USER_TYPE
        ]
      const invitedToken =
        userType === USER_TYPE.JUNIOR ? null : generateInvitationToken()

      await prisma.users.update({
        where: { uid },
        data: { userType, invitedTicket, invitedToken },
      })
    },
  )

export default app
export type AppType = typeof app
