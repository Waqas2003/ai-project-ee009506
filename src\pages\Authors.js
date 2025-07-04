import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('https://example.com/api/authors')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Authors</h1>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <a href={`/authors/${author.id}`}>{author.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;