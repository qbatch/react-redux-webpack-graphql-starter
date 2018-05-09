const { ApolloServer } = require('apollo-server');
const { books, resolvers, typeDefs } = require('./server/graphql/books/bookQueries');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amazon_inventory');

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });