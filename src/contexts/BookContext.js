import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {id: 1, title: 'Name of the wind'},
    {id: 2, title: 'The way of kings'},
    {id: 3, title: 'The final empire'},
    {id: 4, title: 'The hero of ages'}
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;