import { gql } from "@apollo/client"
// QUERIES
export const GET_BOOKS = gql`
  query {
    bookList {
      _id,
      name
    }
  }
`
// MUTATION
export const ADD_BOOK = gql`
  mutation addBook($name: String){
    addBook(name: $name){
      _id
      name
    }
  }
`;

export const ADD_BOOK_LOCAL = gql`
  mutation addBook($name: String){
    addBook(name: $name) @client{
      _id,
      name
    }
  }
`
// FRAGMENTS


