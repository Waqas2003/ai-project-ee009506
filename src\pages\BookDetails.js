import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`https://example.com/api/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container">
      <h1>{book.title}</h1>
      <p>Author: {book.author.name}</p>
      <p>Published: {book.published}</p>
    </div>
  );
};

export default BookDetails;