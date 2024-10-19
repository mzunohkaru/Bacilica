import z from 'zod'

export const CreateEngineerPostStructureRequest = z.object({
  postId: z.number(),
  postType: z.enum(['text', 'image', 'video']),
  postTypeId: z.number(),
  order: z.number(),
})

export type CreateEngineerPostStructureRequest = z.infer<typeof CreateEngineerPostStructureRequest>

export const CreateEngineerPostContentRequest = z.object({
  postType: z.literal('text'),
  header: z.string().nullable(),
  content: z.string().nullable(),
})

export type CreateEngineerPostContentRequest = z.infer<typeof CreateEngineerPostContentRequest>

export const CreateEngineerPostImageRequest = z.object({
  postType: z.literal('image'),
  imageUrl: z.array(z.string()),
})

export type CreateEngineerPostImageRequest = z.infer<typeof CreateEngineerPostImageRequest>

export const CreateEngineerPostVideoRequest = z.object({
  postType: z.literal('video'),
  videoUrl: z.string(),
})

export type CreateEngineerPostVideoRequest = z.infer<typeof CreateEngineerPostVideoRequest>
