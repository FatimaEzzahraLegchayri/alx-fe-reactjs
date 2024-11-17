import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '10px 20px', 
      borderBottom: '1px solid #ddd' 
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        justifyContent : 'center',
        margin: 0, 
        padding: 0 
      }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ 
            textDecoration: 'none', 
            color: '#007bff' 
          }}>Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/about" style={{ 
            textDecoration: 'none', 
            color: '#007bff' 
          }}>About</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/contact" style={{ 
            textDecoration: 'none', 
            color: '#007bff' 
          }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
