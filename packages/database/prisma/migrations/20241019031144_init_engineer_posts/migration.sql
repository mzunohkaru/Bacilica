-- DropForeignKey
ALTER TABLE "blocks" DROP CONSTRAINT "blocks_blocker_uid_fkey";

-- DropForeignKey
ALTER TABLE "blocks" DROP CONSTRAINT "blocks_blocking_uid_fkey";

-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_follower_uid_fkey";

-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_following_uid_fkey";

-- AlterTable
ALTER TABLE "blocks" RENAME CONSTRAINT "blocks_pkey" TO "idx_blocks_blocker_uid_blocking_uid";

-- AlterTable
ALTER TABLE "follows" RENAME CONSTRAINT "follows_pkey" TO "idx_follows_follower_uid_following_uid";

-- CreateTable
CREATE TABLE "engineer_posts" (
    "id" SERIAL NOT NULL,
    "uid" UUID,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "like_count" INTEGER NOT NULL DEFAULT 0,
    "display_count" INTEGER NOT NULL DEFAULT 0,
    "comment_count" INTEGER NOT NULL DEFAULT 0,
    "algorithm_point" INTEGER NOT NULL DEFAULT 0,
    "github_url" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "engineer_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_programming_languages" (
    "post_id" INTEGER NOT NULL,
    "programming_language_id" INTEGER NOT NULL,

    CONSTRAINT "post_programming_languages_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "programming_languages" (
    "id" SERIAL NOT NULL,
    "programming_language" TEXT NOT NULL,

    CONSTRAINT "programming_languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_structure" (
    "post_id" INTEGER NOT NULL,
    "post_type" TEXT NOT NULL,
    "post_type_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "idx_post_structure_post_id_order" PRIMARY KEY ("post_id","order")
);

-- CreateTable
CREATE TABLE "post_contents" (
    "id" SERIAL NOT NULL,
    "header" TEXT,
    "content" TEXT,

    CONSTRAINT "post_contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_images" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT[],

    CONSTRAINT "post_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_videos" (
    "id" SERIAL NOT NULL,
    "video_url" TEXT NOT NULL,

    CONSTRAINT "post_videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "post_id" INTEGER NOT NULL,
    "sender_uid" UUID,
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saves" (
    "saver_uid" UUID NOT NULL,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "idx_saves_saver_uid_post_id" PRIMARY KEY ("saver_uid","post_id")
);

-- CreateTable
CREATE TABLE "likes" (
    "liker_uid" UUID NOT NULL,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "idx_likes_liker_uid_post_id" PRIMARY KEY ("liker_uid","post_id")
);

-- CreateIndex
CREATE INDEX "idx_post_programming_languages_post_id" ON "post_programming_languages"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_programming_languages_programming_language" ON "programming_languages"("programming_language");

-- CreateIndex
CREATE UNIQUE INDEX "uq_images_image_url" ON "post_images"("image_url");

-- CreateIndex
CREATE UNIQUE INDEX "uq_videos_video_url" ON "post_videos"("video_url");

-- CreateIndex
CREATE INDEX "idx_comments_sender_uid_post_id" ON "comments"("sender_uid", "post_id");

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_follower_uid_fkey" FOREIGN KEY ("follower_uid") REFERENCES "users"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_following_uid_fkey" FOREIGN KEY ("following_uid") REFERENCES "users"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_blocker_uid_fkey" FOREIGN KEY ("blocker_uid") REFERENCES "users"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_blocking_uid_fkey" FOREIGN KEY ("blocking_uid") REFERENCES "users"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engineer_posts" ADD CONSTRAINT "engineer_posts_uid_fkey" FOREIGN KEY ("uid") REFERENCES "users"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_programming_languages" ADD CONSTRAINT "post_programming_languages_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "engineer_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_programming_languages" ADD CONSTRAINT "post_programming_languages_programming_language_id_fkey" FOREIGN KEY ("programming_language_id") REFERENCES "programming_languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_structure" ADD CONSTRAINT "post_structure_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "engineer_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "engineer_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_sender_uid_fkey" FOREIGN KEY ("sender_uid") REFERENCES "users"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saves" ADD CONSTRAINT "saves_saver_uid_fkey" FOREIGN KEY ("saver_uid") REFERENCES "users"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saves" ADD CONSTRAINT "saves_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "engineer_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_liker_uid_fkey" FOREIGN KEY ("liker_uid") REFERENCES "users"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "engineer_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
