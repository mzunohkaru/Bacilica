-- CreateTable
CREATE TABLE "auth" (
    "uid" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "last_sign_in_at" TIMESTAMPTZ(3),

    CONSTRAINT "auth_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "users" (
    "uid" UUID NOT NULL,
    "user_name" TEXT NOT NULL,
    "profile" TEXT,
    "avatar_url" TEXT,
    "user_type_id" INTEGER NOT NULL,
    "invited_ticket_id" TEXT,
    "invited_token" TEXT,
    "github_url" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "user_types" (
    "id" SERIAL NOT NULL,
    "user_type" TEXT NOT NULL,

    CONSTRAINT "user_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "follows" (
    "follower_uid" UUID NOT NULL,
    "following_uid" UUID NOT NULL,

    CONSTRAINT "follows_pkey" PRIMARY KEY ("follower_uid","following_uid")
);

-- CreateTable
CREATE TABLE "blocks" (
    "blocker_uid" UUID NOT NULL,
    "blocking_uid" UUID NOT NULL,

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("blocker_uid","blocking_uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_email_key" ON "auth"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_uid_fkey" FOREIGN KEY ("uid") REFERENCES "auth"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_user_type_id_fkey" FOREIGN KEY ("user_type_id") REFERENCES "user_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_follower_uid_fkey" FOREIGN KEY ("follower_uid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_following_uid_fkey" FOREIGN KEY ("following_uid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_blocker_uid_fkey" FOREIGN KEY ("blocker_uid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_blocking_uid_fkey" FOREIGN KEY ("blocking_uid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
