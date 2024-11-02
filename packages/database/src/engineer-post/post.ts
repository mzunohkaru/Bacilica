import prisma from '@/index'

import {
  PostContentRequest,
  PostImageRequest,
  PostVideoRequest,
} from '@repo/schema/src/server'
import { TEST_UID, POST_TYPE, POST_CATEGORIES } from '@/utils/contains'

export async function PostSeed() {
  const engineerPostData = {
    title: '○○アプリ',
    description: '○○アプリの紹介です。',
  }
  const postReqBody: (
    | PostContentRequest
    | PostImageRequest
    | PostVideoRequest
  )[] = [
    {
      postType: POST_TYPE.TEXT,
      header: '○○機能',
      content: 'ここでは～',
    },
    {
      postType: POST_TYPE.IMAGE,
      imageUrls: [
        'https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png',
        'https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format2=png',
      ],
    },
    {
      postType: POST_TYPE.TEXT,
      header: null,
      content: '終わり',
    },
  ]

  const postCategoryReqBody = [
    POST_CATEGORIES.Nextjs,
    POST_CATEGORIES.React,
    POST_CATEGORIES.Typescript,
  ]

  await prisma.$transaction(async tx => {
    const { id: postId } = await tx.posts.create({
      data: {
        ...engineerPostData,
        uid: TEST_UID,
      },
    })

    const createPostStructure = async (
      data: PostContentRequest | PostImageRequest | PostVideoRequest,
      order: number,
    ) => {
      let postTypeId: number

      switch (data.postType) {
        case POST_TYPE.TEXT:
          const { id: contentId } = await tx.postContents.create({
            data: {
              header: data.header,
              content: data.content,
            },
          })
          postTypeId = contentId
          break
        case POST_TYPE.IMAGE:
          const { id: imageId } = await tx.postImages.create({
            data: {
              imageUrls: data.imageUrls,
            },
          })
          postTypeId = imageId
          break
        case POST_TYPE.VIDEO:
          const { id: videoId } = await tx.postVideos.create({
            data: {
              videoUrl: data.videoUrl,
            },
          })
          postTypeId = videoId
          break
      }

      return {
        postId,
        postType: data.postType,
        postTypeId,
        order,
      }
    }

    await Promise.all(
      postCategoryReqBody.map(
        async category =>
          await tx.postCategory.create({
            data: {
              postId,
              category,
            },
          }),
      ),
    )

    const postStructureData = await Promise.all(
      postReqBody.map((data, index) => createPostStructure(data, index)),
    )

    await tx.postStructure.createMany({
      data: postStructureData,
    })
  })
}
