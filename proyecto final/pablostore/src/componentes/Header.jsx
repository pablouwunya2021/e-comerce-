import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import disco from '../assets/disco.png';
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({ filtro, setFiltro }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-container">
          <img src={disco} alt="logo" className="logo-img" />
          <h1 className="logo-title">Pablo's Record Store</h1>
        </Link>
      </div>

      

      <div className="filter-buttons">
        <button
          className={`filter-button ${filtro === 'favoritos' ? 'active' : ''}`}
          onClick={() => setFiltro('favoritos')}
        >
          Favoritos
        </button>
        <button
          className={`filter-button ${filtro === 'descuentos' ? 'active' : ''}`}
          onClick={() => setFiltro('descuentos')}
        >
          Descuentos
        </button>
        <button
          className={`filter-button ${filtro === 'todos' ? 'active' : ''}`}
          onClick={() => setFiltro('todos')}
        >
          Todos
        </button>
      </div>

      <SearchBar />
      

      <div className="cart-button-container">
        <button onClick={() => navigate('/carrito')} className="cart-button"> 🛒
        </button>
      </div>
    </header>
  );
};

export default Header;
