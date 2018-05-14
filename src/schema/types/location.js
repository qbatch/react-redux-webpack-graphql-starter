import { gql } from 'apollo-server';

const typeDef = gql`
  type Location {
    long: String
    lat: String
  }
`;

export default typeDef;
