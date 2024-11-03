import z from 'zod'

export const AuthDTO = z.object({
  uid: z.string().uuid(),
})

export type AuthDTO = z.infer<typeof AuthDTO>
