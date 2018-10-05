import { gql } from 'apollo-server-express';

const Queries = gql`
  extend type Query {
    getUserById(id: ID!): User
  }
`;

export default Queries;
