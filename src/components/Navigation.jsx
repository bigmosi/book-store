import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/user-form">User Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
