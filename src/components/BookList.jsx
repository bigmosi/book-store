import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookLists = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://bookstore.toolsqa.com/api/v1/Books');
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        books.map((book) => (
          <div key={book.Id}>
            <h2>{book.Title}</h2>
            <p>Author: {book.Author}</p>
            {/* Display other book details as needed */}
          </div>
        ))
      )}
    </div>
  );
};

export default BookLists;
