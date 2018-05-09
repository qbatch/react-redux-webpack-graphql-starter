const { gql } = require('apollo-server');
const  typeDefs  = require('./bookType');
const { users, location, books } = require('./dummyData');

const resolvers = {
  Query: {
    getBookById: (obj, { id }) => {
      const index = books.findIndex(book => book.id === id);
      return books[index];
    },
    getUserById: (obj, { id }) => {
      const index = users.findIndex(user => user.id === id );
      return users[index];
    },
    getSomeUsers: async (parent, args) => {
      // const users = users.find({}).skip(args.first).limit(args.offset);
    }, 
    books: () => books,
    users: () => users
  },
  Mutation: {
    addBook: (obj, {title, author}) => {
      books.push({id: '4', title, author});
      return books[books.length-1];
    }
  },
};

module.exports = { resolvers, typeDefs };