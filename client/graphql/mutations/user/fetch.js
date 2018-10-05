import gql from 'graphql-tag';

const USER_FETCH = gql`
  mutation fetchUser($id: String!) {
    fetchUser(id: $id) {
      status
      msg
      data {
        user {
          email
          userName
        }
      }
    }
  }
`;

export default USER_FETCH;
