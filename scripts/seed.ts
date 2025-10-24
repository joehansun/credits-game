import { PrismaClient, AccountType } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // 1. Create a test user (no 'name' field in your schema)
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
    },
  });

  // 2. Create or ensure their MAIN account exists (uses compound unique)
  const account = await prisma.account.upsert({
    where: { userId_type: { userId: user.id, type: AccountType.MAIN } },
    update: {
      balance: 1000, // set or reset to 1000 for this test
    },
    create: {
      userId: user.id,
      type: AccountType.MAIN,
      balance: 1000,
    },
  });

  console.log("✅ Seed complete!");
  console.log({ userId: user.id, email: user.email, accountBalance: account.balance });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
