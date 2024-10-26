import prisma from '@/index'

import {
  PostContentRequest,
  PostImageRequest,
  PostStructureRequest,
  PostVideoRequest,
} from '@repo/schema/server'
import {
  TEST_UID,
  POST_TYPE,
} from '@/utils/contains'

export async function PostSeed() {
  const engineerPostData = {
    title: 'テスト投稿',
    description: 'テスト投稿です。',
  }
  const postRequestData: (
    | PostContentRequest
    | PostImageRequest
    | PostVideoRequest
  )[] = [
    {
      postType: POST_TYPE.TEXT,
      header: 'テストタイトル',
      content: '始まり',
    },
    {
      postType: POST_TYPE.IMAGE,
      imageUrls: [
        'https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png',
        'https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png',
      ],
    },
    {
      postType: POST_TYPE.TEXT,
      header: null,
      content: '終わり',
    },
  ]

  const postStructureData: PostStructureRequest[] = []

  await prisma.$transaction(async tx => {
    const { id: postId } = await tx.posts.create({
      data: {
        ...engineerPostData,
        uid: TEST_UID,
      },
    })

    for (const [order, data] of postRequestData.entries()) {
      if (data.postType === POST_TYPE.TEXT) {
        const { id: contentId } = await tx.postContents.create({
          data: {
            content: data.content,
          },
        })
        postStructureData.push({
          postId,
          postType: POST_TYPE.TEXT,
          postTypeId: contentId,
          order,
        })
      }
      if (data.postType === POST_TYPE.IMAGE) {
        const { id: imageId } = await tx.postImages.create({
          data: {
            imageUrls: data.imageUrls,
          },
        })
        postStructureData.push({
          postId,
          postType: POST_TYPE.IMAGE,
          postTypeId: imageId,
          order,
        })
      }
      if (data.postType === POST_TYPE.VIDEO) {
        const { id: videoId } = await tx.postVideos.create({
          data: {
            videoUrl: data.videoUrl,
          },
        })
        postStructureData.push({
          postId,
          postType: POST_TYPE.VIDEO,
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
