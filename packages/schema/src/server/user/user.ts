import z from 'zod'

export const UserRequest = z
  .object({
    uid: z.string().uuid(),
    userName: z.string(),
    avatarUrl: z.string().nullish(),
    userType: z.string(),
    invitedTicket: z.number().positive().default(0),
    invitedToken: z.string().nullish(),
    githubUrl: z.string().nullish(),
  })
  .brand('UserRequest')

export type UserRequest = z.infer<typeof UserRequest>

export const UserResponse = z
  .object({
    uid: z.string().uuid(),
    userName: z.string(),
    avatarUrl: z.string().nullish(),
    userType: z.string(),
    invitedTicket: z.number().default(0),
    invitedToken: z.string().nullish(),
    githubUrl: z.string().nullish(),
  })
  .brand('UserResponse')

export type UserResponse = z.infer<typeof UserResponse>
