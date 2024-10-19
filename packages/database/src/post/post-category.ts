import prisma from '@/index'
import { ProgrammingLanguageType } from '@/utils/contains'

export async function ProgrammingLanguageMasterSeed() {
  await Promise.all(
    Object.values(ProgrammingLanguageType).map(async programmingLanguage => {
      await prisma.programmingLanguages.upsert({
        where: { programmingLanguage },
        update: {},
        create: { programmingLanguage },
      })
    }),
  )
}
