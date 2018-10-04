import gql from "graphql-tag";

const getProducts = gql`
  query getProducts($skip: Number!, $limit: Number!) {
    getProducts(skip: $skip, limit: $limit) {
      title
      sellerSku
      asin
      email
    }
  }
`;

export default getProducts;
