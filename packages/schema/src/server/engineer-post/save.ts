import z from 'zod'

export const SaveRequest = z.object({
  postId: z.number(),
  saverUid: z.string().uuid().nullable(),
})

export type SaveRequest = z.infer<typeof SaveRequest>

export const SaveResponse = z.object({
  postId: z.number(),
  saverUid: z.string().uuid().nullable(),
  createdAt: z.date(),
})

export type SaveResponse = z.infer<typeof SaveResponse>
