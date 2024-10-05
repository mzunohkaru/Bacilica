import z from 'zod'

export const UserRequest = z.object({
  uid: z.string().uuid(),
  userName: z.string(),
  profile: z.string().optional(),
  avatarUrl: z.string().optional(),
  userTypeId: z.number(),
  invitedTicket: z.number().default(0),
  invitedToken: z.string().optional(),
  githubUrl: z.string().optional(),
})

export type UserRequest = z.infer<typeof UserRequest>

export const UserResponse = z.object({
  uid: z.string().uuid(),
  userName: z.string(),
  profile: z.string().optional(),
  avatarUrl: z.string().optional(),
  userTypeId: z.number(),
  invitedTicket: z.number().default(0),
  invitedToken: z.string().optional(),
  githubUrl: z.string().optional(),
})

export type UserResponse = z.infer<typeof UserResponse>
