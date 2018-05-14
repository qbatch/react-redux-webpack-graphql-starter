import { gql } from 'apollo-server';
import Book from './book/type';
import Locations from './types/location';
import Response from './types/response';
import User from './user/type';

import userMutations from './user/mutations';
import bookMutations from './book/mutations';

import userQueries from './user/queries';
import bookQueries from './book/queries';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

module.exports = [
  userQueries,
  userMutations,
  bookQueries,
  bookMutations,
  typeDefs,
  Book,
  Locations,
  Response,
  User
];
