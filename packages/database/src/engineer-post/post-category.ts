import prisma from '@/index'
import { PROGRAMMING_LANGUAGE_TYPE } from '@/utils/contains'

export async function ProgrammingLanguageMasterSeed() {
  await Promise.all(
    Object.values(PROGRAMMING_LANGUAGE_TYPE).map(async programmingLanguage => {
      await prisma.programmingLanguages.upsert({
        where: { programmingLanguage },
        update: {},
        create: { programmingLanguage },
      })
    }),
  )
}
