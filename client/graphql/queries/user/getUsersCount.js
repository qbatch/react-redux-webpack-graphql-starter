import gql from 'graphql-tag';

const getUsersCount = gql`
  {
    getUsersCount {
      count
    }
  }
`;

export default getUsersCount;
