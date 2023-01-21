import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.habit.deleteMany();
  await prisma.day.deleteMany();

  await Promise.all([
    prisma.habit.create({
      data: {
        id: '16c89f09-0ada-4203-aefd-3eec2e383277',
        title: 'sleep before midnight',
        createdAt: new Date('2023-01-22T00:00:00.000z'),
        WeekDays: {
          create: [
            { weekDay: 0 },
            { weekDay: 1 },
            { weekDay: 2 },
            { weekDay: 3 },
            { weekDay: 4 },
          ],
        },
      },
    }),

    prisma.habit.create({
      data: {
        id: '46b775ea-4d08-44e3-8c6e-17d73ee08c7e',
        title: 'drink 2l of water',
        createdAt: new Date('2023-01-23T00:00:00.000z'),
        WeekDays: {
          create: [
            { weekDay: 0 },
            { weekDay: 1 },
            { weekDay: 2 },
            { weekDay: 3 },
            { weekDay: 4 },
            { weekDay: 5 },
            { weekDay: 6 },
          ],
        },
      },
    }),

    prisma.habit.create({
      data: {
        id: 'c9305d0b-b125-4270-9735-ef2c48f78112',
        title: 'exercise',
        createdAt: new Date('2023-01-22T00:00:00.000z'),
        WeekDays: {
          create: [{ weekDay: 1 }, { weekDay: 3 }, { weekDay: 5 }],
        },
      },
    }),
  ]);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
