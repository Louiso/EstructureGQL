import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import {  GET_BOOKS, ADD_BOOK_LOCAL } from '../../apollo/Book/types';
import { useAddBook } from '../../apollo/Book/hooks';

const Home = ()  => {
  const { data , loading, error } = useQuery(GET_BOOKS);
  const [ addBook ] = useAddBook()
  const [addBookLocal] = useMutation(ADD_BOOK_LOCAL)
  if(loading) return <div>loading...</div>
  if(error) return <div>error...</div>
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
      <div onClick={() => {
        addBookLocal({
          variables: {
            name: `${Math.random()}-random`
          }
        })
      }}>
        addBookLocal
      </div>
    </div>
  )
}

export default Home
