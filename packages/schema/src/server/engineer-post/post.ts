import z from 'zod'

export const PostRequest = z
  .object({
    uid: z.string().uuid(),
    title: z.string(),
    description: z.string().nullish(),
    githubUrl: z.string().nullish(),
  })
  .brand('PostRequest')

export type PostRequest = z.infer<typeof PostRequest>

export const PostResponse = z
  .object({
    id: z.number(),
    uid: z.string().uuid().nullable(),
    title: z.string(),
    description: z.string().nullish(),
    likeCount: z.number().default(0),
    displayCount: z.number().default(0),
    commentCount: z.number().default(0),
    algorithmPoint: z.number().default(0),
    githubUrl: z.string().nullish(),
    createdAt: z.date(),
  })
  .brand('PostResponse')

export type PostResponse = z.infer<typeof PostResponse>
