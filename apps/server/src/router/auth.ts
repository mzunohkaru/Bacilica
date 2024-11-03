import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

import prisma from '@repo/database'
import { AuthRequest } from '@repo/schema/src/server'
import { AuthDTO } from '@repo/schema/src/DTO/user/auth-DTO'
import { HttpStatusCode } from '@repo/schema/src/utils'

import { hashPassword, verifyPassword } from '@/utils/hash'

const app = new Hono()
  .post(
    '/register',
    zValidator('json', AuthRequest, (result, c) => {
      if (!result.success) {
        console.log(result.error)
        return c.json({ message: result.error }, HttpStatusCode.BAD_REQUEST)
      }
      return
    }),
    async c => {
      const { email, password, provider } = c.req.valid('json')

      const hashedPassword = hashPassword(password)

      const auth = await prisma.auth.create({
        data: {
          email,
          password: hashedPassword,
          provider,
        },
      })

      const res: AuthDTO = {
        uid: auth.uid,
      }

      return c.json({ res }, HttpStatusCode.CREATED)
    },
  )
  .post(
    '/login',
    zValidator('json', AuthRequest, (result, c) => {
      if (!result.success) {
        console.log(result.error)
        return c.json({ message: result.error }, 400)
      }
      return
    }),
    async c => {
      const { email, password } = c.req.valid('json')

      const auth = await prisma.auth.findUnique({
        where: {
          email,
        },
      })

      if (!auth) {
        throw new Error('Not found user', { cause: HttpStatusCode.NOT_FOUND })
      }

      if (!verifyPassword(password, auth.password)) {
        throw new Error('Invalid password', {
          cause: HttpStatusCode.FORBIDDEN,
        })
      }

      const res: AuthDTO = {
        uid: auth.uid,
      }

      return c.json({ res }, HttpStatusCode.OK)
    },
  )

export default app
export type AppType = typeof app
