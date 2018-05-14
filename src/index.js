import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './schema';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amazon_inventory');

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});