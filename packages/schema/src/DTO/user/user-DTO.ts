import z from 'zod'

import { USER_TYPE } from '@repo/schema/src/utils'

export const UserDTO = z.object({
  session: z.string().uuid(),
  userName: z.string(),
  avatarUrl: z.string().nullish(),
  userType: z.enum([
    USER_TYPE.JUNIOR,
    USER_TYPE.SENIOR,
    USER_TYPE.PROFESSIONAL,
    USER_TYPE.ADMIN,
  ]),
  invitedTicket: z.number().default(0),
  invitedToken: z.string().nullish(),
  githubUrl: z.string().nullish(),
})

export type UserDTO = z.infer<typeof UserDTO>
