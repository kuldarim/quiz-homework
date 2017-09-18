import * as React from 'react';
const logo = require('../logo.svg');
import './header.css';

const Header = () => {
  return (
    <header className="header-container">
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
