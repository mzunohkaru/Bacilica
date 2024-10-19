import prisma from '@/index'

import {
  CreateEngineerPostContentRequest,
  CreateEngineerPostImageRequest,
  CreateEngineerPostStructureRequest,
  CreateEngineerPostVideoRequest,
} from '@repo/schema/server'
import { TEST_UID, PostType } from '@/utils/contains'

export async function EngineerPostSeed() {
  const engineerPostData = {
    title: 'テスト投稿',
    description: 'テスト投稿です。',
  }
  const engineerPostDetailData: (
    | CreateEngineerPostContentRequest
    | CreateEngineerPostImageRequest
    | CreateEngineerPostVideoRequest
  )[] = [
    {
      postType: PostType.TEXT,
      header: 'テストタイトル',
      content: '始まり',
    },
    {
      postType: PostType.IMAGE,
      imageUrl: ['https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png', 'https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png'],
    },
    {
      postType: PostType.TEXT,
      header: null,
      content: '終わり',
    },
  ]

  const postStructureData: CreateEngineerPostStructureRequest[] = []

  await prisma.$transaction(async tx => {
    const { id: postId } = await tx.engineerPosts.create({
      data: {
        ...engineerPostData,
        uid: TEST_UID,
      },
    })

    for (const [order, data] of engineerPostDetailData.entries()) {
      if (data.postType === PostType.TEXT) {
        const { id: contentId } = await tx.postContents.create({
          data: {
            content: data.content,
          },
        })
        postStructureData.push({
          postId,
          postType: PostType.TEXT,
          postTypeId: contentId,
          order,
        })
      }
      if (data.postType === PostType.IMAGE) {
        const { id: imageId } = await tx.postImages.create({
          data: {
            imageUrl: data.imageUrl,
          },
        })
        postStructureData.push({
          postId,
          postType: PostType.IMAGE,
          postTypeId: imageId,
          order,
        })
      }
      if (data.postType === PostType.VIDEO) {
        const { id: videoId } = await tx.postVideos.create({
          data: {
            videoUrl: data.videoUrl,
          },
        })
        postStructureData.push({
          postId,
          postType: PostType.VIDEO,
          postTypeId: videoId,
          order,
        })
      }
    }

    for (const data of postStructureData) {
      await tx.postStructure.create({
        data: {
          postId: data.postId,
          postType: data.postType,
          postTypeId: data.postTypeId,
          order: data.order,
        },
      })
    }
  })
}
