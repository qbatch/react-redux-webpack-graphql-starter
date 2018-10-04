import { gql } from 'apollo-server-express';
import User from './user/types';
import Book from './book/types';
import Response from './generic-types/response';
import Products from './products/types';

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default [
  typeDefs,
  ...User,
  ...Book,
  ...Products,
  Response
];
