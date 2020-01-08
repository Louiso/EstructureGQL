import { gql } from "@apollo/client"
import { mongoObjectId } from "../resolvers/utils"

export const BookResolver = {
  Query: {

  },
  Mutation: {
    addBook: (_, {name}, { cache }) => {
      const addBook = {
        _id: mongoObjectId(),
        __typename: 'Book',
        name
      }
      try {
        const params = {
          query: gql`
            query {
              bookList{
                _id,
                name
              }
            }
          `
        }
        const { bookList } = cache.readQuery({
          ...params 
        })
        
        cache.writeQuery({
          ...params,
          data: {
            bookList: [...bookList, addBook]
          }
        })
      } catch (error) {
        console.log(error)  
      }
    }
  }
}