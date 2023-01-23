import dayjs from 'dayjs';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from './lib/prisma';

export async function routes(server: FastifyInstance) {
  server.get('/', async (req, res) => {
    return res.redirect('/habits');
  });

  server.get('/habits', async () => {
    const habits = await prisma.habit.findMany();
    return habits;
  });

  server.post('/habits', async (req) => {
    const createHabitBody = z.object({
      title: z.string(),
      WeekDays: z.array(z.number().min(0).max(6)),
    });

    const { title, WeekDays } = createHabitBody.parse(req.body);

    const today = dayjs().startOf('day').toDate();

    await prisma.habit.create({
      data: {
        title,
        createdAt: today,
        WeekDays: {
          create: WeekDays.map((day) => {
            return {
              weekDay: day,
            };
          }),
        },
      },
    });
  });
}
