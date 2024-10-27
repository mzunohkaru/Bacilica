import z from 'zod'

export const AuthRequest = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .max(128)
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,128}$/),
    provider: z.union([
      z.literal('email'),
      z.literal('Github'),
      z.literal('Google'),
    ]),
  })
  .brand('AuthRequest')

export type AuthRequest = z.infer<typeof AuthRequest>

export const AuthResponse = z
  .object({
    uid: z.string().uuid(),
    email: z.string().email(),
    provider: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    lastSignInAt: z.date().nullish(),
  })
  .brand('AuthResponse')

export type AuthResponse = z.infer<typeof AuthResponse>
