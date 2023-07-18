import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [userName, setUserName] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bookstore.toolsqa.com/Account/v1/User', {
        userName: userName,
        // Add other necessary user details here
      });
      // Store the user ID and user name in the React state
      const { UserId, UserName } = response.data;
      // You can use a state management solution like Redux or React Context API for this purpose
    } catch (error) {
      // Handle errors here
    }
  };

  return (
    <form onSubmit={handleCreateUser}>
      <label>
        User Name:
        <input type="text" value={userName} onChange={handleUserNameChange} />
      </label>
      {/* Add other form fields for necessary user details */}
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
