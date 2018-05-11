import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import { typeDefs, resolvers } from './graphql/schema';

mongoose.connect('mongodb://localhost/amazon_inventory');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
