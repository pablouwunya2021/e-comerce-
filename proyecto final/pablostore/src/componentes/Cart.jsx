import React, { useRef, useEffect } from 'react';
import './Cart.css';
import { useCart } from '../context/CartContext';
import CartItemsList from './CartItemsList';
import CartTotal from './CartTotal';
import ClearCartButton from "./ClearCartButton";

const Cart = () => {
  const { cartItems, total } = useCart();
  const lastItemRef = useRef(null);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cartItems]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Carrito de Compras
      </h2>

      {cartItems.length === 0 ? (
        <p className="empty" style={{ textAlign: "center", marginTop: "2rem" }}>
          Tu carrito está vacío.
        </p>
      ) : (
        <div
          className="cart-container"
          style={{
            backgroundColor: "#ffe2e2",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
            padding: "1.5rem",
            display: "flex",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          <CartItemsList items={cartItems} lastItemRef={lastItemRef} />
          <CartTotal total={total} />
          <ClearCartButton />
        </div>
      )}
    </div>
  );
};

export default Cart;
