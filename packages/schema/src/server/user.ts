import z from 'zod'

export const UserRequest = z.object({
  uid: z.string().uuid(),
  userName: z.string(),
  profile: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  userTypeId: z.number(),
  invitedTicket: z.number().default(0),
  invitedToken: z.string().nullable(),
  githubUrl: z.string().nullable(),
})

export type UserRequest = z.infer<typeof UserRequest>

export const UserResponse = z.object({
  uid: z.string().uuid(),
  userName: z.string(),
  profile: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  userTypeId: z.number(),
  invitedTicket: z.number().default(0),
  invitedToken: z.string().nullable(),
  githubUrl: z.string().nullable(),
})

export type UserResponse = z.infer<typeof UserResponse>
