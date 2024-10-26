import z from 'zod'

export const LikeRequest = z.object({
  postId: z.number(),
  likerUid: z.string().uuid().nullable(),
})

export type LikeRequest = z.infer<typeof LikeRequest>

export const LikeResponse = z.object({
  postId: z.number(),
  likerUid: z.string().uuid().nullable(),
  createdAt: z.date(),
})

export type LikeResponse = z.infer<typeof LikeResponse>
