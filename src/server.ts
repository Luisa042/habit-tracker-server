import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const server = Fastify();
const prisma = new PrismaClient();

server.get('/', (req, res) => {
  return res.redirect('/habits');
});

server.get('/habits', () => {
  return 'habits list';
});

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('server running on port 3333');
  });
