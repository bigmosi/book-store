import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userProfileData, setUserProfileData] = useState(null);

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    // You can now use the token for authorized requests to your API
    // For demonstration purposes, let's simulate fetching the user profile with the token
    // Replace this with actual API call
    const fakeUserProfile = {
      name: 'John Doe',
      email: 'john@example.com',
    };

    // Update the state with the user profile data
    setUserProfileData(fakeUserProfile);
  }, []);

  return (
    <div>
      {userProfileData ? (
        <div>
          <h1>User Profile</h1>
          <p>Name: {userProfileData.name}</p>
          <p>Email: {userProfileData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
