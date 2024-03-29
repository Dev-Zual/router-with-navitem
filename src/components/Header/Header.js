import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>welcome to react router.</h1>

      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/friends">Friends</Link>
      </nav>
    </div>
  );
};

export default Header;
