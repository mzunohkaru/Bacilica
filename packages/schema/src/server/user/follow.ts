import z from 'zod'

export const FollowRequest = z.object({
  uid: z.string().uuid(),
  followingUid: z.string().uuid(),
})

export type FollowRequest = z.infer<typeof FollowRequest>

export const UnFollowRequest = z.object({
  uid: z.string().uuid(),
  unFollowingUid: z.string().uuid(),
})

export type UnFollowRequest = z.infer<typeof UnFollowRequest>
