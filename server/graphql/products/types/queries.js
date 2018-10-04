import { gql } from 'apollo-server-express';

const Queries = gql`
  extend type Query {
    getProducts(skip: Int!, limit: Int!): [Products]
  }
`;

export default Queries;
