import z from 'zod'

export const CreateEngineerPostRequest = z.object({
  uid: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  githubUrl: z.string().nullable(),
  programmingLanguages: z.array(z.number()),
})

export type CreateEngineerPostRequest = z.infer<typeof CreateEngineerPostRequest>

export const EngineerPostResponse = z.object({
  id: z.number(),
  uid: z.string().uuid().nullable(),
  title: z.string(),
  description: z.string(),
  likeCount: z.number(),
  displayCount: z.number(),
  commentCount: z.number(),
  algorithmPoint: z.number(),
  githubUrl: z.string().nullable(),
  createdAt: z.date(),
  programmingLanguages: z.array(z.number()),
  postStructure: z.array(z.object({
    postType: z.enum(['text', 'image', 'video']),
    postTypeId: z.number(),
    order: z.number(),
  })),
})

export type EngineerPostResponse = z.infer<typeof EngineerPostResponse>
