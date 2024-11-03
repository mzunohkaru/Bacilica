import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

import { AuthRequest } from '@repo/schema/src/server'

const app = new Hono().post(
  '/',
  zValidator('json', AuthRequest, (result, c) => {
    if (!result.success) {
      console.log(result.error)
      return c.json({ message: result.error }, 400)
    }
    return
  }),
  async c => {
    const { email, password, provider } = await c.req.json()
    return c.json({ email, password, provider }, 200)
  },
)

export default app
export type AppType = typeof app
