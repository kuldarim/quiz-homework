import React from 'react';
import logo from '../logo.svg';
import './header.css';

const Header = (props) => {
  return (
    <header className="container">
      <div className="header">
        <img 
          src={logo} 
          className="logo" 
          alt="logo" 
        />
        <h2>Welcome to Quiz</h2>
      </div>
    </header>
  );
};

export default Header;
