// // BookContext.js
// import React, { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const BookContext = createContext();

// export const useBookContext = () => {
//   return useContext(BookContext);
// };

// export const BookProvider = ({ children }) => {
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [isLoading, setIsLoading] = useState(true); 
//   const navigate = useNavigate();


//   const addBook = (newBook) => {
//     setBooks([...books, newBook]);
//   };

//   const deleteBook = (id) => {
//     const updatedBooks = books.filter((book) => book.id !== id);
//     setBooks(updatedBooks);
//   };

//   const onViewBook = (id) => {
//     const selectedBook = books.find((book) => book.id === id);
//     if (selectedBook) {
//       setSelectedBook(selectedBook);
//       navigate(`/books/${selectedBook.id}`);
//     } else {
//       console.error('Book not found');
//     }
//   };

//   return (
//     <BookContext.Provider value={{ books, addBook, deleteBook, onViewBook }}>
//       {children}
//     </BookContext.Provider>
//   );
// };
