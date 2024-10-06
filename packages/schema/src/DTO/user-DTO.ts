import z from 'zod'

export const UserDTO = z.object({
  session: z.string().uuid(),
  userName: z.string(),
  profile: z.string().optional(),
  avatarUrl: z.string().optional(),
  userTypeId: z.number(),
  invitedTicket: z.number().default(0),
  invitedToken: z.string().optional(),
  githubUrl: z.string().optional(),
})

export type UserDTO = z.infer<typeof UserDTO>
