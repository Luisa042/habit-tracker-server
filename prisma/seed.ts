import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.habit.deleteMany();

  await prisma.habit.create({
    data: {
      title: 'sleep before midnight',
      createdAt: new Date('2023-01-22T00:00:00.000z'),
    },
  });

  await prisma.habit.create({
    data: {
      title: 'drink at least 2l of water',
      createdAt: new Date('2023-01-23T00:00:00.000z'),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
