import z from 'zod'

export const AllUsersDTO = z.object({
  userName: z.string(),
  profile: z.string().optional(),
  avatarUrl: z.string().optional(),
  userTypeId: z.number(),
  invitedTicket: z.number().default(0),
  invitedToken: z.string().optional(),
  githubUrl: z.string().optional(),
})

export type AllUsersDTO = z.infer<typeof AllUsersDTO>
