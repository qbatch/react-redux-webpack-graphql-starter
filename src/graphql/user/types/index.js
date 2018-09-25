import { gql } from 'apollo-server';

import Mutations from './mutations';
import Queries from './queries';

const User = gql`
  type User {
    _id: ID,
    name: String
    userName: String
    email: String!
    password: String!
    token: String
    age: String
    books: [Book]
    location: Location
  }
  type Count {
    count: ID!
  }
  type Location {
    long: String
    lat: String
  }
`;

export default [User, Mutations, Queries];
