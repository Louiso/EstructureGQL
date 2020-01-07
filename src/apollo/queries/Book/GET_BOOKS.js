import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  query {
    bookList {
      _id,
      name
    }
  }
`;

export default GET_BOOKS
