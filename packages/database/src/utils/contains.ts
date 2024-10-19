export const TEST_USER_DATA = {
  email: 'test@example.com',
  password: '123456',
}

export const TEST_UID = '5239fb94-7d5f-426e-aece-bd12fcb15c3c'

export const PostType = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
} as const

export enum UserType {
  JUNIOR = 0,
  SENIOR = 1,
  PROFESSIONAL = 2,
  ADMIN = 99,
}

export enum ProgrammingLanguageType {
  Typescript = 'Typescript',
  React = 'React',
  Nextjs = 'Nextjs',
  Flutter = 'Flutter',
  Swift = 'Swift',
  Kotlin = 'Kotlin',
  Python = 'Python',
}
