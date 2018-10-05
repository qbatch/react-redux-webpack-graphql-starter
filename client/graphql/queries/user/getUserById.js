import gql from 'graphql-tag';

const getUserById = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      userName
      email
    }
  }
`;

export default getUserById;
