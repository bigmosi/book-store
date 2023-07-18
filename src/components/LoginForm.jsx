import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bookstore.toolsqa.com/Account/v1/GenerateToken', {
        email: email,
        password: password,
      });
      // Store the received token in the React state
      setToken(response.data.token);
      // You can use a state management solution like Redux or React Context API for this purpose
    } catch (error) {
      // Handle errors here
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
