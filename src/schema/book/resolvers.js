import { gql } from 'apollo-server';
import { Merge } from 'lodash';
import jwt  from 'jsonwebtoken';
import config from '../../../config';
import  User from '../../../models/user_model';
import bookQueryResolver from './resolvers/query-resolver';
import bookMutationResolver from './resolvers/mutation-resolver';

const resolvers = {
  Query: {
    getBookById: (parent, args) => {  
      return bookQueryResolver.getBookById(parent, args);
    },
    books: () => {
      return bookQueryResolver.getBooks();
    },
  },
  Mutation: {
    addBook: (parent, args) => {
      return bookMutationResolver.addBook(parent, args);
    }, 
  },
};

module.exports = resolvers;
