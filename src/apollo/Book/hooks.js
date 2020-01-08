import { useMutation, gql } from "@apollo/client"
import { ADD_BOOK } from "./types"

export const useAddBook = () => {
  const resp = useMutation(ADD_BOOK, {
    update: (cache, { data: { addBook }}) => {
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
  })
  return resp
}