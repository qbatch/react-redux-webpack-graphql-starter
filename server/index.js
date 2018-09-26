import express from 'express';
import path from 'path';

import { ApolloServer } from 'apollo-server-express';

import Schema from './graphql';
import '../config/database';

const app = express();
const indexPath = '/Users/qbatch/Projects/graphql-server/dist/index.html';

const server = new ApolloServer(Schema);
server.applyMiddleware({ app });

console.log('C: ', __dirname);

app.get('/', (_, res) => { res.sendFile(indexPath) });

app.listen({ port: '4000' }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
)
