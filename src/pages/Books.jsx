import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../app.css';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = window.localStorage.getItem('books');
    if (storedBooks !== null) {
      setBooks(JSON.parse(storedBooks));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books, isLoading]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };


  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const onViewBook = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    if (selectedBook) {
      setSelectedBook(selectedBook);
      navigate(`/books/${selectedBook.id}`);
    } else {
      console.error('Book not found');
    }
  };
  

  return (
    <div className="App">
      <h1>Books List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BookForm onAddBook={handleAddBook} />
          <BookList
            books={books}
            onDeleteBook={handleDeleteBook}
            onViewBook={onViewBook}
          />
        </>
      )}
    </div>
  );
};

export default Books;