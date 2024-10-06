import { Hono } from 'hono'

import prisma from '@repo/database'
import { UserResponse, AllUsersDTO } from '@repo/schema'

const app = new Hono().post('/get-user', async c => {
  const body = await c.req.json()
  console.log(JSON.stringify(body))

  const usersResponse: UserResponse[] = await prisma.users.findMany()
  const allUsersDTO = usersResponse.map(user => AllUsersDTO.parse(user))
  return c.json(allUsersDTO, 200)
})

export default app
export type AppType = typeof app
