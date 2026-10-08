import React from 'react';
import { Link } from 'react-router-dom';
import disco from '../assets/disco.png'; 
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ff5c5c',
      padding: '1rem 2rem',
      fontFamily: 'Nunito, sans-serif',
      borderRadius: '0 0 20px 20px',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      height: '80px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
    }}>
      {/* Logo + Título envuelto en Link */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img
            src={disco}
            alt="logo"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
          <h1 style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            margin: 0
          }}>
            Pablo's Record Store
          </h1>
        </Link>
      </div>

      <SearchBar />
    </header>
  );
};

export default Header;

