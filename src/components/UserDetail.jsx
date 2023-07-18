import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://bookstore.toolsqa.com/Account/v1/User/${userId}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2>User Details</h2>
          <p>User ID: {userData.UserId}</p>
          <p>User Name: {userData.UserName}</p>
          {/* Display other user details as needed */}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
