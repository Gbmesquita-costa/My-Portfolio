-- CreateTable
CREATE TABLE "donations" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(17) NOT NULL,
    "message" VARCHAR(100) NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectdetails" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gifimage_url" TEXT NOT NULL,
    "githubRepo" TEXT,
    "deployUrl" TEXT,
    "thumbnail" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projectdetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projectdetails_name_key" ON "projectdetails"("name");
