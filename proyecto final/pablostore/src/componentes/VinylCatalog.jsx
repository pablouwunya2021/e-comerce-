import React, { useState } from 'react';
import { products } from '../assets/products';
import { useFavorites } from '../hooks/useFavorites';
import VinylCard from './VinylCard';
import CategoryFilter from './CategoryFilter';
import './VinylCatalog.css';

const VinylCatalog = ({ filtro }) => {
  const { favorites } = useFavorites();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  const categoriasUnicas = ['Todas', ...new Set(products.map(p => p.categoria))];

  const getProductRating = (id) => {
    const stored = localStorage.getItem(`rating_producto_${id}`);
    return stored ? parseInt(stored) : 0;
  };

  const calcularPrecioFinal = (precio, descuento) =>
    (precio - (precio * (descuento / 100))).toFixed(2);

  const productosFiltrados = products.filter((producto) => {
    const filtro1 = filtro === 'favoritos' ? favorites.includes(producto.id)
                  : filtro === 'descuentos' ? producto.descuento > 0
                  : true;
    const filtro2 = categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;
    return filtro1 && filtro2;
  });

  return (
    <div className="catalog-container" style={{ marginTop: '100px' }}>
      <CategoryFilter
        categorias={categoriasUnicas}
        seleccionada={categoriaSeleccionada}
        onChange={setCategoriaSeleccionada}
      />
      {productosFiltrados.map((producto) => (
        <VinylCard
          key={producto.id}
          producto={producto}
          isFavorite={favorites.includes(producto.id)}
          rating={getProductRating(producto.id)}
          precioFinal={
            producto.descuento > 0
              ? calcularPrecioFinal(producto.precio, producto.descuento)
              : producto.precio.toFixed(2)
          }
        />
      ))}
    </div>
  );
};

export default VinylCatalog;
