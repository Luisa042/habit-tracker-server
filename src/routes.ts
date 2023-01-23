import { FastifyInstance } from 'fastify';
import { prisma } from './lib/prisma';

export async function routes(server: FastifyInstance) {
  server.get('/', async (req, res) => {
    return res.redirect('/habits');
  });

  server.get('/habits', async () => {
    const habits = await prisma.habit.findMany();
    return habits;
  });
}
