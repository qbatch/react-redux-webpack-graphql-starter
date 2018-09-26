import { gql } from 'apollo-server';

const Queries = gql`
  extend type Query {
    getUserById(id: ID!): User
    getUsers(first: ID!, offset: ID!): [User]
    getUsersCount: Count
    getUserByUserName(userName: String!): User
  }
`;

export default Queries;
