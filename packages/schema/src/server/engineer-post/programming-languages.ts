import z from 'zod'

export const ProgrammingLanguageRequest = z.object({
  id: z.number(),
  programmingLanguage: z.string(),
})

export type ProgrammingLanguageRequest = z.infer<
  typeof ProgrammingLanguageRequest
>
