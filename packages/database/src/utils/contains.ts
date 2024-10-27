export const TEST_USER_DATA = {
  email: 'test@example.com',
  password: '123456',
}

export const TEST_UID = 'be42c3f9-e165-463e-abe7-f3d238b9a39f'

export const POST_TYPE = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
} as const

export enum USER_TYPE {
  JUNIOR = 0,
  SENIOR = 1,
  PROFESSIONAL = 2,
  ADMIN = 99,
}

export enum POST_CATEGORIES {
  Typescript = 'Typescript',
  React = 'React',
  Nextjs = 'Next.js',
  Flutter = 'Flutter',
  Swift = 'Swift',
  Kotlin = 'Kotlin',
  Python = 'Python',
}
