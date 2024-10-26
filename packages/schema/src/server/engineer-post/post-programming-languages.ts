import z from 'zod'

export const EngineerPostProgrammingLanguagesRequest = z.object({
  postId: z.number(),
  programmingLanguageId: z.number(),
})

export type EngineerPostProgrammingLanguagesRequest = z.infer<
  typeof EngineerPostProgrammingLanguagesRequest
>
