import React from 'react';
import { products } from '../assets/products';
import { Link } from "react-router-dom";
import './VinylCatalog.css';

const VinylCatalog = () => {
  return (
    <div className="catalog-container">
      {products.map((producto) => (
        <Link to={`/producto/${producto.id}`} key={producto.id} className="card-link">
          {/* Cambié el div por un Link */}
        <div key={producto.id} className="card">
          <img src={producto.img} alt={producto.nombre} className="card-img" />
          <h3>{producto.nombre}</h3>
          <strong>${producto.precio}</strong>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default VinylCatalog;
