import prisma from '@/index'

import { ProgrammingLanguageMasterSeed } from '@/engineer-post/post-category'

export async function handleMasterSeed() {
  try {
    await ProgrammingLanguageMasterSeed()
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}

handleMasterSeed()
