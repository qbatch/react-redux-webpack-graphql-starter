import { gql } from 'apollo-server';
import User from '../user/types';
import Book from '../book/types';
import Location from './location';
import Response from './response';

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
  Location,
  Response
];
