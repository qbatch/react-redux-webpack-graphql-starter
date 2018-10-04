import { gql } from 'apollo-server-express';
import Queries from './queries';
// import Mutations from './mutations';

const Products = gql`
  type Products {
    _id: ID!
    title: String!
    sellerSku: String!
    email: String!
    asin: String!
    condition: ID!
    listPrice: Float!
    fulfilmentType: String!
  }
`;

export default [Products, Queries];
