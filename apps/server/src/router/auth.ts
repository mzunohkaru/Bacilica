import { Hono } from 'hono'

import prisma from '@repo/database'
import {
  AuthRequest,
  AuthResponse,
  AuthDTO,
} from '@repo/schema'

const app = new Hono()
  .post('/get-auth', async c => {
    const body = await c.req.json()
    console.log(JSON.stringify(body))

    const authResponse: AuthResponse[] = await prisma.auth.findMany()
    const authDTO = authResponse.map(user => AuthDTO.parse(user))
    return c.json(authDTO, 200)
  })
  .post('/register', async c => {
    const body = await c.req.json()
    const result = AuthRequest.safeParse(body)

    if (!result.success) {
      throw result.error
    }

    const { email, password, provider } = result.data

    await prisma.auth.create({
      data: {
        email,
        password,
        provider,
      },
    })
    return c.json({ message: 'Auth registered' }, 201)
  })
  .post('/login', async c => {
    const body = await c.req.json()
    const result = AuthRequest.safeParse(body)

    if (!result.success) {
      throw result.error
    }

    const { email, password, provider } = result.data

    const user = await prisma.auth.findFirst({
      where: {
        email,
        password,
        provider,
      },
      select: {
        uid: true,
      },
    })

    if (!user) {
      return c.json({ message: 'User not found' }, 404)
    }

    await prisma.auth.update({
      where: { uid: user.uid },
      data: { lastSignInAt: new Date() },
    })
    return c.json({ message: 'User logged in' }, 200)
  })

export default app
export type AppType = typeof app
