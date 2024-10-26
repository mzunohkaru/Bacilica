import z from 'zod'

export const UserDTO = z.object({
  session: z.string().uuid(),
  userName: z.string(),
  avatarUrl: z.string().nullish(),
  userTypeId: z.number(),
  invitedTicket: z.number().default(0),
  invitedToken: z.string().nullish(),
  githubUrl: z.string().nullish(),
})

export type UserDTO = z.infer<typeof UserDTO>
