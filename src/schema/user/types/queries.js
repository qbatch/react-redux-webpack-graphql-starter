import { gql } from 'apollo-server';

const Queries = gql`
  extend type Query {
    getUserById(id: ID!): User
    getUsers(first: ID!, offset: ID!): [User]
    getUsersCount: Count
  }
`;

export default Queries;
