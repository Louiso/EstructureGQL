import React from 'react'
import { GET_BOOKS } from '../../apollo/queries';
import { useQuery, useMutation, gql } from '@apollo/client';
import { ADD_BOOK } from '../../apollo/mutations/Book';

const Home = ()  => {
  const { data , loading } = useQuery(GET_BOOKS);
  const [ addBook ] = useMutation(ADD_BOOK, {
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
  if(loading) return <div>loading...</div>
  
  const { bookList: books } = data
  
  return (
    <div>
      {books.map((book, index) => {
        return (
          <div key={index}>
            {book.name}
          </div>
        )
      })}
      <div onClick={() => {
        addBook({
          variables: {
            name: `${Math.random()}-random`
          }
        })
      }}>
        add
      </div>
    </div>
  )
}

export default Home
