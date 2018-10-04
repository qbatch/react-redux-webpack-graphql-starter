import gql from 'graphql-tag';

const getUsers = gql`
  query getUsers($first: ID!, $offset: ID!) {
    getUsers(first: $first, offset: $offset) {
      name
      age
      userName
      email
    }
  }
`;

export default getUsers;
