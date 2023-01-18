import Fastify from 'fastify';

const server = Fastify();

server.get('/', (req, res) => {
  return res.redirect('/habits');
});

server.get('/habits', () => {
  return 'habits list';
});

server.listen({
  port: 3333,
});
