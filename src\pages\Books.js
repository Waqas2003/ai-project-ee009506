import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://example.com/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <a href={`/books/${book.id}`}>{book.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;