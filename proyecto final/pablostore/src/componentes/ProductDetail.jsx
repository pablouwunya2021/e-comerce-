import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/products";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../hooks/useFavorites";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import ProductActions from "./ProductActions";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const producto = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const [rating, setRating] = useState(() => parseInt(localStorage.getItem(`rating_producto_${id}`)) || 0);
  const [addedToCart, setAddedToCart] = useState(() => localStorage.getItem(`cart_blocked_${id}`) === "true");

  useEffect(() => {
    localStorage.setItem(`rating_producto_${id}`, rating.toString());
  }, [rating]);

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

  const handleIncrement = () => setQuantity(q => q < 9 ? q + 1 : q);
  const handleDecrement = () => setQuantity(q => q > 1 ? q - 1 : 1);

  const handleAddToCart = () => {
    addToCart(itemEnCarrito);
    alert("Producto añadido al carrito");
    if (quantity === 9) {
      setAddedToCart(true);
      localStorage.setItem(`cart_blocked_${id}`, "true");
    }
  };

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div className="product-detail-container">
      <ProductImage producto={producto} />
      <ProductInfo producto={producto} precioFinal={precioFinal} />
      <ProductRating rating={rating} setRating={setRating} />
      <ProductActions
        producto={producto}
        quantity={quantity}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleAddToCart={() => handleAddToCart(itemEnCarrito)}
        addedToCart={addedToCart}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default ProductDetail;



