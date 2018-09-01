import React from 'react';
import Button from './button';

import './header.css';

const Header = () => (
  <div
    style={{
      position: 'fixed',
      background: 'white',
      marginBottom: '1.45rem',
      zIndex: '100',
      width: '100%',
    }}
  >
    <div className="header-main">
      <div>o o</div>
      <div className="header-options">
        <a href="#">Contact</a>
        <a href="#">Volunteer</a>
        <Button style={{ marginLeft: '6px' }}>Donate</Button>
      </div>
    </div>
  </div>
);

export default Header;
