import Fastify from 'fastify';
import cors from '@fastify/cors';
import { prisma } from './lib/prisma';
import { routes } from './routes';

const server = Fastify();

server.register(cors);
server.register(routes);

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('server running on port 3333');
  });
