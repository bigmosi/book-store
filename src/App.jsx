import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import AuthorizedEndpoint from './components/AuthorizedEndpoint';
import UserDetails from './components/UserDetail';
import BookLists from './components/BookList';
// Import other components for different functional modules

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/create-user" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/authorized-endpoint" element={<AuthorizedEndpoint />} />
          <Route path="/user/:userId" element={<UserDetails />} />
          <Route path="/all-books" element={<BookLists />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
