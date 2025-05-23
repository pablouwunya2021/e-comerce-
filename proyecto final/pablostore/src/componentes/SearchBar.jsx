// src/componentes/SearchBar.jsx
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../assets/products'; // Ajusta esta ruta según donde tengas tus productos

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Memoriza los productos que coincidan con el texto
  const filteredResults = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
      product.nombre.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const handleSelect = (id) => {
    navigate(`/producto/${id}`);
    setQuery(''); // Limpiar el input después de seleccionar
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar"
        
        style={{
          padding: '0.5rem 1rem',
          color: '#ffe2e2',
          backgroundColor: '#ff9898',
          borderRadius: '20px',
          border: 'none',
          width: '250px'
        }}
      />
      {query && (
        <ul style={{
          position: 'absolute',
          top: '110%',
          left: 0,
          backgroundColor: 'white',
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          listStyle: 'none',
          margin: 0,
          padding: '0.5rem',
          zIndex: 10,
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {filteredResults.length > 0 ? (
            filteredResults.map((p) => (
              <li
                key={p.id}
                onClick={() => handleSelect(p.id)}
                style={{
                  padding: '0.3rem 0.5rem',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee'
                }}
              >
                {p.nombre}
              </li>
            ))
          ) : (
            <li style={{ padding: '0.3rem' }}>No hay resultados</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
