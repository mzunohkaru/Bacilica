import z from 'zod'

export const UserRequest = z.object({
  uid: z.string().uuid(),
  userName: z.string(),
  avatarUrl: z.string().nullish(),
  userType: z.union([
    z.literal('JUNIOR'),
    z.literal('SENIOR'),
    z.literal('PROFESSIONAL'),
    z.literal('ADMIN'),
  ]),
  invitedTicket: z.number().positive().default(0),
  invitedToken: z.string().nullish(),
  githubUrl: z.string().nullish(),
})

export type UserRequest = z.infer<typeof UserRequest>
