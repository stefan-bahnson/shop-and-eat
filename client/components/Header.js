import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="header">
    <div className="logo">LOGO</div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </nav>
  </div>
);

export default Header;