import z from 'zod'

export const POST_TYPE = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
} as const

export const PostStructureRequest = z.object({
  postId: z.number(),
  postType: z.nativeEnum(POST_TYPE),
  postTypeId: z.number(),
  order: z.number(),
})

export type PostStructureRequest = z.infer<typeof PostStructureRequest>

export const PostContentRequest = z.object({
  postType: z.enum([POST_TYPE.TEXT]),
  header: z.string().nullish(),
  content: z.string().nullish(),
})

export type PostContentRequest = z.infer<typeof PostContentRequest>

export const PostImageRequest = z.object({
  postType: z.enum([POST_TYPE.IMAGE]),
  imageUrls: z.array(z.string()),
})

export type PostImageRequest = z.infer<typeof PostImageRequest>

export const PostVideoRequest = z.object({
  postType: z.enum([POST_TYPE.VIDEO]),
  videoUrl: z.string(),
})

export type PostVideoRequest = z.infer<typeof PostVideoRequest>
