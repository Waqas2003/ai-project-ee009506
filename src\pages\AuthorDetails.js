import React from 'react';
import { useParams } from 'react-router-dom';

const AuthorDetails = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios.get(`https://example.com/api/authors/${id}`)
      .then(response => {
        setAuthor(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container">
      <h1>{author.name}</h1>
      <p>Bio: {author.bio}</p>
    </div>
  );
};

export default AuthorDetails;