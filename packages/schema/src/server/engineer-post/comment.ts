import z from 'zod'

export const CommentRequest = z.object({
  postId: z.number(),
  senderUid: z.string().uuid().nullable(),
  comment: z.string(),
})

export type CommentRequest = z.infer<typeof CommentRequest>

export const CommentResponse = z.object({
  postId: z.number(),
  senderUid: z.string().uuid().nullable(),
  comment: z.string(),
  createdAt: z.date(),
})

export type CommentResponse = z.infer<typeof CommentResponse>
