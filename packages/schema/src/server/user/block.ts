import z from 'zod'

export const BlockRequest = z.object({
  uid: z.string().uuid(),
  blockingUid: z.string().uuid(),
})

export type BlockRequest = z.infer<typeof BlockRequest>

export const UnBlockRequest = z.object({
  uid: z.string().uuid(),
  unBlockingUid: z.string().uuid(),
})

export type UnBlockRequest = z.infer<typeof UnBlockRequest>
