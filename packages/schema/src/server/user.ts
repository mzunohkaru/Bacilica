import z from 'zod'

export const CreateUserRequest = z.object({
  uid: z.string().uuid(),
  userName: z.string(),
  profile: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  userTypeId: z.number(),
  githubUrl: z.string().nullable(),
})

export type CreateUserRequest = z.infer<typeof CreateUserRequest>

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
