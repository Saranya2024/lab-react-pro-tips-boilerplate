import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">Kalvium❤️</Link>
      </div>
      <div className="nav-right">
        <Link to="/contacts">Contacts</Link>
        <Link to="/form">Form</Link>
      </div>
    </nav>
  );
}

export default Navbar;
