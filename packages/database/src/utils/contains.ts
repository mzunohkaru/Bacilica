export const TEST_USER_DATA = {
  email: 'test@example.com',
  password: '123456abc',
}

export const TEST_UID = 'e7a7de11-8657-4fb0-9782-9f69696387eb'

export const POST_TYPE = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
} as const

export enum USER_TYPE {
  JUNIOR,
  SENIOR,
  PROFESSIONAL,
  ADMIN,
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
