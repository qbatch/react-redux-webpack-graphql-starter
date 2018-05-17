import { gql } from 'apollo-server';

const Location = gql`
  type Location {
    long: String
    lat: String
  }
`;

export default Location;
