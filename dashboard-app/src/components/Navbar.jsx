import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Hi Arthur, welcome! You have 12 open tasks.</span>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="navbar-search" />
        <button className="navbar-avatar">AR</button>
      </div>
    </nav>
  );
};

export default Navbar; 