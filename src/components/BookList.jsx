import React, { useState, useEffect } from 'react';


const BookList = ({ books, onDeleteBook, onViewBook}) => {

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <p>Nome do livro: {book.name}</p>
          <p>Pages: {book.pages}</p>
          <p>Autor_id: {book.autor_id}</p>
          <button onClick={() => onViewBook(book.id)}>View More</button>
          <button onClick={() => onDeleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;