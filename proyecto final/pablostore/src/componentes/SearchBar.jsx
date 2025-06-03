import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../assets/products';
import './SearchBar.css';
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const filteredResults = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
      product.nombre.toLowerCase().includes(lowerQuery)
    );
  }, [query]);
  const handleSelect = (id) => {
    navigate(`/producto/${id}`);
    setQuery('');
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar"
        className="search-input"
      />
      {query && (
        <ul className="search-results">
          {filteredResults.length > 0 ? (
            filteredResults.map((p) => (
              <li
                key={p.id}
                onClick={() => handleSelect(p.id)}
                className="search-item"
              >
                {p.nombre}
              </li>
            ))
          ) : (
            <li className="search-item">No hay resultados</li>
          )}
        </ul>
      )}
    </div>
  );
};
export default SearchBar;

