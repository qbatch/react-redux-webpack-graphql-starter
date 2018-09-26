import express from 'express';
import path from 'path';

import { ApolloServer } from 'apollo-server-express';

import Schema from './graphql';
import '../config/database';

const app = express();
const indexPath = path.join(__dirname, '../dist', 'index.html');

const server = new ApolloServer(Schema);
server.applyMiddleware({ app });

app.get('*', (_, res) => { res.sendFile(indexPath) });

app.listen({ port: '4000' }, () =>
  console.log('🚀 Server ready at http://localhost:4000')
)
