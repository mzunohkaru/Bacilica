import z from 'zod'

export const AuthRequest = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  provider: z.union([z.literal('email'), z.literal('Github'), z.literal('Google')]),
  lastSignInAt: z.date(),
})

export type AuthRequest = z.infer<typeof AuthRequest>

export const AuthResponse = z.object({
  uid: z.string().uuid(),
  email: z.string().email(),
  provider: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  lastSignInAt: z.date().nullable(),
})

export type AuthResponse = z.infer<typeof AuthResponse>
