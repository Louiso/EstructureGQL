import { gql } from '@apollo/client';

const ADD_BOOK = gql`
  mutation addBook($name: String){
    addBook(name: $name){
      _id
      name
    }
  }
`;

export default ADD_BOOK
