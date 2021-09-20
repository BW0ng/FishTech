import express from 'express';
import server from './graphql'

const app = express();

server.applyMiddleware({
  app,
  path: '/graphql'
});

export default app;