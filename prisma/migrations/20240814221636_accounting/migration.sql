-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank_Account" (
    "id" SERIAL NOT NULL,
    "BankName" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Bank_Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Safe" (
    "id" SERIAL NOT NULL,
    "Quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Safe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Double_Entry" (
    "id" SERIAL NOT NULL,
    "CreditName" TEXT NOT NULL,
    "DebitName" TEXT NOT NULL,
    "CreditAmount" INTEGER NOT NULL,
    "DebitAmount" INTEGER NOT NULL,

    CONSTRAINT "Double_Entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "AssetName" TEXT NOT NULL,
    "Cost" INTEGER NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Benefiary" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Type" TEXT NOT NULL,

    CONSTRAINT "Benefiary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
