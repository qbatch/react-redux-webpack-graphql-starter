import { gql } from 'apollo-server';

import Location from '../../types/location';
import Book from '../../book/types';

import Mutations from './mutations';
import Queries from './queries';

const User = gql`
  type User {
    name: String
    userName: String
    email: String!
    password: String!
    token: String
    age: String
    books: [Book]
    location: Location
  }
`;

export default [User, Mutations, Queries];
