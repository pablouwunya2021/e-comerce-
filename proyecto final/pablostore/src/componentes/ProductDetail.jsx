import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/products.js";
import { useCart } from "../context/CartContext";
import StarRating from "./StarRating";
import { useFavorites } from "../hooks/useFavorites";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const producto = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const localRatingKey = `rating_producto_${id}`;
  const [rating, setRating] = useState(() => {
    const saved = localStorage.getItem(localRatingKey);
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem(localRatingKey, rating.toString());
  }, [rating]);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const precioFinal = producto?.descuento
    ? (producto.precio * (1 - producto.descuento / 100)).toFixed(2)
    : producto?.precio.toFixed(2);

  const itemEnCarrito = useMemo(() => ({
    id: producto?.id,
    nombre: producto?.nombre,
    precio: parseFloat(precioFinal),
    cantidad: quantity,
    categoria: producto?.categoria,
    img: producto?.img,
    total: parseFloat((parseFloat(precioFinal) * quantity).toFixed(2)),
  }), [producto, quantity, precioFinal]);

  const handleAddToCart = () => {
    addToCart(itemEnCarrito);
    alert("Producto añadido al carrito");
  };

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div className="product-detail-container">
      <img src={producto.img} alt={producto.nombre} className="product-image" />
      <div className="product-info">
        <h2>{producto.nombre}</h2>
        <p className="descripcion">{producto.descripcion}</p>
        <p><strong>Categoría:</strong> {producto.categoria}</p>

        {/* Mostrar precio con descuento si aplica */}
        {producto.descuento ? (
          <p>
            <strong>Precio: </strong>
            <span style={{ color: '#d62828', fontSize: '1.1rem' }}>${precioFinal}</span>
            <span style={{ textDecoration: 'line-through', marginLeft: '0.5rem', color: '#888' }}>
              ${producto.precio.toFixed(2)}
            </span>
            <span style={{ marginLeft: '0.5rem', color: '#2a9d8f', fontWeight: 'bold' }}>
              −{producto.descuento}%
            </span>
          </p>
        ) : (
          <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
        )}

        <div className="rating-section">
          <p><strong>Califica este producto:</strong></p>
          <StarRating rating={rating} onRatingChange={setRating} />
          <p className="current-rating">Calificación actual: {rating} estrellas</p>
        </div>

        <div className="quantity-controls">
          <button onClick={handleDecrement}>−</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>

        <div className="action-buttons">
          <button className="add-to-cart" onClick={handleAddToCart}>Añadir al carrito</button>
          <button
            className={`favorite-btn ${favorites.includes(producto.id) ? 'favorito' : ''}`}
            onClick={() => toggleFavorite(producto.id)}
          >
            {favorites.includes(producto.id) ? '★ Favorito' : '☆ Marcar como favorito'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;


