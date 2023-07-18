import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorizedEndpoint = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bookstore.toolsqa.com/api/v1/Books', {
          headers: {
            Authorization: `Bearer ${token}`, // Replace 'token' with your actual token state variable
          },
        });
        setResponseData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]); // Make sure to add the token as a dependency, so the effect runs whenever the token changes

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        responseData.map((book) => (
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

export default AuthorizedEndpoint;
