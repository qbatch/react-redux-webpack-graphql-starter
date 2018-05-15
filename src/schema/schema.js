import { gql } from 'apollo-server';
import Book from './book/types/type';
import Locations from './types/location';
import Response from './types/response';
import User from './user/types/type';

import userMutations from './user/types/mutations';
import bookMutations from './book/types/mutations';

import userQueries from './user/types/queries';
import bookQueries from './book/types/queries';

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default [
  userQueries,
  userMutations,
  bookQueries,
  bookMutations,
  typeDefs,
  Book,
  Locations,
  Response,
  User
]
