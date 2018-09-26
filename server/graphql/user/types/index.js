import { gql } from 'apollo-server-express';

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
  }
  type Count {
    count: ID!
  }
`;

export default [User, Mutations, Queries];
