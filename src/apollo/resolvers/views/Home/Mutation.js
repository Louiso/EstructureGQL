import { gql } from "@apollo/client"
import { mongoObjectId } from "../../utils"

const Mutation = {
  addBook: (_ ,{name}, { cache}) => {
    try {
      const params = {
        query: gql`
          query {
            bookList @client{
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
          bookList: [...bookList, {
            __typename: 'Book',
            _id: mongoObjectId(),
            name 
          }]
        }
      })
      return null
    } catch (error) {
      console.log(error)  
    }
  }
}

export default Mutation
