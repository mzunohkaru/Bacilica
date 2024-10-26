export const TEST_USER_DATA = {
  email: 'test@example.com',
  password: '123456',
}

export const TEST_UID = '42180036-8b00-4c58-a38d-528f08355f9e'

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

export const PROGRAMMING_LANGUAGE_TYPE = {
  Typescript: 'Typescript',
  React: 'React',
  Nextjs: 'Nextjs',
  Flutter: 'Flutter',
  Swift: 'Swift',
  Kotlin: 'Kotlin',
  Python: 'Python',
}
