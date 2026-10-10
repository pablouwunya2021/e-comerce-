import React, { useState } from 'react';
import { products } from '../assets/products';
import { Link } from "react-router-dom";
import './VinylCatalog.css';
import StarRating from './StarRating';
import { useFavorites } from '../hooks/useFavorites';

const VinylCatalog = ({ filtro }) => {
  const { favorites } = useFavorites();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  const getProductRating = (id) => {
    const stored = localStorage.getItem(`rating_producto_${id}`);
    return stored ? parseInt(stored) : 0;
  };

  const calcularPrecioFinal = (precio, descuento) => {
    return (precio - (precio * (descuento / 100))).toFixed(2);
  };

  const categoriasUnicas = ['Todas', ...new Set(products.map(p => p.categoria))];

  // Aplica filtros por prop y por categoría seleccionada
  const productosFiltrados = products.filter((producto) => {
    const pasaFiltroExterno =
      filtro === 'favoritos' ? favorites.includes(producto.id) :
      filtro === 'descuentos' ? producto.descuento && producto.descuento > 0 :
      true;

    const pasaFiltroCategoria =
      categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;

    return pasaFiltroExterno && pasaFiltroCategoria;
  });

  return (
    <div className="catalog-container" style={{ marginTop: '100px' }}>
      {/* Filtro por categoría */}
      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <label htmlFor="filtroCategoria" style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>Filtrar por categoría:</label>
        <select
          id="filtroCategoria"
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        >
          {categoriasUnicas.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Renderizado de tarjetas */}
      {productosFiltrados.map((producto) => {
        const isFavorite = favorites.includes(producto.id);
        const tieneDescuento = producto.descuento && producto.descuento > 0;
        const precioFinal = tieneDescuento
          ? calcularPrecioFinal(producto.precio, producto.descuento)
          : producto.precio.toFixed(2);

        return (
          <Link to={`/producto/${producto.id}`} key={producto.id} className="card-link">
            <div className="card">
              <img src={producto.img} alt={producto.nombre} className="card-img" />

              <div className="card-title">
                <h3>{producto.nombre}</h3>
                <span className={`heart-icon ${isFavorite ? 'active' : ''}`}>
                  {isFavorite ? '♥' : '♡'}
                </span>
              </div>

              <h4 style={{ color: '#888888' }}>{producto.categoria}</h4>

              {tieneDescuento ? (
                <div>
                  <strong style={{ color: '#d62828', fontSize: '1.1rem' }}>
                    ${precioFinal}
                  </strong>
                  <span style={{ textDecoration: 'line-through', marginLeft: '0.5rem', color: '#888' }}>
                    ${producto.precio.toFixed(2)}
                  </span>
                  <span style={{ marginLeft: '0.5rem', color: '#2a9d8f', fontWeight: 'bold' }}>
                    −{producto.descuento}%
                  </span>
                </div>
              ) : (
                <strong>${producto.precio.toFixed(2)}</strong>
              )}

              <div style={{ marginTop: '0.5rem' }}>
                <StarRating rating={getProductRating(producto.id)} readOnly={true} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VinylCatalog;
