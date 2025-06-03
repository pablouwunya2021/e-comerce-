import React from 'react';

const CategoryFilter = ({ categorias, seleccionada, onChange }) => (
  <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
    <label htmlFor="filtroCategoria" style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>
      Filtrar por categoría:
    </label>
    <select
      id="filtroCategoria"
      value={seleccionada}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '0.5rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '1rem'
      }}
    >
      {categorias.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;
