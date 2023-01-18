import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const server = Fastify();
const prisma = new PrismaClient();

server.register(cors);

server.get('/', (req, res) => {
  return res.redirect('/habits');
});

server.get('/habits', async () => {
  const habits = prisma.habit.findMany();
  return habits;
});

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('server running on port 3333');
  });
