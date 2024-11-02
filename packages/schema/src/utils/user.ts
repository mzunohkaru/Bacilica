export const USER_TYPE = {
  JUNIOR: 'JUNIOR',
  SENIOR: 'SENIOR',
  PROFESSIONAL: 'PROFESSIONAL',
  ADMIN: 'ADMIN',
} as const

export const INVITATION_TICKETS_BY_USER_TYPE = {
  [USER_TYPE.JUNIOR]: 0,
  [USER_TYPE.SENIOR]: 3,
  [USER_TYPE.PROFESSIONAL]: 5,
  [USER_TYPE.ADMIN]: 99,
} as const
