import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const VinylCard = ({ producto, isFavorite, rating, precioFinal }) => {
  const tieneDescuento = producto.descuento && producto.descuento > 0;

  return (
    <Link to={`/producto/${producto.id}`} className="card-link">
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
            <strong style={{ color: '#d62828', fontSize: '1.1rem' }}>${precioFinal}</strong>
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
          <StarRating rating={rating} readOnly={true} />
        </div>
      </div>
    </Link>
  );
};

export default VinylCard;
